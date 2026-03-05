"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createSupabaseClient } from "@/lib/supabase/client";
import { LogoSVG, LogoIcon } from "./Logo";

export default function Header() {
  const supabase = createSupabaseClient();
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const navLinks = [
    { href: "/showcase", label: "Showcase" },
    { href: "/pricing", label: "Pricing" },
    { href: "/nanobanana2", label: "Guide" },
    { href: "/nanobananatwo-alternatives", label: "Alternatives" },
  ];

  const resourceLinks = [
    { href: "/showcase", label: "Showcase Gallery" },
    { href: "/guides/how-to-use", label: "How to Use Guide" },
    { href: "/guides/prompt-guide", label: "Prompt Writing Tips" },
    { href: "/guides/free-alternatives", label: "Free Alternatives" },
    { href: "/nanobanana-free", label: "Free Access" },
    { href: "/free-image-generator", label: "Free Generators" },
  ];

  return (
    <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" aria-label="NanoBananaTwo Home">
          <LogoSVG className="w-10 h-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {/* Main Links */}
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Resources Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-foreground hover:text-primary transition-colors">
              Resources
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6-6"/>
                <path d="m18 15-6-6"/>
              </svg>
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-white border border-border rounded-xl shadow-lg py-2 min-w-[160px]">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Auth Section */}
          {!isLoading && (
            <>
              {user ? (
                <>
                  <li>
                    <Link
                      href="/dashboard"
                      className="text-muted hover:text-primary transition-colors"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="text-muted hover:text-primary transition-colors"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/auth/login"
                      className="text-muted hover:text-primary transition-colors"
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/auth/signup"
                      className="inline-flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Get 3 Free
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 12M6 18l12-12"/>
            </svg>
          ) : (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white py-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted uppercase tracking-wide">
                Product
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-muted uppercase tracking-wide">
                Resources
              </div>
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {!isLoading && (
              <>
                {user ? (
                  <div className="pt-3 border-t border-border space-y-2">
                    <Link
                      href="/dashboard"
                      className="block py-2 text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-border space-y-2">
                    <Link
                      href="/auth/login"
                      className="block py-2 text-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="inline-flex items-center justify-center gap-2 w-full bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get 3 Free
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
