import Stripe from 'stripe'

let stripeInstance: Stripe | null = null

export function getStripe(): Stripe {
  if (!stripeInstance) {
    stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
      apiVersion: '2026-02-25.clover' as any,
      typescript: true,
    })
  }
  return stripeInstance
}

// Legacy export for backward compatibility
export const stripe = new Proxy({} as Stripe, {
  get(target, prop) {
    return getStripe()[prop as keyof Stripe]
  },
  has(target, prop) {
    return prop in getStripe()
  },
})

export const getStripeCustomerId = async (
  userId: string,
  email: string
): Promise<string> => {
  // In production, you'd fetch from database or create new customer
  // For now, return a placeholder
  const customer = await getStripe().customers.create({
    email,
    metadata: { userId },
  })
  return customer.id
}

export const CREDIT_PACK_PRICES = {
  starter: { credits: 10, price: 0.99 },
  basic: { credits: 30, price: 2.49 },
  standard: { credits: 75, price: 4.99 },
  pro: { credits: 200, price: 9.99 },
}

export const SUBSCRIPTION_PLANS = {
  basic: { credits: 60, monthly: 4.99, yearly: 47.90 },
  pro: { credits: 200, monthly: 9.99, yearly: 95.90 },
  studio: { credits: 600, monthly: 24.99, yearly: 239.90 },
}
