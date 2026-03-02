import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NanoBanana2 - Complete Guide to Google's AI Image Model",
  description:
    "Everything you need to know about NanoBanana2 (Nano Banana 2): Google's next-gen AI image generation model with 4K output, logical reasoning, and lightning-fast generation. Free complete guide.",
  alternates: {
    canonical: "https://nanobananatwo.com/nanobanana2",
  },
  openGraph: {
    title: "NanoBanana2 - Complete Guide to Google's AI Image Model",
    description:
      "Everything you need to know about NanoBanana2: 4K output, logical reasoning, multi-language support, and lightning-fast image generation.",
    url: "https://nanobananatwo.com/nanobanana2",
  },
};

const specs = [
  { label: "Model Name", value: "NanoBanana2 (Nano Banana 2)" },
  { label: "Developer", value: "Google DeepMind" },
  { label: "Architecture", value: "Gemini (Multimodal)" },
  { label: "Max Output Resolution", value: "4K (via super-resolution)" },
  { label: "Native Resolution", value: "2K" },
  { label: "Generation Speed", value: "Milliseconds" },
  { label: "Text Rendering", value: "Multi-language (EN, ZH, JA, AR, etc.)" },
  { label: "Reasoning", value: "Mathematical & symbolic logic" },
  { label: "API Access", value: "Google AI Studio / Vertex AI" },
  { label: "Pricing", value: "Free tier available" },
];

const comparison = [
  {
    feature: "Generation Speed",
    nanobanana2: "Milliseconds",
    nanobananaPro: "~2-5 seconds",
  },
  {
    feature: "Max Resolution",
    nanobanana2: "4K (upscaled)",
    nanobananaPro: "2K",
  },
  {
    feature: "Text in Images",
    nanobanana2: "Multi-language, high accuracy",
    nanobananaPro: "English, moderate accuracy",
  },
  {
    feature: "Logical Reasoning",
    nanobanana2: "Yes (math, symbolic)",
    nanobananaPro: "Limited",
  },
  {
    feature: "3D Object Manipulation",
    nanobanana2: "Enhanced",
    nanobananaPro: "Basic",
  },
  {
    feature: "Consistent Characters",
    nanobanana2: "Advanced consistency",
    nanobananaPro: "Moderate consistency",
  },
  {
    feature: "UI Reproduction",
    nanobanana2: "Pixel-perfect",
    nanobananaPro: "Approximate",
  },
  {
    feature: "API Available",
    nanobanana2: "Yes",
    nanobananaPro: "Yes",
  },
];

const platforms = [
  {
    name: "Google AI Studio",
    description:
      "The official platform for accessing NanoBanana2 directly. Free tier available with generous usage limits. Best for developers and power users who want full control over parameters.",
    url: "https://aistudio.google.com/",
    badge: "Official",
  },
  {
    name: "Gemini App",
    description:
      "NanoBanana2 is the default image generation model in the Gemini app. The easiest way to get started — just open Gemini and start creating.",
    url: "https://gemini.google.com/",
    badge: "Easiest",
  },
  {
    name: "iMini AI",
    description:
      "First third-party platform to integrate NanoBanana2. Offers additional features like batch processing and workflow automation on top of the base model.",
    url: "#",
    badge: "Third-Party",
  },
  {
    name: "Lovart",
    description:
      "Creative-focused platform with NanoBanana2 integration. Great for designers and artists who want a polished UI and creative-oriented workflow tools.",
    url: "#",
    badge: "Creative",
  },
  {
    name: "Pixlr",
    description:
      "Popular online photo editor that has integrated NanoBanana2 for AI-powered editing capabilities. Combines traditional editing tools with AI generation.",
    url: "https://pixlr.com/",
    badge: "Editor",
  },
];

