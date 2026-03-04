"use client";

import Link from "next/link";

// Showcase categories with examples
const categories = [
  {
    id: "ecommerce",
    name: "E-Commerce & Product Photography",
    description: "Professional product photos and marketing visuals for online stores",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 01-8 0"/>
      </svg>
    ),
    examples: [
      {
        title: "Luxury Perfume Bottle",
        prompt: "A luxury perfume bottle with gold accents, placed on a marble surface with soft rose petals scattered around, golden hour lighting, bokeh background, photorealistic, 4K",
        category: "Product Photography",
        gradient: "from-amber-100 to-orange-100",
      },
      {
        title: "Sneaker Product Shot",
        prompt: "White athletic sneaker floating in mid-air against a vibrant gradient background, studio lighting, product photography, clean composition, 4K",
        category: "Product Photography",
        gradient: "from-blue-100 to-cyan-100",
      },
      {
        title: "Skincare Set",
        prompt: "Elegant skincare bottles on a wooden tray with eucalyptus leaves, natural morning light, minimal composition, clean aesthetic, commercial product photography",
        category: "Beauty & Cosmetics",
        gradient: "from-green-100 to-emerald-100",
      },
      {
        title: "Tech Device",
        prompt: "Sleek smartphone on a reflective surface with floating abstract 3D shapes, dramatic lighting, tech product photography, premium feel, 8K",
        category: "Technology",
        gradient: "from-purple-100 to-violet-100",
      },
    ],
  },
  {
    id: "portraits",
    name: "Portraits & Character Design",
    description: "Realistic and stylized human portraits, character concepts, and avatars",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    examples: [
      {
        title: "Professional Portrait",
        prompt: "Professional headshot of a confident business executive, natural lighting, shallow depth of field, modern office background, photorealistic, 8K",
        category: "Professional",
        gradient: "from-slate-100 to-gray-100",
      },
      {
        title: "Fantasy Character",
        prompt: "Elegant elven warrior with silver hair and ornate armor, standing in an ancient forest, cinematic lighting, fantasy art style, detailed, 8K",
        category: "Fantasy",
        gradient: "from-emerald-100 to-teal-100",
      },
      {
        title: "Cyberpunk Character",
        prompt: "Cyberpunk hacker character with neon implants, rain-soaked city street background, blade runner style, cinematic lighting, hyper-detailed, 4K",
        category: "Sci-Fi",
        gradient: "from-pink-100 to-purple-100",
      },
      {
        title: "Gaming Avatar",
        prompt: "Stylized gaming profile picture, confident smile with headphones, vibrant color palette, clean background, modern illustration style",
        category: "Gaming",
        gradient: "from-indigo-100 to-blue-100",
      },
    ],
  },
  {
    id: "anime",
    name: "Anime & Manga Art",
    description: "Japanese animation styles, chibi characters, and manga-inspired artwork",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
        <line x1="9" y1="9" x2="9.01" y2="9"/>
        <line x1="15" y1="9" x2="15.01" y2="9"/>
      </svg>
    ),
    examples: [
      {
        title: "Anime Portrait",
        prompt: "Beautiful anime girl with long flowing hair, cherry blossom petals falling, vibrant colors, manga style, detailed eyes, Studio Ghibli inspired",
        category: "Portrait",
        gradient: "from-pink-100 to-rose-100",
      },
      {
        title: "Chibi Character",
        prompt: "Cute chibi version of a fantasy knight, small proportions, big eyes, kawaii style, soft pastel colors, simple background",
        category: "Chibi",
        gradient: "from-purple-100 to-fuchsia-100",
      },
      {
        title: "Manga Action Scene",
        prompt: "Dynamic manga action scene, warrior mid-jump with sword, speed lines, dramatic perspective, black and white manga style with accent colors",
        category: "Action",
        gradient: "from-slate-200 to-gray-200",
      },
      {
        title: "Ghibli Landscape",
        prompt: "Whimsical Japanese countryside scene, traditional house with cherry blossoms, peaceful atmosphere, Studio Ghibli art style, watercolor texture",
        category: "Landscape",
        gradient: "from-green-100 to-lime-100",
      },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Advertising",
    description: "Social media visuals, ad creatives, and promotional graphics",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    examples: [
      {
        title: "Summer Sale Banner",
        prompt: "Vibrant summer sale banner, beach theme with palm leaves and waves, bold typography placeholder, warm sunny colors, marketing graphic, high contrast",
        category: "Seasonal Sale",
        gradient: "from-yellow-100 to-amber-100",
      },
      {
        title: "Black Friday Deal",
        prompt: "Black Friday promotional image, shopping bags and gift boxes, luxury aesthetic, gold and black color scheme, premium feel, marketing visual",
        category: "Sale Event",
        gradient: "from-gray-200 to-slate-300",
      },
      {
        title: "Social Media Post",
        prompt: "Instagram carousel background, motivational quote placeholder, modern gradient design, clean aesthetic, influencer style, social media ready",
        category: "Social Media",
        gradient: "from-violet-100 to-purple-100",
      },
      {
        title: "App Launch Visual",
        prompt: "Mobile app launch promotional image, floating 3D phone mockup, abstract colorful shapes, tech startup aesthetic, modern and dynamic",
        category: "App Launch",
        gradient: "from-blue-100 to-indigo-100",
      },
    ],
  },
];

