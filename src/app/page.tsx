import type { Metadata } from "next";
import Link from "next/link";
import ImageGenerator from "@/components/ImageGenerator";
import ScrollToTop from "@/components/ScrollToTop";
import { LogoLarge } from "@/components/Logo";

export const metadata: Metadata = {
  title: "NanoBananaTwo - Free AI Image Generator & Editor Online",
  description:
    "Generate stunning AI images instantly with NanoBananaTwo. Free online AI image generator powered by Google's NanoBanana2 model. Create art, edit photos, and generate 4K visuals in seconds.",
  alternates: {
    canonical: "https://nanobananatwo.com",
  },
};

const features = [
  {
    title: "Text-to-Image Generation",
    description:
      "Transform any text prompt into stunning, high-quality images. NanoBananaTwo understands complex descriptions and generates visuals that match your creative vision with remarkable accuracy.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 00-2 2v9a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
    ),
  },
  {
    title: "AI-Powered Photo Editing",
    description:
      "Edit your photos using natural language instructions. Simply describe what you want to change — remove backgrounds, adjust lighting, swap objects — and NanoBananaTwo handles the rest.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z"/></svg>
    ),
  },
  {
    title: "4K Resolution Output",
    description:
      "Generate images at native 2K resolution with instant upscaling to 4K using advanced super-resolution algorithms. Perfect for print-quality artwork and professional design projects.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>
    ),
  },
  {
    title: "Multi-Language Text Rendering",
    description:
      "Render text in multiple languages — English, Chinese, Japanese, Arabic, and more — directly within generated images. Ideal for multilingual marketing materials and social media content.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>
    ),
  },
  {
    title: "Lightning-Fast Generation",
    description:
      "Experience image generation in milliseconds, not minutes. NanoBananaTwo delivers results significantly faster than competitors like DALL-E, Midjourney, and Stable Diffusion.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
  },
  {
    title: "Logical Reasoning in Visuals",
    description:
      "The first AI image model to integrate mathematical reasoning and symbolic logic into visual generation. Create scientifically accurate diagrams, proofs, and technical illustrations effortlessly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>
    ),
  },
];

const stats = [
  { number: "10M+", label: "Images Generated" },
  { number: "<1s", label: "Average Speed" },
  { number: "4K", label: "Max Resolution" },
  { number: "100%", label: "Free to Use" },
];