const useCases = [
  {
    title: "Social Media Content",
    description:
      "Generate eye-catching visuals for Instagram, Twitter, and TikTok in seconds. Create consistent brand imagery without hiring a designer.",
  },
  {
    title: "Product Photography",
    description:
      "Create professional product shots, lifestyle images, and marketing materials. Edit backgrounds, lighting, and staging with simple text prompts.",
  },
  {
    title: "Educational Materials",
    description:
      "Generate diagrams, illustrations, and visual explanations for courses, presentations, and textbooks. The logical reasoning capability ensures accuracy.",
  },
  {
    title: "Web & App Design",
    description:
      "Rapidly prototype UI designs, generate placeholder images, and create design mockups. NanoBanana2 can reproduce pixel-perfect UI environments.",
  },
  {
    title: "Art & Creative Projects",
    description:
      "Explore artistic styles, create concept art, and generate illustrations for personal or commercial creative projects in any visual style.",
  },
  {
    title: "Marketing & Advertising",
    description:
      "Produce ad creatives, banner images, and campaign visuals at scale. Multi-language text rendering makes global campaigns effortless.",
  },
];

const faqs = [
  {
    question: "What is NanoBanana2?",
    answer:
      "NanoBanana2 is Google's second-generation AI image generation model, built on the Gemini multimodal architecture. It represents a major upgrade over the original Nano Banana model, featuring 4K resolution output, multi-language text rendering, mathematical reasoning capabilities, and generation speeds measured in milliseconds rather than seconds.",
  },
  {
    question: "How is NanoBanana2 different from NanoBanana Pro?",
    answer:
      "NanoBanana2 and NanoBanana Pro serve different purposes. NanoBanana2 focuses on speed and new capabilities like logical reasoning and 4K output. NanoBanana Pro is optimized for professional-grade consistency and fine-tuned control. Both are excellent, but NanoBanana2 is the newer model with more advanced features.",
  },
  {
    question: "Is NanoBanana2 the same as NanoBananaTwo?",
    answer:
      "Yes, NanoBananaTwo is simply the written-out form of NanoBanana2. They refer to the same Google AI image generation model. Other common names include Nano Banana 2, Nano Banana Two, and NB2.",
  },
  {
    question: "Can I use NanoBanana2 for commercial projects?",
    answer:
      "Yes, images generated with NanoBanana2 through Google's official platforms can be used for commercial purposes, subject to Google's terms of service. Always review the specific platform's usage terms, especially for third-party integrations.",
  },
  {
    question: "Does NanoBanana2 have an API?",
    answer:
      "Yes, developers can access NanoBanana2 through Google AI Studio API and Vertex AI. The API supports text-to-image generation, image editing, and all other model capabilities. Google provides comprehensive documentation and SDKs for Python, Node.js, and other languages.",
  },
  {
    question: "What file formats does NanoBanana2 support?",
    answer:
      "NanoBanana2 can generate images in PNG and WebP formats. For input (when editing existing images), it accepts JPEG, PNG, and WebP files up to 5MB. The model outputs at native 2K resolution, with optional 4K upscaling.",
  },
];

