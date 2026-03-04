import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const formData = await req.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const redirectTo = formData.get('redirect') as string || '/dashboard'

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.error('Signin error:', error)
    return redirect(
      `/auth/login?error=${encodeURIComponent(error.message || 'Invalid credentials')}`
    )
  }

  // Verify the session was created
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    console.error('Session not created after signin')
    return redirect(
      `/auth/login?error=${encodeURIComponent('Failed to create session')}`
    )
  }

  revalidatePath('/', 'layout')
  redirect(redirectTo)
}
