export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      credit_packages: {
        Row: {
          id: string
          name: string
          credits: number
          price: number
          stripe_price_id: string | null
          is_active: boolean
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          credits: number
          price: number
          stripe_price_id?: string | null
          is_active?: boolean
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          credits?: number
          price?: number
          stripe_price_id?: string | null
          is_active?: boolean
          display_order?: number
          created_at?: string
        }
      }
      subscription_plans: {
        Row: {
          id: string
          name: string
          credits_per_month: number
          monthly_price: number
          yearly_price: number
          stripe_monthly_price_id: string | null
          stripe_yearly_price_id: string | null
          features: Json
          is_active: boolean
          display_order: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          credits_per_month: number
          monthly_price: number
          yearly_price: number
          stripe_monthly_price_id?: string | null
          stripe_yearly_price_id?: string | null
          features?: Json
          is_active?: boolean
          display_order?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          credits_per_month?: number
          monthly_price?: number
          yearly_price?: number
          stripe_monthly_price_id?: string | null
          stripe_yearly_price_id?: string | null
          features?: Json
          is_active?: boolean
          display_order?: number
          created_at?: string
        }
      }
      user_credits: {
        Row: {
          id: string
          user_id: string
          total_credits: number
          purchased_credits: number
          bonus_credits: number
          subscription_credits: number
          free_used: number
          free_limit: number
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          total_credits?: number
          purchased_credits?: number
          bonus_credits?: number
          subscription_credits?: number
          free_used?: number
          free_limit?: number
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          total_credits?: number
          purchased_credits?: number
          bonus_credits?: number
          subscription_credits?: number
          free_used?: number
          free_limit?: number
          updated_at?: string
        }
      }
      credit_transactions: {
        Row: {
          id: string
          user_id: string
          amount: number
          type: 'purchase' | 'subscription' | 'free_trial' | 'bonus' | 'generation'
          balance_after: number
          description: string | null
          metadata: Json
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          type: 'purchase' | 'subscription' | 'free_trial' | 'bonus' | 'generation'
          balance_after: number
          description?: string | null
          metadata?: Json
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          type?: 'purchase' | 'subscription' | 'free_trial' | 'bonus' | 'generation'
          balance_after?: number
          description?: string | null
          metadata?: Json
          created_at?: string
        }
      }
      generations: {
        Row: {
          id: string
          user_id: string
          prompt: string
          negative_prompt: string | null
          aspect_ratio: string | null
          image_size: string | null
          style: string | null
          image_url: string | null
          model_used: string
          credits_cost: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          prompt: string
          negative_prompt?: string | null
          aspect_ratio?: string | null
          image_size?: string | null
          style?: string | null
          image_url?: string | null
          model_used: string
          credits_cost?: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          prompt?: string
          negative_prompt?: string | null
          aspect_ratio?: string | null
          image_size?: string | null
          style?: string | null
          image_url?: string | null
          model_used?: string
          credits_cost?: number
          created_at?: string
        }
      }
      user_subscriptions: {
        Row: {
          id: string
          user_id: string
          plan_id: string
          stripe_subscription_id: string | null
          stripe_customer_id: string | null
          status: 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete'
          current_period_start: string | null
          current_period_end: string | null
          cancel_at_period_end: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plan_id?: string
          stripe_subscription_id?: string | null
          stripe_customer_id?: string | null
          status?: 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete'
          current_period_start?: string | null
          current_period_end?: string | null
          cancel_at_period_end?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plan_id?: string
          stripe_subscription_id?: string | null
          stripe_customer_id?: string | null
          status?: 'active' | 'canceled' | 'past_due' | 'trialing' | 'incomplete'
          current_period_start?: string | null
          current_period_end?: string | null
          cancel_at_period_end?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      handle_new_user: () => unknown
      update_updated_at: () => unknown
    }
    Enums: {
      [_ in never]: never
    }
  }
}
