"use client"

import { useState } from 'react'
import Link from 'next/link'
import { createSupabaseClient } from '@/lib/supabase/client'
import { CreditPackage, SubscriptionPlan } from '@/types/auth'

interface PricingClientProps {
  creditPackages: CreditPackage[]
  subscriptionPlans: SubscriptionPlan[]
  user: any
}

export default function PricingClient({
  creditPackages,
  subscriptionPlans,
  user,
}: PricingClientProps) {
  const supabase = createSupabaseClient()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [selectedPack, setSelectedPack] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handlePurchaseCreditPack = async (packageId: string) => {
    if (!user) {
      window.location.href = '/auth/login?redirect=/pricing'
      return
    }

    setIsLoading(packageId)
    setSelectedPack(packageId)

    try {
      // This would typically call a Stripe checkout endpoint
      // For now, we'll show a message
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'credit_pack',
          packageId,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error initiating checkout:', error)
      setIsLoading(null)
    }
  }

  const handleSubscribe = async (planId: string) => {
    if (!user) {
      window.location.href = '/auth/login?redirect=/pricing'
      return
    }

    setIsLoading(planId)

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'subscription',
          planId,
          billingCycle,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Error initiating checkout:', error)
      setIsLoading(null)
    }
  }

  const getYearlySavings = (plan: SubscriptionPlan) => {
    const yearlyMonthly = plan.monthly_price * 12
    const savings = yearlyMonthly - plan.yearly_price
    return Math.round((savings / yearlyMonthly) * 100)
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/10 via-white to-primary/5 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Choose the perfect plan for your creative needs. No hidden fees, cancel anytime.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Credit Packs Section */}
        <section id="credit-packs" className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Credit Packs
            </h2>
            <p className="text-muted">
              One-time purchase, credits never expire
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creditPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white border rounded-2xl p-6 transition-all ${
                  selectedPack === pkg.id
                    ? 'border-primary shadow-lg ring-2 ring-primary/20'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">
                    {pkg.credits}
                  </span>
                  <span className="text-muted ml-1">credits</span>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-primary">
                    ${pkg.price}
                  </span>
                </div>
                <div className="text-sm text-muted mb-6">
                  ${(pkg.price / pkg.credits).toFixed(3)} per image
                </div>
                <button
                  onClick={() => handlePurchaseCreditPack(pkg.id)}
                  disabled={isLoading === pkg.id}
                  className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                    selectedPack === pkg.id
                      ? 'bg-primary text-white'
                      : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {isLoading === pkg.id ? 'Processing...' : 'Purchase'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Subscription Plans Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Subscription Plans
            </h2>
            <p className="text-muted">
              Save up to 20% with yearly billing
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`text-sm font-medium transition-colors ${
                billingCycle === 'monthly'
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                billingCycle === 'yearly'
                  ? 'bg-primary text-white'
                  : 'bg-primary/10 text-primary hover:bg-primary/20'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subscriptionPlans.map((plan, index) => {
              const isPopular = plan.name.toLowerCase() === 'pro'
              const price = billingCycle === 'monthly' ? plan.monthly_price : plan.yearly_price
              const savings = billingCycle === 'yearly' ? getYearlySavings(plan) : 0
              const features = Array.isArray(plan.features) ? plan.features : []

              return (
                <div
                  key={plan.id}
                  className={`bg-white border rounded-2xl p-6 relative transition-all ${
                    isPopular
                      ? 'border-primary shadow-xl ring-2 ring-primary/20 scale-105'
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>

                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      ${price}
                    </span>
                    <span className="text-muted">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>

                  {savings > 0 && (
                    <div className="mb-4">
                      <span className="text-sm text-green-600 font-medium">
                        Save ${((plan.monthly_price * 12 - plan.yearly_price).toFixed(2))} per year
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <span className="text-foreground font-medium">
                      {plan.credits_per_month}
                    </span>
                    <span className="text-muted"> generations/month</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                        <svg
                          className="w-5 h-5 text-primary shrink-0 mt-0.5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleSubscribe(plan.id)}
                    disabled={isLoading === plan.id}
                    className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                      isPopular
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isLoading === plan.id ? 'Processing...' : 'Subscribe'}
                  </button>
                </div>
              )
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                What happens when I use my free credits?
              </h3>
              <p className="text-sm text-muted">
                After using your 3 free generations, you can purchase credit packs or subscribe to a plan. Credits from packs never expire, and subscription credits renew each month.
              </p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Can I change my plan later?
              </h3>
              <p className="text-sm text-muted">
                Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect at the next billing cycle.
              </p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                Do unused credits roll over?
              </h3>
              <p className="text-sm text-muted">
                Purchased credit packs never expire. Subscription credits reset each month, but unused credits from the previous month are carried over.
              </p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-sm text-muted">
                We accept all major credit cards, debit cards, and PayPal through our secure Stripe payment processor.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Not sure yet?
            </h2>
            <p className="text-muted mb-6">
              Start with your 3 free generations and see the quality for yourself!
            </p>
            {!user ? (
              <Link
                href="/auth/signup"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Get Started Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
              >
                Start Generating
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
