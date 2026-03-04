"use client";

import Link from "next/link";

const promptStructure = [
  {
    element: "Subject",
    description: "The main focus of your image—what you want to see",
    examples: ["a cat", "a futuristic city", "a woman in a red dress"],
    tip: "Always start with the subject. Be specific about what it is.",
  },
  {
    element: "Style",
    description: "The artistic style or visual aesthetic",
    examples: ["photorealistic", "anime style", "oil painting", "3D render"],
    tip: "Define the style early for consistent results.",
  },
  {
    element: "Details",
    description: "Specific characteristics, colors, and features",
    examples: ["golden hour lighting", "cinematic composition", "vibrant colors"],
    tip: "Add 2-3 key details that enhance the main subject.",
  },
  {
    element: "Technical",
    description: "Resolution, format, and quality specifications",
    examples: ["8K resolution", "4K", "high detail", "sharp focus"],
    tip: "Include resolution for higher quality output.",
  },
];

const styleCategories = [
  {
    name: "Photography Styles",
    keywords: [
      "photorealistic",
      "cinematic",
      "portrait photography",
      "product photography",
      "documentary style",
      "fashion photography",
      "golden hour",
      "bokeh",
      "shallow depth of field",
    ],
  },
  {
    name: "Art & Illustration",
    keywords: [
      "digital art",
      "oil painting",
      "watercolor",
      "pencil sketch",
      "anime style",
      "manga",
      "concept art",
      "fantasy art",
      "pop art",
      "minimalist illustration",
    ],
  },
  {
    name: "3D & CGI",
    keywords: [
      "3D render",
      "blender 3D",
      "octane render",
      "unreal engine",
      "isometric 3D",
      "low poly",
      "CGI",
      "ray tracing",
      "volumetric lighting",
    ],
  },
  {
    name: "Design & Graphics",
    keywords: [
      "flat design",
      "vector art",
      "minimalist",
      "corporate Memphis",
      "gradient design",
      "geometric",
      "typographic",
      "logo design",
      "UI design",
    ],
  },
];

const promptExamples = [
  {
    category: "Portrait Photography",
    prompts: [
      {
        title: "Professional Headshot",
        prompt: "Professional headshot of a confident business executive, natural lighting, shallow depth of field, modern office background, photorealistic, 8K",
        why: "Clear subject, professional context, technical specs",
      },
      {
        title: "Artistic Portrait",
        prompt: "Elegant woman in flowing red dress, standing on a cliff overlooking the ocean at sunset, dramatic lighting, photorealistic, cinematic composition, 8K resolution",
        why: "Vivid details, emotional atmosphere, technical quality",
      },
    ],
  },
  {
    category: "Product Photography",
    prompts: [
      {
        title: "Luxury Product",
        prompt: "Luxury perfume bottle with gold accents, placed on marble surface with rose petals scattered around, studio lighting, bokeh background, commercial product photography, 4K",
        why: "Specific product, setting details, commercial style",
      },
      {
        title: "Tech Product",
        prompt: "Sleek smartphone floating against vibrant gradient background, studio lighting, product photography, clean composition, modern tech aesthetic",
        why: "Minimal composition, modern aesthetic, clear subject",
      },
    ],
  },
  {
    category: "Fantasy & Art",
    prompts: [
      {
        title: "Fantasy Character",
        prompt: "Elven warrior with ornate silver armor and glowing sword, standing in ancient enchanted forest, cinematic lighting, fantasy art style, hyper-detailed, 8K",
        why: "Character details, environment context, style specified",
      },
      {
        title: "Whimsical Scene",
        prompt: "Cozy cottagecore cottage with wildflowers and butterflies, soft watercolor style, dreamy atmosphere, pastel colors, hand-drawn illustration aesthetic",
        why: "Mood and atmosphere defined, artistic style clear",
      },
    ],
  },
  {
    category: "Anime & Manga",
    prompts: [
      {
        title: "Anime Portrait",
        prompt: "Beautiful anime girl with long flowing pink hair, cherry blossom petals falling, vibrant colors, Studio Ghibli inspired, manga art style, detailed eyes",
        why: "Anime characteristics, reference to known style",
      },
      {
        title: "Chibi Character",
        prompt: "Cute chibi fantasy knight, small proportions with big head, kawaii style, soft pastel colors, simple clean background, adorable expression",
        why: "Specific anime sub-style, proportions defined",
      },
    ],
  },
];

