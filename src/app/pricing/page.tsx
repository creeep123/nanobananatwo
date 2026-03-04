import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import PricingClient from './PricingClient'

export const metadata: Metadata = {
  title: 'Pricing - NanoBananaTwo',
  description: 'Choose the perfect plan for your AI image generation needs. Free trial, credit packs, and monthly subscriptions available.',
}

export default async function PricingPage() {
  const supabase = await createClient()

  // Fetch credit packages
  const { data: creditPackages } = await supabase
    .from('nb2_credit_packages')
    .select('*')
    .eq('is_active', true)
    .order('display_order')

  // Fetch subscription plans
  const { data: subscriptionPlans } = await supabase
    .from('nb2_subscription_plans')
    .select('*')
    .eq('is_active', true)
    .order('display_order')

  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <PricingClient
      creditPackages={creditPackages || []}
      subscriptionPlans={subscriptionPlans || []}
      user={user}
    />
  )
}
