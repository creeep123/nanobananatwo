"use client";

import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Access NanoBananaTwo",
    description: "Start using NanoBananaTwo directly from our homepage—no account required for free trials.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
      </svg>
    ),
    tips: [
      "Visit the homepage to access the free generator",
      "No credit card required for basic usage",
      "Generate up to 3 images free to start",
    ],
  },
  {
    number: "02",
    title: "Write Your Prompt",
    description: "Describe the image you want to create in plain English. The more detailed, the better the results.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg>
    ),
    tips: [
      "Be specific about what you want (subject, style, mood)",
      "Include art styles like 'photorealistic', 'anime', 'digital art'",
      "Add technical details like '4K', 'cinematic lighting', 'golden hour'",
    ],
  },
  {
    number: "03",
    title: "Generate & Refine",
    description: "Click generate and watch NanoBananaTwo create your image in seconds. Refine your prompt and regenerate until perfect.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 11-6.219-8.56"/>
      </svg>
    ),
    tips: [
      "Generation takes less than 1 second with NanoBananaTwo",
      "Generate multiple variations to compare results",
      "Iterate on your prompt based on what works",
    ],
  },
  {
    number: "04",
    title: "Download or Edit",
    description: "Download your image in high resolution or use AI-powered editing to refine it further.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
      </svg>
    ),
    tips: [
      "Download in 2K resolution natively, upscale to 4K",
      "Use image-to-image editing for modifications",
      "Access your generation history with a free account",
    ],
  },
];

const promptExamples = [
  {
    category: "Basic",
    examples: [
      "A cute cat sitting on a windowsill",
      "Sunset over a mountain lake",
      "A red sports car on a city street",
    ],
  },
  {
    category: "Detailed",
    examples: [
      "A majestic lion in the savanna at golden hour, photorealistic, shallow depth of field, 8K",
      "Cyberpunk city street at night, neon lights reflecting on wet pavement, cinematic, blade runner style",
      "Whimsical cottagecore garden with flowers and butterflies, soft watercolor style, dreamy atmosphere",
    ],
  },
  {
    category: "Advanced",
    examples: [
      "Product photography: luxury perfume bottle with gold accents on marble surface, rose petals scattered, studio lighting, bokeh background, commercial quality",
      "Fantasy portrait: elven warrior with ornate silver armor, ancient forest background, cinematic lighting, hyper-detailed, 8K resolution, epic composition",
      "Anime character: cute girl with long pink hair in cherry blossom scene, Studio Ghibli inspired, vibrant colors, manga art style",
    ],
  },
];

const useCases = [
  {
    title: "E-Commerce Product Photos",
    description: "Generate professional product images without expensive photo shoots.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
  },
  {
    title: "Social Media Content",
    description: "Create eye-catching visuals for Instagram, TikTok, and Pinterest.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    title: "Marketing Materials",
    description: "Design ad creatives, banners, and promotional graphics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z"/>
      </svg>
    ),
  },
  {
    title: "Creative Inspiration",
    description: "Explore ideas and concepts for art, design, and storytelling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Do I need to sign up to use NanoBananaTwo?",
    answer: "No, you can start using NanoBananaTwo immediately without creating an account. However, signing up for a free account gives you access to additional features like generation history and more free credits.",
  },
  {
    question: "What image resolution can I generate?",
    answer: "NanoBananaTwo generates images at native 2K resolution (2048x2048 pixels or similar aspect ratios). You can then upscale to 4K resolution using our built-in upscaling feature.",
  },
  {
    question: "How long does image generation take?",
    answer: "NanoBananaTwo is incredibly fast—most images are generated in under 1 second. This makes it significantly faster than other AI image generators like DALL-E 3, Midjourney, or Stable Diffusion.",
  },
  {
    question: "Can I use generated images commercially?",
    answer: "Yes, images generated with NanoBananaTwo can be used for commercial purposes. Check our terms of service for specific details about usage rights and restrictions.",
  },
  {
    question: "What's the difference between text-to-image and image-to-image?",
    answer: "Text-to-image generates a completely new image from your text description. Image-to-image (also called image editing) takes an existing image and modifies it based on your instructions—perfect for refining, changing styles, or adding/removing elements.",
  },
];

export default function HowToUseClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Use NanoBananaTwo AI Image Generator",
    description: "Complete step-by-step guide on using NanoBananaTwo to generate AI images",
    step: steps.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/showcase" className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-6 hover:gap-3 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
              View Example Gallery
            </Link>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              How to Use <span className="text-primary">NanoBananaTwo</span>
            </h1>
            <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">
              Create stunning AI images in seconds with our complete beginner-friendly guide.
              No design skills required—just describe what you want.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">&lt;1 min</div>
              <div className="text-sm text-muted mt-1">First Image</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-muted mt-1">Skills Needed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted mt-1">To Start</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground">
              Getting Started in 4 Simple Steps
            </h2>
          </div>

          <div className="space-y-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < steps.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-border hidden md:block" />
                )}
                <div className="flex gap-6 md:gap-8">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-2 text-sm text-muted">
                          <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Examples */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Prompt Examples from Basic to Advanced
            </h2>
            <p className="mt-4 text-muted">
              Learn how to structure your prompts for better results
            </p>
          </div>

          <div className="space-y-6">
            {promptExamples.map((category) => (
              <div key={category.category} className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">{category.category} Prompts</h3>
                </div>
                <div className="p-6 space-y-4">
                  {category.examples.map((example, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-primary font-bold text-sm">0{idx + 1}</span>
                      <p className="text-muted text-sm flex-1">"{example}"</p>
                      <button
                        onClick={() => navigator.clipboard.writeText(example)}
                        className="text-muted hover:text-primary transition-colors"
                        title="Copy prompt"
                      >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="9" y="9" width="13" height="13" rx="2"/>
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/guides/prompt-guide"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              View Complete Prompt Guide
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              What Can You Create with NanoBananaTwo?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-muted text-sm">{useCase.description}</p>
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
            Ready to Create Your First AI Image?
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Start generating stunning images in seconds. No credit card required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              Start Creating Free
            </Link>
            <Link
              href="/showcase"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:border-primary/30 hover:text-primary transition-colors"
            >
              Browse Examples
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides - Internal Linking */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">
              Continue Your AI Image Journey
            </h2>
            <p className="mt-2 text-muted">
              Explore more resources to improve your AI image generation skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                Master advanced prompt writing techniques with examples and best practices
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
            <Link
              href="/guides/free-alternatives"
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  Free Alternatives
                </h3>
              </div>
              <p className="text-sm text-muted">
                Compare free AI image generators and find the best tool for your needs
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
