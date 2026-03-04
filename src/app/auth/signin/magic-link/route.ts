import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {
  const formData = await req.formData()
  const email = formData.get('email') as string
  const redirectTo = formData.get('redirect') as string || '/dashboard'

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}${redirectTo}`,
    },
  })

  if (error) {
    return redirect(
      `/auth/login?error=${encodeURIComponent('Unable to send magic link. Please try again.')}`
    )
  }

  revalidatePath('/', 'layout')
  redirect(
    `/auth/login?message=${encodeURIComponent('Check your email for the magic link!')}`
  )
}
