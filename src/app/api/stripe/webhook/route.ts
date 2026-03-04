import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { stripe } from '@/lib/stripe/config'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const revalidate = 0

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!webhookSecret) {
    return NextResponse.json(
      { error: 'Webhook secret not configured' },
      { status: 500 }
    )
  }

  // Get the raw body for signature verification
  const rawBody = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    )
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      webhookSecret
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  const supabase = await createClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleCheckoutComplete(session, supabase)
        break
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionCreated(subscription, supabase)
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionUpdated(subscription, supabase)
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        await handleSubscriptionDeleted(subscription, supabase)
        break
      }

      case 'invoice.paid': {
        const invoice = event.data.object as Stripe.Invoice
        await handleInvoicePaid(invoice, supabase)
        break
      }

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })

  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
}

// Handle successful checkout
async function handleCheckoutComplete(session: Stripe.Checkout.Session, supabase: any) {
  const { metadata, customer, payment_intent } = session
  const userId = metadata?.user_id
  const type = metadata?.type

  if (!userId) return

  if (type === 'credit_pack') {
    const packageId = metadata?.package_id
    const credits = parseInt(metadata?.credits || '0')

    // Fetch package details
    const { data: creditPackage } = await supabase
      .from('nb2_credit_packages')
      .select('*')
      .eq('id', packageId)
      .single()

    // Get current user credits
    const { data: currentCredits } = await supabase
      .from('nb2_user_credits')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (currentCredits) {
      const newTotalCredits = currentCredits.total_credits + credits
      const newPurchasedCredits = currentCredits.purchased_credits + credits

      // Update user credits
      await supabase
        .from('nb2_user_credits')
        .update({
          total_credits: newTotalCredits,
          purchased_credits: newPurchasedCredits,
          updated_at: new Date().toISOString(),
        })
        .eq('user_id', userId)

      // Record transaction
      await supabase
        .from('nb2_credit_transactions')
        .insert({
          user_id: userId,
          amount: credits,
          type: 'purchase',
          balance_after: newTotalCredits,
          description: `Purchased ${creditPackage?.name} (${credits} credits)`,
          metadata: {
            stripe_payment_intent: payment_intent,
            stripe_session: session.id,
            package_id: packageId,
          },
        })
    }
  }
}

// Handle new subscription
async function handleSubscriptionCreated(subscription: Stripe.Subscription, supabase: any) {
  const customerId = subscription.customer as string
  const planId = subscription.metadata?.plan_id
  const billingCycle = subscription.metadata?.billing_cycle

  // Get user from Stripe customer ID
  const { data: profile } = await supabase
    .from('nb2_profiles')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single()

  if (!profile) return

  // Get subscription plan details
  const { data: plan } = await supabase
    .from('nb2_subscription_plans')
    .select('*')
    .eq('id', planId)
    .single()

  if (!plan) return

  // Create user subscription record
  await supabase
    .from('nb2_user_subscriptions')
    .upsert({
      user_id: profile.id,
      plan_id: planId,
      stripe_subscription_id: subscription.id,
      stripe_customer_id: customerId,
      status: subscription.status as any,
      current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
      current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
    })

  // Grant initial subscription credits
  const { data: currentCredits } = await supabase
    .from('nb2_user_credits')
    .select('*')
    .eq('user_id', profile.id)
    .single()

  if (currentCredits) {
    await supabase
      .from('nb2_user_credits')
      .update({
        subscription_credits: plan.credits_per_month,
        total_credits: currentCredits.purchased_credits + plan.credits_per_month,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', profile.id)
  }
}

// Handle subscription update
async function handleSubscriptionUpdated(subscription: Stripe.Subscription, supabase: any) {
  const customerId = subscription.customer as string

  const { data: profile } = await supabase
    .from('nb2_profiles')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single()

  if (!profile) return

  await supabase
    .from('nb2_user_subscriptions')
    .update({
      status: subscription.status as any,
      current_period_start: new Date((subscription as any).current_period_start * 1000).toISOString(),
      current_period_end: new Date((subscription as any).current_period_end * 1000).toISOString(),
      cancel_at_period_end: subscription.cancel_at_period_end,
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscription.id)
}

// Handle subscription deletion/cancellation
async function handleSubscriptionDeleted(subscription: Stripe.Subscription, supabase: any) {
  const customerId = subscription.customer as string

  const { data: profile } = await supabase
    .from('nb2_profiles')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single()

  if (!profile) return

  // Update subscription status
  await supabase
    .from('nb2_user_subscriptions')
    .update({
      status: 'canceled',
      updated_at: new Date().toISOString(),
    })
    .eq('stripe_subscription_id', subscription.id)

  // Remove subscription credits (keep them until period ends)
  // They will be reset on next invoice.paid event
}

// Handle successful invoice payment (subscription renewal)
async function handleInvoicePaid(invoice: Stripe.Invoice, supabase: any) {
  const subscriptionId = (invoice as any).subscription as string
  const customerId = invoice.customer as string

  if (!subscriptionId) return

  const { data: userSub } = await supabase
    .from('nb2_user_subscriptions')
    .select('*, nb2_subscription_plans(*)')
    .eq('stripe_subscription_id', subscriptionId)
    .single()

  if (!userSub) return

  const plan = userSub.nb2_subscription_plans
  const userId = userSub.user_id

  // Reset and grant new subscription credits
  const { data: currentCredits } = await supabase
    .from('nb2_user_credits')
    .select('*')
    .eq('user_id', userId)
    .single()

  if (currentCredits && plan) {
    await supabase
      .from('nb2_user_credits')
      .update({
        subscription_credits: plan.credits_per_month,
        total_credits: currentCredits.purchased_credits + plan.credits_per_month,
        updated_at: new Date().toISOString(),
      })
      .eq('user_id', userId)

    // Record transaction
    await supabase
      .from('nb2_credit_transactions')
      .insert({
        user_id: userId,
        amount: plan.credits_per_month,
        type: 'subscription',
        balance_after: currentCredits.purchased_credits + plan.credits_per_month,
        description: `Subscription renewal: ${plan.name}`,
        metadata: {
          stripe_invoice: invoice.id,
          subscription_id: subscriptionId,
        },
      })
  }
}
