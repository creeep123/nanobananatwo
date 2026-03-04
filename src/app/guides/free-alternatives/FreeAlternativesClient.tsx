"use client";

import Link from "next/link";

const alternatives = [
  {
    name: "Microsoft Designer (Bing Image Creator)",
    url: "https://www.bing.com/create",
    description: "Free AI image generator powered by DALL-E 3. Requires Microsoft account.",
    features: [
      "Uses DALL-E 3 technology",
      "Completely free with Microsoft account",
      "Simple and easy to use",
    ],
    limits: "25 generations per day with free Microsoft account",
    rating: 4.5,
    bestFor: "Beginners and casual users",
    logo: "B",
    color: "from-blue-100 to-cyan-100",
  },
  {
    name: "Leonardo.ai",
    url: "https://leonardo.ai",
    description: "Feature-rich AI art platform with generous free tier.",
    features: [
      "150 free credits daily",
      "Multiple AI models",
      "Built-in editing tools",
    ],
    limits: "150 daily credits on free tier, resets daily",
    rating: 4.7,
    bestFor: "Artists and content creators",
    logo: "L",
    color: "from-purple-100 to-violet-100",
  },
  {
    name: "Stable Diffusion (Online)",
    url: "https://stablediffusionweb.com",
    description: "Open-source AI image generator with free web access.",
    features: [
      "Open source and free",
      "Multiple web interfaces",
      "Custom model support",
    ],
    limits: "Varies by platform, many options available",
    rating: 4.3,
    bestFor: "Technical users and tinkerers",
    logo: "S",
    color: "from-green-100 to-emerald-100",
  },
  {
    name: "Canva AI Image Generator",
    url: "https://www.canva.com",
    description: "AI image generation integrated with Canva's design tools.",
    features: [
      "Integrated with design tools",
      "User-friendly interface",
      "Commercial use available",
    ],
    limits: "Limited free generations per month",
    rating: 4.4,
    bestFor: "Designers and marketers",
    logo: "C",
    color: "from-cyan-100 to-teal-100",
  },
  {
    name: "Adobe Firefly",
    url: "https://www.adobe.com/products/firefly.html",
    description: "Adobe's AI image generator trained on Adobe Stock content.",
    features: [
      "Commercial-safe images",
      "Integrated with Adobe apps",
      "Text effects and recoloring",
    ],
    limits: "25 monthly free credits",
    rating: 4.6,
    bestFor: "Professional designers and businesses",
    logo: "F",
    color: "from-orange-100 to-amber-100",
  },
  {
    name: "Ideogram",
    url: "https://ideogram.ai",
    description: "AI image generator specializing in accurate text rendering.",
    features: [
      "Excellent text rendering",
      "Typographic control",
      "Multiple style options",
    ],
    limits: "20 prompts per day on free tier",
    rating: 4.2,
    bestFor: "Designs with text overlay",
    logo: "I",
    color: "from-pink-100 to-rose-100",
  },
];

const comparisonData = [
  { feature: "Free Daily Credits", nanobanana: "3-10", bing: "25/day", leonardo: "150/day", stableDiffusion: "Varies", canva: "Limited" },
  { feature: "Image Quality", nanobanana: "Excellent (2K native)", bing: "Excellent (DALL-E 3)", leonardo: "Very Good", stableDiffusion: "Good", canva: "Good" },
  { feature: "Speed", nanobanana: "Fastest (<1s)", bing: "Fast (~10s)", leonardo: "Medium (10-20s)", stableDiffusion: "Slow (10-30s)", canva: "Fast (~10s)" },
  { feature: "Text Rendering", nanobanana: "Excellent (multi-language)", bing: "Good", leonardo: "Good", stableDiffusion: "Fair", canva: "Good" },
  { feature: "Commercial Use", nanobanana: "Yes", bing: "Yes (check terms)", leonardo: "Paid plans only", stableDiffusion: "Yes (open source)", canva: "Yes (with plan)" },
];

const tips = [
  {
    title: "Use Multiple Platforms",
    description: "Different tools excel at different styles. Keep accounts on multiple platforms and use each for its strengths.",
  },
  {
    title: "Maximize Free Credits",
    description: "Time your generations strategically. Leonardo.ai's credits reset daily, so use them every day. Bing's 25/day limit is generous for regular use.",
  },
  {
    title: "Upgrade When Needed",
    description: "Start with free tiers to learn. Upgrade to paid plans only when you hit limits consistently—most paid plans offer significant value at $10-20/month.",
  },
  {
    title: "Watch for Promotions",
    description: "Many platforms offer bonus credits for new features, referrals, or special events. Follow their social media for opportunities.",
  },
];

