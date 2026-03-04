export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at?: string
  updated_at?: string
  stripe_customer_id?: string
}

export interface Credits {
  user_id: string
  total_credits: number
  free_limit: number
  free_used: number
  purchased_credits: number
  subscription_credits: number
  created_at: string
  updated_at: string
}

export interface Generation {
  id: string
  user_id: string
  prompt: string
  image_url?: string
  model?: string
  status: 'pending' | 'processing' | 'completed' | 'failed'
  error?: string
  created_at: string
}

export interface CreditTransaction {
  id: string
  user_id: string
  amount: number
  type: 'purchase' | 'usage' | 'subscription' | 'refund' | 'bonus'
  balance_after: number
  description?: string
  metadata?: Record<string, any>
  created_at: string
}

export interface UserSubscription {
  id: string
  user_id: string
  plan_id: string
  stripe_subscription_id: string
  stripe_customer_id: string
  status: 'active' | 'past_due' | 'canceled' | 'unpaid' | 'trialing'
  current_period_start?: string
  current_period_end?: string
  cancel_at_period_end?: boolean
  created_at: string
  updated_at?: string
}

export interface CreditPackage {
  id: string
  name: string
  credits: number
  price: number
  stripe_price_id: string
  is_active: boolean
  display_order: number
  description?: string
  created_at: string
  updated_at: string
}

export interface SubscriptionPlan {
  id: string
  name: string
  description?: string
  credits_per_month: number
  monthly_price: number
  yearly_price: number
  stripe_monthly_price_id?: string
  stripe_yearly_price_id?: string
  is_active: boolean
  display_order: number
  features: string[]
  created_at: string
  updated_at: string
}
