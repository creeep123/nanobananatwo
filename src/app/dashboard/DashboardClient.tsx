"use client"

import { useState } from 'react'
import Link from 'next/link'
import { User, Credits, Generation } from '@/types/auth'
import { createSupabaseClient } from '@/lib/supabase/client'

interface DashboardClientProps {
  user: User & { id: string; email: string }
  credits: Credits | null
  generations: Generation[]
  transactions: any[]
}

export default function DashboardClient({
  user,
  credits,
  generations,
  transactions,
}: DashboardClientProps) {
  const supabase = createSupabaseClient()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    setIsLoading(true)
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  const freeRemaining = credits ? Math.max(0, credits.free_limit - credits.free_used) : 0
  const hasFreeCredits = freeRemaining > 0

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-primary">
              NanoBananaTwo
            </Link>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                disabled={isLoading}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {isLoading ? 'Signing out...' : 'Sign out'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground">
            Welcome back, {user.full_name || user.email?.split('@')[0]}!
          </h1>
          <p className="mt-1 text-muted">
            Here's your account overview
          </p>
        </div>

        {/* Credits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Free Credits */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted">Free Generations</h3>
              <span className="text-2xl">🎁</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">
                {freeRemaining}
              </span>
              <span className="text-muted">/ {credits?.free_limit || 3}</span>
            </div>
            {hasFreeCredits && (
              <Link
                href="/"
                className="mt-4 block text-center bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm"
              >
                Generate Now
              </Link>
            )}
            {!hasFreeCredits && (
              <div className="mt-4 text-center text-sm text-muted">
                Free trial used up
              </div>
            )}
          </div>

          {/* Purchased Credits */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted">Purchased Credits</h3>
              <span className="text-2xl">💳</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">
                {credits?.purchased_credits || 0}
              </span>
            </div>
            <Link
              href="/pricing#credit-packs"
              className="mt-4 block text-center bg-white border border-primary text-primary py-2 rounded-lg font-medium hover:bg-primary/5 transition-colors text-sm"
            >
              Get More Credits
            </Link>
          </div>

          {/* Subscription Credits */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-muted">Subscription Credits</h3>
              <span className="text-2xl">⭐</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">
                {credits?.subscription_credits || 0}
              </span>
              <span className="text-muted">/ month</span>
            </div>
            <Link
              href="/pricing"
              className="mt-4 block text-center bg-white border border-primary text-primary py-2 rounded-lg font-medium hover:bg-primary/5 transition-colors text-sm"
            >
              Subscribe & Save
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Generations */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">
                Recent Generations
              </h2>
              <Link
                href="/dashboard/history"
                className="text-sm text-primary hover:text-primary-dark transition-colors"
              >
                View all
              </Link>
            </div>

            {generations.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted">No generations yet</p>
                <Link
                  href="/"
                  className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Create Your First Image
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {generations.slice(0, 5).map((gen) => (
                  <div
                    key={gen.id}
                    className="flex gap-4 p-3 bg-surface rounded-lg"
                  >
                    {gen.image_url && (
                      <img
                        src={gen.image_url}
                        alt={gen.prompt}
                        className="w-16 h-16 object-cover rounded"
                      />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground line-clamp-2">
                        {gen.prompt}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        {new Date(gen.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Transactions */}
          <div className="bg-white border border-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">
                Recent Transactions
              </h2>
            </div>

            {transactions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted">No transactions yet</p>
                <Link
                  href="/pricing"
                  className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  Get Credits
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {transactions.slice(0, 5).map((tx) => (
                  <div
                    key={tx.id}
                    className="flex items-center justify-between p-3 bg-surface rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {tx.description || tx.type}
                      </p>
                      <p className="text-xs text-muted">
                        {new Date(tx.created_at).toLocaleString()}
                      </p>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        tx.amount > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {tx.amount > 0 ? '+' : ''}{tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
