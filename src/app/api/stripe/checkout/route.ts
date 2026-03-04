import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { stripe } from '@/lib/stripe/config'
import Stripe from 'stripe'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const revalidate = 0

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { type, packageId, planId, billingCycle = 'monthly' } = body

    if (!type || (type === 'credit_pack' && !packageId) || (type === 'subscription' && !planId)) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    let stripePriceId: string | null = null
    let metadata: Record<string, string> = {}
    let successUrl: string = `${baseUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`
    let cancelUrl: string = `${baseUrl}/pricing?canceled`

    // Get or create Stripe customer
    const { data: profile } = await supabase
      .from('nb2_profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    let customerId = profile?.stripe_customer_id

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: user.email,
        metadata: {
          supabase_user_id: user.id,
        },
      })
      customerId = customer.id

      // Save customer ID to profile
      await supabase
        .from('nb2_profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id)
    }

    if (type === 'credit_pack') {
      // Fetch credit package details
      const { data: creditPackage } = await supabase
        .from('nb2_credit_packages')
        .select('*')
        .eq('id', packageId)
        .single()

      if (!creditPackage) {
        return NextResponse.json(
          { error: 'Credit package not found' },
          { status: 404 }
        )
      }

      // For now, we'll use the price_id from the database if it exists
      // In production, you should create products in Stripe and use their price IDs
      stripePriceId = creditPackage.stripe_price_id

      if (!stripePriceId) {
        return NextResponse.json(
          { error: 'Stripe price not configured for this package' },
          { status: 400 }
        )
      }

      metadata = {
        type: 'credit_pack',
        package_id: packageId,
        credits: creditPackage.credits.toString(),
        user_id: user.id,
      }

      successUrl = `${baseUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`
      cancelUrl = `${baseUrl}/pricing?canceled`

    } else if (type === 'subscription') {
      // Fetch subscription plan details
      const { data: subscriptionPlan } = await supabase
        .from('nb2_subscription_plans')
        .select('*')
        .eq('id', planId)
        .single()

      if (!subscriptionPlan) {
        return NextResponse.json(
          { error: 'Subscription plan not found' },
          { status: 404 }
        )
      }

      // Get the appropriate price ID based on billing cycle
      stripePriceId = billingCycle === 'yearly'
        ? subscriptionPlan.stripe_yearly_price_id
        : subscriptionPlan.stripe_monthly_price_id

      if (!stripePriceId) {
        return NextResponse.json(
          { error: `Stripe price not configured for ${billingCycle} billing` },
          { status: 400 }
        )
      }

      metadata = {
        type: 'subscription',
        plan_id: planId,
        billing_cycle: billingCycle,
        user_id: user.id,
      }

      successUrl = `${baseUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`
      cancelUrl = `${baseUrl}/pricing?canceled`
    }

    // Create checkout session
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      customer: customerId as string,
      mode: type === 'subscription' ? 'subscription' : 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePriceId as string,
          quantity: 1,
        },
      ],
      metadata,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: true,
      customer_update: {
        address: 'auto',
        name: 'auto',
      },
    }

    const session = await stripe.checkout.sessions.create(sessionParams)

    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    })

  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
