import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET() {
  const config = {
    supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
    supabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    stripeKey: !!process.env.STRIPE_SECRET_KEY,
    stripePublishableKey: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    appUrl: process.env.NEXT_PUBLIC_APP_URL,
  }

  return NextResponse.json({
    status: 'ok',
    environment: process.env.NODE_ENV,
    config,
    message: config.supabaseUrl && config.supabaseAnonKey
      ? 'Supabase 配置正常'
      : 'Supabase 环境变量缺失',
  })
}