const faqs = [
  {
    question: "Is NanoBananaTwo really free to use?",
    answer: "Yes, NanoBananaTwo offers free access through Google AI Studio and various third-party platforms. The free tier typically includes 3-10 image generations, which is perfect for testing the tool. For heavy usage, you may need to purchase credits or subscribe to a paid plan.",
  },
  {
    question: "Which free AI image generator is best for beginners?",
    answer: "Microsoft Designer (Bing Image Creator) is the most beginner-friendly option. It uses DALL-E 3, has a simple interface, and offers 25 free generations per day. Leonardo.ai is also excellent for beginners with its generous daily credits and helpful tutorials.",
  },
  {
    question: "Can I use free AI-generated images commercially?",
    answer: "Commercial use policies vary by platform. NanoBananaTwo allows commercial use, as does Stable Diffusion (open source). Bing Image Creator and Canva allow commercial use with some restrictions. Always check the current terms of service before using images commercially.",
  },
  {
    question: "What's the difference between free and paid AI image generators?",
    answer: "Paid plans typically offer: more daily/monthly credits, faster generation speeds, higher resolution outputs, advanced features (inpainting, upscaling, custom models), and guaranteed commercial use rights. Free tiers are perfect for casual use and testing.",
  },
  {
    question: "How do I get more free image generations?",
    answer: "Strategies include: 1) Use multiple platforms with different daily limits, 2) Time your usage around daily credit resets (Leonardo.ai resets at midnight), 3) Look for referral bonuses and promotions, 4) Join Discord communities for bonus credit opportunities, 5) Consider paid plans if you consistently hit limits—they're often cost-effective for serious users.",
  },
];

export default function FreeAlternativesClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Free AI Image Generator Alternatives to NanoBananaTwo 2026",
    description: "Comprehensive comparison of free AI image generators similar to NanoBananaTwo",
    url: "https://nanobananatwo.com/guides/free-alternatives",
    datePublished: "2026-01-01",
    author: {
      "@type": "Organization",
      name: "NanoBananaTwo",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
              100% Free Tools
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Free AI Image Generator <span className="text-green-600">Alternatives</span>
            </h1>
            <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">
              Discover the best free alternatives to NanoBananaTwo. Compare features, limits,
              and find the perfect tool for your needs without spending a dime.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-8 bg-green-50 border-y border-green-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">6</div>
              <div className="text-sm text-muted mt-1">Top Alternatives</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">$0</div>
              <div className="text-sm text-muted mt-1">Cost to Start</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-muted mt-1">Free Options</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">Updated</div>
              <div className="text-sm text-muted mt-1">For 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Top Free AI Image Generators
            </h2>
            <p className="mt-4 text-muted">
              Comprehensive comparison of the best free alternatives
            </p>
          </div>

          <div className="space-y-6">
            {alternatives.map((alt, idx) => (
              <article
                key={idx}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="flex gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${alt.color} rounded-xl flex items-center justify-center text-2xl font-bold text-primary shrink-0`}>
                    {alt.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-foreground">{alt.name}</h3>
                      <div className="flex items-center gap-1 shrink-0">
                        <svg className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span className="font-semibold text-foreground">{alt.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted text-sm mb-3">{alt.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {alt.features.map((feature, fIdx) => (
                        <span key={fIdx} className="text-xs px-2.5 py-1 rounded-full bg-green-50 text-green-700 font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted">Best for:</span>
                        <span className="text-foreground font-medium ml-1">{alt.bestFor}</span>
                      </div>
                      <span className="text-xs text-muted">{alt.limits}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Feature Comparison
            </h2>
          </div>

          <div className="bg-white border border-border rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-primary/5">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
                  <th className="px-4 py-3 text-center font-semibold text-primary">NanoBananaTwo</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Bing/DALL-E</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Leonardo.ai</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Stable Diff.</th>
                  <th className="px-4 py-3 text-center font-semibold text-foreground">Canva</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {comparisonData.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-4 py-3 font-medium text-foreground">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-primary font-semibold">{row.nanobanana}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.bing}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.leonardo}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.stableDiffusion}</td>
                    <td className="px-4 py-3 text-center text-muted">{row.canva}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Tips for Maximizing Free Usage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-6">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                <p className="text-muted text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 text-foreground font-semibold hover:text-primary transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-muted group-open:rotate-180 transition-transform shrink-0 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-muted text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Try NanoBananaTwo for Free
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Start creating stunning AI images today. No credit card required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              Start Creating Free
            </Link>
            <Link
              href="/guides/how-to-use"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:border-primary/30 hover:text-primary transition-colors"
            >
              Learn How to Use
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides - Internal Linking */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">
              Master AI Image Generation
            </h2>
            <p className="mt-2 text-muted">
              Learn how to create stunning images with our comprehensive guides
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/guides/how-to-use"
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  How to Use Guide
                </h3>
              </div>
              <p className="text-sm text-muted">
                Step-by-step tutorial for beginners to get started with AI image generation
              </p>
            </Link>
            <Link
              href="/guides/prompt-guide"
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z"/>
                  </svg>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Prompt Engineering
                </h3>
              </div>
              <p className="text-sm text-muted">
                Master prompt writing techniques with examples, tips, and best practices
              </p>
            </Link>
            <Link
              href="/showcase"
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Image Gallery
                </h3>
              </div>
              <p className="text-sm text-muted">
                Browse 50+ AI-generated examples with copyable prompts for inspiration
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
