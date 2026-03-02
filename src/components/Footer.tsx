import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-bold text-primary">
              NanoBananaTwo
            </Link>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              Your comprehensive guide to NanoBananaTwo (NanoBanana2), Google&apos;s
              next-generation AI image generation and editing model.
            </p>
          </div>

          {/* Tools - Main Tool Pages */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Image Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/nanobanana2"
                  className="text-muted hover:text-primary transition-colors"
                >
                  NanoBanana2 Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Free AI Tools - Free Resource Pages */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Free AI Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/nanobanana-free"
                  className="text-muted hover:text-primary transition-colors"
                >
                  NanoBanana Free Access
                </Link>
              </li>
              <li>
                <Link
                  href="/free-image-generator"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Free Image Generators
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources - Comparison & Alternatives */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/nanobananatwo-alternatives"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Compare Alternatives
                </Link>
              </li>
              <li>
                <a
                  href="https://aistudio.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Google AI Studio
                </a>
              </li>
              <li>
                <a
                  href="https://deepmind.google/technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                >
                  Google DeepMind
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-light">
          <p>
            &copy; {new Date().getFullYear()} NanoBananaTwo.com. This site is not
            affiliated with Google. NanoBanana2 is a trademark of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
