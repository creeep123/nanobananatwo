import Link from "next/link";

export const metadata = {
  title: "NanoBanana Free - How to Access NanoBananaTwo Without Paying (2026 Guide)",
  description:
    "Discover how to use NanoBananaTwo for free in 2026. Complete guide to free AI image generation with Google's NanoBanana2 model. No payment required, no hidden costs.",
  alternates: {
    canonical: "https://nanobananatwo.com/nanobanana-free",
  },
};

const faqs = [
  {
    question: "Is NanoBananaTwo really free to use?",
    answer:
      "Yes, NanoBananaTwo is completely free to use through Google AI Studio, the Gemini app, and Google Search AI mode. There are no subscription fees, no credit card requirements, and no hidden costs. You can generate unlimited images without paying anything.",
  },
  {
    question: "Where can I access NanoBananaTwo for free?",
    answer:
      "The best places to access NanoBananaTwo for free are: Google AI Studio (aistudio.google.com), the Gemini mobile app, and Google Search with AI mode enabled. All three platforms provide full access to NanoBanana2's image generation capabilities at no cost.",
  },
  {
    question: "Are there any limitations on the free version?",
    answer:
      "Google AI Studio offers generous free usage limits that are sufficient for most users. While there may be rate limits during peak usage times, these are temporary restrictions rather than paid gates. The Gemini app provides free access with no artificial limits.",
  },
  {
    question: "Do I need to create an account to use NanoBananaTwo?",
    answer:
      "For Google AI Studio, you need a Google account. However, the Gemini app works with your existing Google credentials, and Google Search AI mode requires no additional setup. All methods are completely free—no credit card needed.",
  },
  {
    question: "How does the free NanoBananaTwo compare to paid alternatives?",
    answer:
      "NanoBananaTwo's free version outperforms many paid alternatives in terms of speed, quality, and features. While tools like Midjourney charge $10-60/month and DALL-E requires paid API credits, NanoBanana2 delivers superior text-to-image generation at zero cost.",
  },
  {
    question: "Can I use NanoBananaTwo commercially for free?",
    answer:
      "Google's terms allow commercial use of images generated through their platforms. However, always check the latest terms of service as policies may change. For large-scale commercial applications, consider using Google's API which has a generous free tier.",
  },
];

const platforms = [
  {
    name: "Google AI Studio",
    url: "https://aistudio.google.com/",
    description: "Official web platform with full NanoBanana2 access",
    features: ["No installation required", "Advanced settings available", "Desktop and mobile support", "Direct download options"],
    cta: "Try Free Now",
  },
  {
    name: "Gemini App",
    description: "Mobile app with integrated image generation",
    features: ["Available on iOS and Android", "Voice input support", "Image editing capabilities", "History saved automatically"],
    cta: "Download App",
    note: "Free with Google account",
  },
  {
    name: "Google Search AI",
    description: "Quick image generation directly in search results",
    features: ["Fastest access method", "No account setup needed", "Integrated with search context", "Perfect for quick generations"],
    cta: "Try in Search",
    note: "Enable AI mode in settings",
  },
];

const comparison = [
  { feature: "Cost", nanobanana: "100% Free", dallE: "Paid credits required", midjourney: "$10-60/month" },
  { feature: "Generation Speed", nanobanana: "<1 second", dallE: "10-30 seconds", midjourney: "30-60 seconds" },
  { feature: "Max Resolution", nanobanana: "4K native", dallE: "1024x1024", midjourney: "Up to 2048x2048" },
  { feature: "Text Rendering", nanobanana: "50+ languages", dallE: "Limited", midjourney: "Poor accuracy" },
  { feature: "API Access", nanobanana: "Free tier available", dallE: "Paid only", midjourney: "Not available" },
];

