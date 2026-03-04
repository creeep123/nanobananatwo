import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import DashboardClient from './DashboardClient'

export const metadata: Metadata = {
  title: 'Dashboard - NanoBananaTwo',
  description: 'Manage your credits and view your generation history.',
}

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login?redirect=/dashboard')
  }

  // Get user profile
  const { data: profile } = await supabase
    .from('nb2_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  // Get user credits
  const { data: credits } = await supabase
    .from('nb2_user_credits')
    .select('*')
    .eq('user_id', user.id)
    .single()

  // Get recent generations
  const { data: generations } = await supabase
    .from('nb2_generations')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(10)

  // Get credit transactions
  const { data: transactions } = await supabase
    .from('nb2_credit_transactions')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <DashboardClient
      user={{ ...user, ...profile }}
      credits={credits}
      generations={generations || []}
      transactions={transactions || []}
    />
  )
}
