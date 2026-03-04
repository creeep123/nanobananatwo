import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
  title: 'Sign In - NanoBananaTwo',
  description: 'Sign in to your NanoBananaTwo account to generate amazing AI images.',
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string; error?: string; message?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect(params.redirect || '/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-primary/5 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-primary">
              NanoBananaTwo
            </h1>
          </Link>
          <p className="mt-2 text-sm text-muted">
            Sign in to start creating amazing AI images
          </p>
        </div>

        {/* Error Message */}
        {params.error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-600">{decodeURIComponent(params.error)}</p>
          </div>
        )}

        {/* Success Message */}
        {params.message && (
          <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-green-600">{decodeURIComponent(params.message)}</p>
          </div>
        )}

        {/* Auth Card */}
        <div className="bg-white border border-border rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Welcome back
          </h2>

          {/* Password Login Form */}
          <form action="/auth/signin/password" method="POST" className="space-y-4">
            <input
              type="hidden"
              name="redirect"
              value={params.redirect || '/dashboard'}
            />

            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-foreground mb-2">
                Email address
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
              />
            </div>

            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-muted">
            Don't have an account?{' '}
            <Link
              href="/auth/signup"
              className="text-primary font-medium hover:text-primary-dark transition-colors"
            >
              Sign up for free
            </Link>
          </p>
        </div>

        {/* Terms */}
        <p className="mt-6 text-center text-xs text-muted-light">
          By continuing, you agree to our{' '}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  )
}
