import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary">
          NanoBananaTwo
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link
              href="/nanobanana2"
              className="text-muted hover:text-primary transition-colors"
            >
              NanoBanana2 Guide
            </Link>
          </li>
          <li>
            <Link
              href="/nanobanana-free"
              className="text-muted hover:text-primary transition-colors"
            >
              Free Access
            </Link>
          </li>
          <li>
            <Link
              href="/free-image-generator"
              className="text-muted hover:text-primary transition-colors"
            >
              Free Generators
            </Link>
          </li>
          <li>
            <Link
              href="/nanobananatwo-alternatives"
              className="text-muted hover:text-primary transition-colors"
            >
              Alternatives
            </Link>
          </li>
          <li>
            <a
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Try Free
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
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
