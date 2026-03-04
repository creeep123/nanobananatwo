import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {
  const formData = await req.formData()
  const email = formData.get('email') as string
  const fullName = formData.get('fullName') as string

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`,
      data: {
        full_name: fullName,
      },
    },
  })

  if (error) {
    return redirect(
      `/auth/signup?error=${encodeURIComponent('Unable to send magic link. Please try again.')}`
    )
  }

  revalidatePath('/', 'layout')
  redirect(
    `/auth/signup?message=${encodeURIComponent('Check your email for the magic link to complete your signup!')}`
  )
}