export default function NanoBananaFreePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    url: metadata.alternates.canonical,
    datePublished: "2026-03-02",
    author: {
      "@type": "Organization",
      name: "NanoBananaTwo",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-green-50 to-white pt-16 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
                100% Free Forever
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-4">
                NanoBanana Free
              </h1>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                The complete guide to accessing NanoBananaTwo AI image generation without paying a cent.
              </p>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                </svg>
                Access NanoBanana2 Free Right Now:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <a
                  href="https://aistudio.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Google AI Studio</div>
                    <div className="text-xs text-muted">Web Platform</div>
                  </div>
                </a>
                <a
                  href="https://gemini.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Gemini App</div>
                    <div className="text-xs text-muted">Mobile App</div>
                  </div>
                </a>
                <Link
                  href="/free-image-generator"
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-colors"
                >
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">More Free Tools</div>
                    <div className="text-xs text-muted">Explore Options</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Why NanoBananaTwo is the Best Free AI Image Generator
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                In 2026, AI image generation has become accessible to everyone thanks to Google&apos;s NanoBananaTwo model.
                Unlike competitors that require expensive subscriptions, NanoBanana2 offers professional-quality image generation
                completely free. Whether you&apos;re a designer, content creator, or hobbyist, you can access cutting-edge AI imagery
                without spending a dime.
              </p>
              <p className="text-muted leading-relaxed">
                This guide covers every free method to access NanoBananaTwo, compares it with paid alternatives, and helps you
                maximize your free usage. No credit cards, no hidden fees, no subscriptions—just powerful AI image generation
                at your fingertips.
              </p>
            </section>

            {/* Free Platforms Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Top 3 Ways to Use NanoBananaTwo for Free
              </h2>
              <div className="space-y-6">
                {platforms.map((platform, index) => (
                  <div key={platform.name} className="bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {index + 1}. {platform.name}
                        </h3>
                        <p className="text-muted text-sm">{platform.description}</p>
                      </div>
                      {platform.url ? (
                        <a
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
                        >
                          {platform.cta}
                          <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                          </svg>
                        </a>
                      ) : (
                        <span className="text-sm text-muted bg-surface px-3 py-1 rounded-full">{platform.note}</span>
                      )}
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                          <svg className="w-4 h-4 text-green-500 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Detailed Guide Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Step-by-Step: Getting Started with NanoBanana2 Free
              </h2>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
                Using Google AI Studio (Recommended)
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Google AI Studio provides the most comprehensive free access to NanoBananaTwo. Follow these simple steps:
              </p>
              <ol className="space-y-3 text-muted mb-6">
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <span>Visit <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aistudio.google.com</a> in your web browser</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <span>Sign in with your Google account (or create one free)</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <span>Select &quot;Generate Image&quot; from the available tools</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">4</span>
                  <span>Enter your text prompt and click Generate</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">5</span>
                  <span>Download your image in up to 4K resolution</span>
                </li>
              </ol>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">
                Tips for Best Free Results
              </h3>
              <ul className="space-y-2 text-muted">
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                  </svg>
                  <span>Use detailed prompts for better quality results</span>
                </li>
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                  </svg>
                  <span>Experiment with style modifiers (e.g., &quot;photorealistic,&quot; &quot;anime style,&quot; &quot;oil painting&quot;)</span>
                </li>
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                  </svg>
                  <span>Take advantage of the built-in image editor for refinements</span>
                </li>
                <li className="flex gap-2">
                  <svg className="w-5 h-5 text-primary shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />
                  </svg>
                  <span>Enable 4K upscaling for print-quality images</span>
                </li>
              </ul>
            </section>

            {/* Comparison Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                NanoBanana2 Free vs. Paid Alternatives
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Many users wonder how a free tool can compete with paid services. The table below shows how NanoBananaTwo&apos;s
                free version actually outperforms expensive alternatives.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead className="bg-surface">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">Feature</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-primary">NanoBanana2 Free</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-muted">DALL-E 3</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-muted">Midjourney</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparison.map((row) => (
                      <tr key={row.feature} className="bg-white">
                        <td className="px-4 py-3 text-sm font-medium text-foreground">{row.feature}</td>
                        <td className="px-4 py-3 text-sm text-center text-primary font-medium">{row.nanobanana}</td>
                        <td className="px-4 py-3 text-sm text-center text-muted">{row.dallE}</td>
                        <td className="px-4 py-3 text-sm text-center text-muted">{row.midjourney}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted mt-4">
                *As of March 2026. Competitor pricing and features may change.
              </p>
            </section>

            {/* Cost Comparison Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What You Could Save with NanoBanana2 Free
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Let&apos;s look at the actual costs of popular AI image generators compared to NanoBananaTwo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="bg-white border border-border rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">$180/yr</div>
                  <div className="text-sm font-medium text-foreground mb-1">Midjourney Basic</div>
                  <div className="text-xs text-muted">~200 images/month</div>
                </div>
                <div className="bg-white border border-border rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">$300+/yr</div>
                  <div className="text-sm font-medium text-foreground mb-1">DALL-E API</div>
                  <div className="text-xs text-muted">Pay per generation</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                  <div className="text-sm font-medium text-foreground mb-1">NanoBanana2</div>
                  <div className="text-xs text-muted">Unlimited access</div>
                </div>
              </div>

              <p className="text-muted leading-relaxed">
                Over a year, that&apos;s a savings of <strong className="text-foreground">$180-500+</strong> that you can invest
                elsewhere in your creative projects. NanoBananaTwo proves that the best things in AI really are free.
              </p>
            </section>

            {/* Advanced Features Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Advanced Features Available Free
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Unlike other &quot;freemium&quot; tools that gate their best features behind paywalls, NanoBananaTwo includes
                advanced capabilities at no cost:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">4K Resolution</h3>
                  </div>
                  <p className="text-sm text-muted">Generate at 2K native resolution with instant 4K upscaling using advanced super-resolution algorithms.</p>
                </div>

                <div className="bg-white border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 8l6 6" /><path d="M4 14l6-6 2-3" /><path d="M2 5h12" /><path d="M7 2h1" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">Multi-Language Text</h3>
                  </div>
                  <p className="text-sm text-muted">Render text in 50+ languages including Chinese, Japanese, Arabic, and right-to-left scripts.</p>
                </div>

                <div className="bg-white border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">AI Photo Editing</h3>
                  </div>
                  <p className="text-sm text-muted">Upload and edit existing images using natural language instructions—remove backgrounds, change styles, swap objects.</p>
                </div>

                <div className="bg-white border border-border rounded-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-foreground">Lightning Speed</h3>
                  </div>
                  <p className="text-sm text-muted">Generate images in milliseconds, not minutes. Faster than any competing AI image generator.</p>
                </div>
              </div>
            </section>

            {/* Common Use Cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                What Can You Create for Free?
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                With NanoBananaTwo&apos;s free access, creators are producing professional content across many industries:
              </p>

              <div className="space-y-3">
                {[
                  { category: "Social Media", examples: "Instagram posts, TikTok thumbnails, YouTube covers" },
                  { category: "Marketing", examples: "Ad creatives, product mockups, brand visuals" },
                  { category: "Content Creation", examples: "Blog illustrations, ebook covers, podcast art" },
                  { category: "Personal Projects", examples: "Wallpapers, profile pictures, gift designs" },
                  { category: "Professional Design", examples: "Website graphics, presentation slides, client mockups" },
                ].map((useCase) => (
                  <div key={useCase.category} className="flex gap-3 items-start bg-white border border-border rounded-lg p-4">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{useCase.category}</div>
                      <div className="text-sm text-muted">{useCase.examples}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group bg-white border border-border rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 text-foreground font-semibold hover:text-primary transition-colors">
                    {faq.question}
                    <svg
                      className="w-5 h-5 text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-muted text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-gradient-to-r from-primary/5 to-purple-50 border border-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Ready to Create for Free?
            </h2>
            <p className="text-muted mb-6 max-w-xl mx-auto">
              Start generating stunning AI images with NanoBananaTwo today. No credit card, no downloads, no limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors"
              >
                Try NanoBanana2 Free
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" /><path d="M7 7h10v10" />
                </svg>
              </a>
              <Link
                href="/free-image-generator"
                className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:border-primary/30 transition-colors"
              >
                Explore More Free Tools
              </Link>
            </div>
          </section>
        </article>

        {/* Related Content Section - Aidocmaker Style */}
        <section className="bg-surface py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-foreground mb-6">Related Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/nanobanana2" className="bg-white border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                <div className="text-sm text-primary font-medium mb-2">Complete Guide</div>
                <div className="font-semibold text-foreground mb-1">What is NanoBanana2?</div>
                <div className="text-sm text-muted">Learn everything about Google's AI image model</div>
              </Link>
              <Link href="/free-image-generator" className="bg-white border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                <div className="text-sm text-primary font-medium mb-2">Comparison</div>
                <div className="font-semibold text-foreground mb-1">Best Free AI Image Generators</div>
                <div className="text-sm text-muted">Compare all free tools in 2026</div>
              </Link>
              <Link href="/nanobananatwo-alternatives" className="bg-white border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                <div className="text-sm text-primary font-medium mb-2">Alternatives</div>
                <div className="font-semibold text-foreground mb-1">NanoBananaTwo vs Competitors</div>
                <div className="text-sm text-muted">See detailed comparisons with DALL-E, Midjourney & more</div>
              </Link>
              <Link href="/" className="bg-white border border-border rounded-lg p-5 hover:border-primary/30 transition-colors">
                <div className="text-sm text-primary font-medium mb-2">Home</div>
                <div className="font-semibold text-foreground mb-1">NanoBananaTwo Image Generator</div>
                <div className="text-sm text-muted">Try the free online tool directly</div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
