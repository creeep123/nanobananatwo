import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const supabase = await createClient()
    const { data: { user }, error: userError } = await supabase.auth.getUser()

    const cookieStore = await cookies()
    const allCookies = cookieStore.getAll()

    return NextResponse.json({
      hasUser: !!user,
      user: user ? {
        id: user.id,
        email: user.email,
        emailConfirmed: user.email_confirmed_at,
      } : null,
      userError: userError?.message,
      cookies: allCookies.map(c => ({ name: c.name, hasValue: !!c.value })),
      env: {
        hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        appUrl: process.env.NEXT_PUBLIC_APP_URL,
      },
    })
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      stack: error.stack,
    }, { status: 500 })
  }
}