const commonMistakes = [
  {
    mistake: "Vague Prompts",
    bad: "a picture of a dog",
    good: "a golden retriever puppy sitting in a sunny park, grass field background, photorealistic, natural lighting",
    explanation: "Specific details help the AI understand exactly what you want.",
  },
  {
    mistake: "Too Many Keywords",
    bad: "a cat dog bird fish tree mountain sun moon stars sky cloud rain snow beautiful amazing stunning incredible 8K 4K HD realistic unreal engine octane render watercolor oil painting digital art anime manga cartoon",
    good: "A majestic lion walking through the savanna at golden hour, photorealistic wildlife photography, cinematic lighting, 8K resolution",
    explanation: "Focus on key elements rather than keyword stuffing. 15-30 well-chosen words work better than 100+ random keywords.",
  },
  {
    mistake: "Contradictory Instructions",
    bad: "a realistic photograph drawn as a cartoon anime style oil painting",
    good: "a portrait in anime style with vibrant colors and clean lines",
    explanation: "Choose one clear style. Mixing contradictory styles confuses the AI.",
  },
];

const advancedTechniques = [
  {
    technique: "Aspect Ratio Control",
    description: "Specify dimensions for your intended use",
    examples: [
      "1:1 for Instagram posts",
      "16:9 for YouTube thumbnails",
      "9:16 for TikTok/Reels",
      "4:3 for standard displays",
    ],
  },
  {
    technique: "Lighting Keywords",
    description: "Control mood and atmosphere with lighting terms",
    examples: [
      "golden hour",
      "blue hour",
      "cinematic lighting",
      "studio lighting",
      "natural light",
      "dramatic shadows",
      "volumetric lighting",
      "neon lights",
    ],
  },
  {
    technique: "Camera Angles",
    description: "Define perspective for dynamic compositions",
    examples: [
      "bird's eye view",
      "low angle shot",
      "eye level",
      "Dutch angle",
      "macro close-up",
      "wide angle shot",
    ],
  },
  {
    technique: "Artist References",
    description: "Reference known artists or styles for specific aesthetics",
    examples: [
      "in the style of Studio Ghibli",
      "Art Deco style",
      "cyberpunk aesthetic",
      "vintage 1950s illustration",
      "modern minimalist",
    ],
  },
];

const faqs = [
  {
    question: "How long should my AI image prompts be?",
    answer: "Effective prompts typically range from 15-50 words. Start with the essentials: subject + style + key details. Add technical specifications like resolution if needed. More words don't always mean better results—focus on clarity and relevance over length.",
  },
  {
    question: "What's the best prompt structure for beginners?",
    answer: "Use this simple formula: [Subject] + [Action/Position] + [Style] + [Setting] + [Lighting] + [Quality]. Example: 'A cat sitting on a windowsill, photorealistic style, cozy room interior, morning sunlight, 8K resolution'. This covers all the essential elements.",
  },
  {
    question: "How can I get consistent results across multiple generations?",
    answer: "Keep your core prompt structure consistent and only change one element at a time. Use the same style keywords, lighting terms, and technical specs. If you find a prompt that works well, save it as a template and modify just the subject for variations.",
  },
  {
    question: "Why do my prompts sometimes give unexpected results?",
    answer: "AI interprets prompts holistically, so word order and emphasis matter. If results are unexpected, try: 1) Moving the most important elements to the beginning, 2) Removing potentially conflicting keywords, 3) Being more specific about what you DON'T want, 4) Simplifying the prompt to focus on core elements.",
  },
  {
    question: "Can I use negative prompts with NanoBananaTwo?",
    answer: "While NanoBananaTwo excels at understanding positive descriptions (what you DO want), you can also specify what to avoid within your main prompt. For example: 'a clean minimalist logo design without text or clutter'. Frame negatives positively when possible.",
  },
];

