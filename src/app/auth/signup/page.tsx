import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
  title: 'Sign Up - NanoBananaTwo',
  description: 'Create your NanoBananaTwo account and get 3 free AI image generations.',
}

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const params = await searchParams
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (user) {
    redirect('/dashboard')
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
            Create your account and start creating amazing AI images
          </p>
        </div>

        {/* Free Trial Banner */}
        <div className="mb-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 text-center">
          <p className="text-sm font-medium text-primary">
            🎉 Get 3 free image generations to start!
          </p>
        </div>

        {/* Error Message */}
        {params.error && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
            <p className="text-sm text-red-600">{decodeURIComponent(params.error)}</p>
          </div>
        )}

        {/* Auth Card */}
        <div className="bg-white border border-border rounded-2xl shadow-sm p-8">
          <h2 className="text-xl font-semibold text-foreground mb-6">
            Create your account
          </h2>

          {/* Password Signup Form */}
          <form action="/auth/signup/password" method="POST" className="space-y-4">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-foreground mb-2">
                Full name
              </label>
              <input
                id="full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
              />
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-foreground mb-2">
                Email address
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
              />
            </div>

            <div>
              <label htmlFor="signup-password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="At least 6 characters"
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
              />
              <p className="mt-1 text-xs text-muted">Must be at least 6 characters</p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="text-primary font-medium hover:text-primary-dark transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Terms */}
        <p className="mt-6 text-center text-xs text-muted-light">
          By signing up, you agree to our{' '}
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