export default function NanoBanana2Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "NanoBanana2: Complete Guide to Google's AI Image Model",
    description:
      "Everything you need to know about NanoBanana2, Google's next-gen AI image generation model with 4K output, logical reasoning, and lightning-fast generation.",
    url: "https://nanobananatwo.com/nanobanana2",
    publisher: {
      "@type": "Organization",
      name: "NanoBananaTwo",
      url: "https://nanobananatwo.com",
    },
    mainEntityOfPage: "https://nanobananatwo.com/nanobanana2",
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

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6"
      >
        <ol className="flex items-center gap-2 text-sm text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground font-medium">NanoBanana2 Guide</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="pt-10 pb-16 sm:pt-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              Complete Guide
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              NanoBanana2: Everything You
              <br />
              Need to Know
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              NanoBanana2 is Google&apos;s next-generation AI image generation
              model that combines speed, quality, and intelligence. This guide
              covers everything from technical specifications to practical use
              cases — whether you&apos;re a developer, designer, or curious creator.
            </p>
          </div>
        </div>
      </section>

      {/* What is NanoBanana2 */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            What is NanoBanana2?
          </h2>
          <div className="prose max-w-none text-muted leading-relaxed space-y-4">
            <p>
              <strong className="text-foreground">NanoBanana2</strong> (also
              written as Nano Banana 2 or{" "}
              <Link href="/" className="text-primary hover:underline">
                NanoBananaTwo
              </Link>
              ) is the second generation of Google&apos;s AI image generation model,
              developed by Google DeepMind. Built on the Gemini multimodal
              architecture, NanoBanana2 represents a significant leap forward in
              AI-powered visual content creation.
            </p>
            <p>
              Unlike traditional image generators that simply map text to
              pixels, NanoBanana2 integrates deep learning with reasoning
              capabilities. It understands not just <em>what</em> you want to
              create, but <em>why</em> and <em>how</em> it should appear. This
              makes it the first AI image model capable of generating
              mathematically accurate diagrams, scientifically correct
              illustrations, and logically structured visual content.
            </p>
            <p>
              The model delivers native 2K resolution with instant 4K
              upscaling, multi-language text rendering across English, Chinese,
              Japanese, Arabic, and more, and generation speeds measured in
              milliseconds — making it significantly faster than competitors
              like DALL-E 3, Midjourney, and Stable Diffusion.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Technical Specifications
          </h2>
          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {specs.map((spec, i) => (
                  <tr
                    key={spec.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-foreground w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NanoBanana2 vs NanoBanana Pro */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            NanoBanana2 vs. NanoBanana Pro
          </h2>
          <p className="text-muted mb-8 max-w-2xl">
            How does NanoBanana2 compare to its sibling model? Here&apos;s a
            feature-by-feature breakdown.
          </p>
          <div className="bg-white border border-border rounded-2xl overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-primary">
                    NanoBanana2
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted">
                    NanoBanana Pro
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-white" : "bg-surface"}
                  >
                    <td className="px-6 py-3.5 text-sm font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-sm text-foreground">
                      {row.nanobanana2}
                    </td>
                    <td className="px-6 py-3.5 text-sm text-muted">
                      {row.nanobananaPro}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where to Use */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Where to Use NanoBanana2
          </h2>
          <p className="text-muted mb-8 max-w-2xl">
            NanoBanana2 is available across multiple platforms. Choose the one
            that fits your workflow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <article
                key={platform.name}
                className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-semibold text-foreground">
                    {platform.name}
                  </h3>
                  <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-0.5 rounded-full">
                    {platform.badge}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {platform.description}
                </p>
                {platform.url !== "#" && (
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-semibold hover:underline"
                  >
                    Visit Platform &rarr;
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What You Can Create with NanoBanana2
          </h2>
          <p className="text-muted mb-8 max-w-2xl">
            From social media graphics to professional product shots,
            NanoBanana2 handles a wide range of creative tasks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  {uc.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {uc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use NanoBanana2 */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            How to Use NanoBanana2 (Step-by-Step)
          </h2>
          <div className="max-w-3xl space-y-8">
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Choose Your Platform
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Open{" "}
                  <a
                    href="https://aistudio.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google AI Studio
                  </a>{" "}
                  for full control, or the Gemini app for the simplest
                  experience. Third-party platforms like Pixlr are great if you
                  need additional editing tools.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Write Your Prompt or Upload an Image
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  For generation: describe what you want in natural language. Be
                  specific about style, composition, lighting, and subject. For
                  editing: upload your image (JPEG, PNG, or WebP, up to 5MB) and
                  describe the changes.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Configure Settings (Optional)
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Adjust output dimensions, style presets, and quality settings
                  if needed. For most use cases, the defaults work excellently.
                  Enable 4K upscaling for print-quality output.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center text-sm font-bold shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Generate and Download
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  Hit generate and receive your image in seconds (often
                  milliseconds). Download in your preferred format. Iterate on
                  the prompt if you want to refine the result.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            NanoBanana2 FAQ
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Start Creating with NanoBanana2 Today
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            Free to use, no downloads required. Jump into Google AI Studio and
            start generating images in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Try NanoBanana2 Free
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
            <Link
              href="/nanobananatwo-alternatives"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:border-primary/30 hover:text-primary transition-colors"
            >
              Compare Alternatives
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