const faqs = [
  {
    question: "What is NanoBananaTwo?",
    answer:
      "NanoBananaTwo (also known as NanoBanana2 or Nano Banana 2) is Google's next-generation AI image generation and editing model. Built on the Gemini architecture, it can generate photorealistic images from text prompts, edit existing photos using natural language instructions, and produce 4K-resolution visuals with unprecedented speed and accuracy.",
  },
  {
    question: "Is NanoBananaTwo free to use?",
    answer:
      "Yes, NanoBananaTwo is available for free through several platforms. Google AI Studio offers free access to the model, and the Gemini app includes NanoBanana2 as its default image generation model. Most third-party platforms provide free credits for new users.",
  },
  {
    question: "How does NanoBananaTwo compare to DALL-E and Midjourney?",
    answer:
      "NanoBananaTwo offers significantly faster generation speeds compared to both DALL-E and Midjourney. It also features unique capabilities like mathematical reasoning in images, multi-language text rendering, and native 4K output. While each tool has its strengths, NanoBananaTwo excels in speed, text accuracy, and logical visual generation.",
  },
  {
    question: "What platforms support NanoBananaTwo?",
    answer:
      "NanoBananaTwo is available through Google AI Studio, the Gemini app, and AI mode in Google Search. Third-party platforms like iMini AI, Lovart, and Pixlr have also integrated the model. Developers can access NanoBanana2 via Google's API for custom applications.",
  },
  {
    question: "Can NanoBananaTwo edit existing photos?",
    answer:
      "Yes, NanoBananaTwo excels at photo editing. You can upload any image and describe the changes you want in plain English — remove backgrounds, change colors, swap objects, adjust lighting, add elements, or transform the entire style. The model understands context and preserves the parts of the image you want to keep.",
  },
];

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "NanoBananaTwo Image Generator",
    url: "https://nanobananatwo.com",
    description:
      "Free AI image generator powered by Google's NanoBanana2 model. Create and edit images with natural language.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "2847",
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

      {/* Hero Section with Tool */}
      <section className="relative bg-gradient-to-b from-purple-50 to-white pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title & Description */}
          <div className="text-center mb-10">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <LogoLarge className="w-48 h-auto sm:w-56 md:w-64" />
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              Powered by Google Gemini
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-3">
              AI Image Generator
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              Create stunning images instantly with Google&apos;s fastest AI model.
              Free, no sign-up required.
            </p>
          </div>

          {/* Interactive Tool */}
          <div className="max-w-4xl mx-auto">
            <ImageGenerator />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-primary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
          {/* Featured Badge */}
          <div className="mt-8 flex justify-center">
            <a href="https://showmebest.ai" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
              <img src="https://showmebest.ai/badge/feature-badge-white.webp" alt="Featured on ShowMeBestAI" width="220" height="60" className="h-auto" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Why Choose NanoBananaTwo?
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              The most advanced AI image generation technology, now accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="bg-white border border-border rounded-2xl p-7 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Free Tools Section - New Internal Linking */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
              </svg>
              100% Free Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Explore Free AI Resources
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Everything you need to know about free AI image generation in 2026.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/nanobanana-free"
              className="group bg-white border-2 border-border hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    NanoBanana Free Access Guide
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    Complete guide to accessing NanoBananaTwo without paying. Learn about all free platforms, tips, and tricks.
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-semibold">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
            <Link
              href="/free-image-generator"
              className="group bg-white border-2 border-border hover:border-primary/30 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Free AI Image Generators Compared
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-3">
                    Compare all free AI image generators in 2026. Find the best tool for your needs with our detailed analysis.
                  </p>
                  <span className="inline-flex items-center text-primary text-sm font-semibold">
                    Compare Now
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                How NanoBananaTwo Works
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Describe Your Vision
                    </h3>
                    <p className="text-muted text-sm">
                      Type what you want to create in plain English. Be as detailed or simple as you like.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      AI Processes Instantly
                    </h3>
                    <p className="text-muted text-sm">
                      NanoBanana2 understands your prompt and generates images in milliseconds.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center font-bold shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Download & Use
                    </h3>
                    <p className="text-muted text-sm">
                      Get your high-quality image ready for any project. Edit, download, or regenerate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-purple-50 rounded-2xl p-8 text-center">
              <div className="space-y-6">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl mx-auto flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4K</div>
                  <div className="text-muted">Resolution Output</div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-foreground">∞</div>
                    <div className="text-xs text-muted">Styles</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-xs text-muted">Languages</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">Free</div>
                    <div className="text-xs text-muted">Forever</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Gallery - Example Images */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Created with NanoBananaTwo
            </h2>
            <p className="mt-3 text-muted">
              Explore stunning AI-generated images from our community
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { id: "ecommerce-1", title: "Luxury Perfume", prompt: "A luxury perfume bottle with gold accents" },
              { id: "portrait-2", title: "Fantasy Character", prompt: "Elegant elven warrior with ornate armor" },
              { id: "anime-1", title: "Anime Portrait", prompt: "Beautiful anime girl with cherry blossoms" },
              { id: "marketing-4", title: "App Launch", prompt: "Mobile app launch promotional image" },
            ].map((example) => (
              <Link
                key={example.id}
                href="/showcase"
                className="group relative aspect-square rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
              >
                <img
                  src={`/showcase/${example.id}.webp`}
                  alt={example.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium truncate">{example.title}</p>
                    <p className="text-white/70 text-xs truncate">{example.prompt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/showcase"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View All 50+ Examples
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Showcase & Guides Section - Internal Linking */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              Gallery & Tutorials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Get Inspired and Learn More
            </h2>
            <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
              Browse our showcase gallery of AI-generated images and learn expert prompting techniques.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/showcase"
              className="group bg-white border-2 border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Image Showcase Gallery
              </h3>
              <p className="text-muted text-sm mb-3">
                50+ AI-generated examples with copyable prompts. Browse e-commerce, portraits, anime, and marketing visuals.
              </p>
              <span className="text-primary text-sm font-semibold inline-flex items-center">
                Browse Gallery
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/guides/how-to-use"
              className="group bg-white border-2 border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                How to Use Guide
              </h3>
              <p className="text-muted text-sm mb-3">
                Step-by-step beginner tutorial for AI image generation. Learn prompt writing from basic to advanced.
              </p>
              <span className="text-primary text-sm font-semibold inline-flex items-center">
                Start Learning
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/guides/prompt-guide"
              className="group bg-white border-2 border-border hover:border-primary/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Prompt Engineering Guide
              </h3>
              <p className="text-muted text-sm mb-3">
                Master prompt writing techniques. Learn structure, keywords, styles, and advanced prompting methods.
              </p>
              <span className="text-primary text-sm font-semibold inline-flex items-center">
                Master Prompts
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/5 to-purple-50 border border-primary/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                NanoBananaTwo vs. Other AI Tools
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                See how NanoBananaTwo compares to DALL-E 3, Midjourney, Stable Diffusion,
                and other popular AI image generators.
              </p>
              <Link
                href="/nanobananatwo-alternatives"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-5 hover:gap-3 transition-all"
              >
                View Detailed Comparison
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="flex gap-3 flex-wrap justify-center">
              {["DALL-E 3", "Midjourney", "Stable Diffusion", "Flux"].map(
                (name) => (
                  <span
                    key={name}
                    className="bg-white border border-border px-4 py-2 rounded-lg text-sm font-medium text-muted"
                  >
                    vs. {name}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted">
              Everything you need to know about NanoBananaTwo.
            </p>
          </div>
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

      {/* Bottom CTA */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Start Creating with NanoBananaTwo
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Join millions creating amazing images with AI. No credit card, no downloads required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <ScrollToTop />
            <Link
              href="/nanobanana2"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:border-primary/30 hover:text-primary transition-colors"
            >
              Learn About NanoBanana2
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}