export default function PromptGuideClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "AI Image Prompt Guide - Master Prompt Engineering for NanoBananaTwo",
    description: "Complete guide to writing effective AI image prompts with examples and techniques",
    url: "https://nanobananatwo.com/guides/prompt-guide",
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
      <section className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
              <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z"/>
              </svg>
              Master Prompt Engineering
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              AI Image <span className="text-primary">Prompt Guide</span>
            </h1>
            <p className="mt-5 text-lg text-muted max-w-2xl mx-auto">
              Learn the art and science of writing prompts that generate stunning AI images.
              From beginner basics to advanced techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Prompt Structure */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              The Anatomy of a Perfect Prompt
            </h2>
            <p className="mt-4 text-muted">
              Every effective prompt follows a clear structure
            </p>
          </div>

          <div className="bg-white border border-border rounded-2xl overflow-hidden">
            {promptStructure.map((element, idx) => (
              <div key={idx} className={`p-6 ${idx < promptStructure.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">{element.element}</h3>
                    <p className="text-sm text-muted mb-2">{element.description}</p>
                    <p className="text-xs text-primary font-medium mb-2">Examples: {element.examples.join(", ")}</p>
                    <p className="text-xs text-muted italic">💡 {element.tip}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Keywords */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Essential Style Keywords
            </h2>
            <p className="mt-4 text-muted">
              Use these keywords to define your visual aesthetic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {styleCategories.map((category) => (
              <div key={category.name} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.keywords.map((keyword) => (
                    <button
                      key={keyword}
                      onClick={() => navigator.clipboard.writeText(keyword)}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                      title={`Copy "${keyword}"`}
                    >
                      {keyword}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Examples */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Real-World Prompt Examples
            </h2>
            <p className="mt-4 text-muted">
              Study these examples to understand effective prompting
            </p>
          </div>

          <div className="space-y-8">
            {promptExamples.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-bold text-foreground mb-4">{category.category}</h3>
                <div className="space-y-4">
                  {category.prompts.map((example, idx) => (
                    <div key={idx} className="bg-white border border-border rounded-xl overflow-hidden">
                      <div className="bg-primary/5 px-4 py-3 border-b border-border">
                        <h4 className="font-semibold text-foreground">{example.title}</h4>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-muted mb-3 leading-relaxed">
                          "{example.prompt}"
                        </p>
                        <div className="flex items-center justify-between">
                          <p className="text-xs text-primary">
                            ✓ {example.why}
                          </p>
                          <button
                            onClick={() => navigator.clipboard.writeText(example.prompt)}
                            className="text-xs text-muted hover:text-primary transition-colors flex items-center gap-1"
                          >
                            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="9" y="9" width="13" height="13" rx="2"/>
                              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                            </svg>
                            Copy
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Common Prompt Mistakes to Avoid
            </h2>
          </div>

          <div className="space-y-4">
            {commonMistakes.map((mistake, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-semibold text-red-600 mb-4">{mistake.mistake}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-medium text-red-500 mb-1">❌ Bad Example:</p>
                    <p className="text-sm text-muted italic">"{mistake.bad}"</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-green-600 mb-1">✅ Good Example:</p>
                    <p className="text-sm text-muted italic">"{mistake.good}"</p>
                  </div>
                </div>
                <p className="text-sm text-muted">💡 {mistake.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Techniques */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Advanced Prompting Techniques
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advancedTechniques.map((technique, idx) => (
              <div key={idx} className="bg-white border border-border rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{technique.technique}</h3>
                <p className="text-sm text-muted mb-4">{technique.description}</p>
                <div className="space-y-2">
                  {technique.examples.map((example, exIdx) => (
                    <button
                      key={exIdx}
                      onClick={() => navigator.clipboard.writeText(example)}
                      className="block w-full text-left text-xs px-3 py-2 rounded-lg bg-surface hover:bg-primary/5 hover:text-primary transition-colors"
                    >
                      "{example}"
                    </button>
                  ))}
                </div>
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
              Prompt Writing FAQ
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
            Put Your Prompt Skills to the Test
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Practice these techniques with NanoBananaTwo. Start creating stunning images in seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              Start Creating
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
              More AI Image Generation Resources
            </h2>
            <p className="mt-2 text-muted">
              Continue your journey with these comprehensive guides
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
                Beginner-friendly step-by-step tutorial for getting started with AI image generation
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
