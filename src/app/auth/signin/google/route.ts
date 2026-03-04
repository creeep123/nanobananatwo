import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {
  const formData = await req.formData()
  const redirectTo = formData.get('redirect') as string || '/dashboard'

  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback?redirect=${encodeURIComponent(redirectTo)}`,
    },
  })

  if (error) {
    return redirect(
      `/auth/login?error=${encodeURIComponent('Unable to sign in with Google. Please try again.')}`
    )
  }

  redirect(data.url)
}