export default function ShowcaseClient() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NanoBananaTwo AI Image Gallery",
    description: "Explore stunning AI-generated images created with NanoBananaTwo. Browse examples across categories like e-commerce, portraits, anime, and marketing.",
    url: "https://nanobananatwo.com/showcase",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.flatMap((cat, catIdx) =>
        cat.examples.map((ex, exIdx) => ({
          "@type": "ImageObject",
          position: catIdx * 100 + exIdx + 1,
          name: ex.title,
          description: ex.prompt,
          contentLocation: cat.name,
        }))
      ),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              AI Image <span className="text-primary">Showcase Gallery</span>
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-muted max-w-2xl mx-auto">
              Get inspired by stunning AI-generated images created with NanoBananaTwo.
              Each example includes the prompt used—copy and customize for your own creations.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-primary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted mt-1">Example Prompts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted mt-1">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted mt-1">Copy Prompts</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted mt-1">To Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white sticky top-0 z-10 border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium bg-surface text-foreground hover:bg-primary hover:text-white transition-colors"
              >
                {cat.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Categories & Examples */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((category) => (
            <div key={category.id} id={category.id} className="mb-20 scroll-mt-20">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <p className="text-muted mt-1">{category.description}</p>
                </div>
              </div>

              {/* Examples Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.examples.map((example, idx) => (
                  <article
                    key={idx}
                    className="group bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  >
                    {/* Image Preview Placeholder */}
                    <div className={`aspect-video bg-gradient-to-br ${example.gradient} flex items-center justify-center relative overflow-hidden`}>
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-white/80 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                          <svg
                            className="w-8 h-8 text-primary"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="m21 15-3.086-3.086a2 2 0 00-2.828 0L6 21"/>
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-foreground/80">
                          {example.title}
                        </p>
                        <p className="text-xs text-muted mt-1">
                          {example.category}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Link
                          href={`/?prompt=${encodeURIComponent(example.prompt)}`}
                          className="inline-flex items-center gap-2 bg-white text-foreground px-5 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                        >
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
                            <path d="M21 12a9 9 0 11-6.219-8.56"/>
                          </svg>
                          Try This Prompt
                        </Link>
                      </div>
                    </div>

                    {/* Prompt Section */}
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-foreground">
                          {example.title}
                        </h3>
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-surface text-muted">
                          {example.category}
                        </span>
                      </div>
                      <div className="bg-surface rounded-xl p-4 relative group/prompt">
                        <p className="text-sm text-muted leading-relaxed pr-10">
                          {example.prompt}
                        </p>
                        <button
                          onClick={() => navigator.clipboard.writeText(example.prompt)}
                          className="absolute top-3 right-3 p-2 rounded-lg bg-white border border-border hover:bg-primary hover:text-white hover:border-primary transition-all opacity-0 group-hover/prompt:opacity-100"
                          title="Copy prompt"
                        >
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
                            <rect x="9" y="9" width="13" height="13" rx="2"/>
                            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Create Your Own AI Masterpieces
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Inspired by these examples? Start creating your own stunning AI images with NanoBananaTwo.
            Copy any prompt above or create something entirely new.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20h9"/>
                <path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z"/>
              </svg>
              Start Creating
            </Link>
            <Link
              href="/guides/prompt-guide"
              className="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-3.5 rounded-xl text-base font-semibold border border-border hover:border-primary/30 hover:text-primary transition-colors"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
              Prompt Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Related Guides - Internal Linking */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">
              Learn More About AI Image Generation
            </h2>
            <p className="mt-2 text-muted">
              Master the art of creating stunning AI images with our comprehensive guides
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/guides/how-to-use"
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all text-center"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                How to Use Guide
              </h3>
              <p className="text-sm text-muted">
                Step-by-step tutorial for beginners to get started with AI image generation
              </p>
            </Link>
            <Link
              href="/guides/prompt-guide"
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all text-center"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 013.002 3.002L7.368 18.635a2 2 0 01-.855.506l-2.872.838a.5.5 0 01-.62-.62l.838-2.872a2 2 0 01.506-.854z"/>
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Prompt Engineering
              </h3>
              <p className="text-sm text-muted">
                Master prompt writing techniques with examples, tips, and best practices
              </p>
            </Link>
            <Link
              href="/guides/free-alternatives"
              className="group bg-white border border-border rounded-xl p-6 hover:shadow-lg hover:border-primary/20 transition-all text-center"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                </svg>
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                Free Alternatives
              </h3>
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
