import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {
  const formData = await req.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('fullName') as string
  const redirectTo = formData.get('redirect') as string || '/dashboard'

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}${redirectTo}`,
    },
  })

  if (error) {
    console.error('Signup error:', error)
    return redirect(
      `/auth/signup?error=${encodeURIComponent(error.message || 'Sign up failed')}`
    )
  }

  // Create user profile
  if (data.user) {
    const { error: profileError } = await supabase
      .from('nb2_profiles')
      .insert({
        id: data.user.id,
        full_name: fullName,
        email: email,
        free_limit: 3,
        free_used: 0,
      })

    if (profileError) {
      console.error('Profile creation error:', profileError)
    }

    // Create initial credits entry
    const { error: creditsError } = await supabase
      .from('nb2_user_credits')
      .insert({
        user_id: data.user.id,
        total_credits: 3,
        free_limit: 3,
        free_used: 0,
        purchased_credits: 0,
        subscription_credits: 0,
      })

    if (creditsError) {
      console.error('Credits creation error:', creditsError)
    }
  }

  revalidatePath('/', 'layout')

  // Since autoconfirm is enabled, redirect to dashboard
  // User will be logged in automatically
  redirect(redirectTo)
}
