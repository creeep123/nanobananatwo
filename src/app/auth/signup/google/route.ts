import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function POST(req: Request) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
      scopes: 'profile email',
    },
  })

  if (error) {
    return redirect(
      `/auth/signup?error=${encodeURIComponent('Unable to sign up with Google. Please try again.')}`
    )
  }

  redirect(data.url)
}
