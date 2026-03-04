import type { Metadata } from "next";
import ShowcaseClient from "./ShowcaseClient";

export const metadata: Metadata = {
  title: "AI Image Gallery & Prompt Examples - NanoBananaTwo Showcase",
  description: "Explore 50+ AI-generated image examples with copyable prompts. Browse our showcase gallery for e-commerce product photos, portraits, anime art, and marketing visuals created with NanoBananaTwo.",
  alternates: {
    canonical: "https://nanobananatwo.com/showcase",
  },
  openGraph: {
    title: "AI Image Gallery - NanoBananaTwo Showcase",
    description: "Explore stunning AI-generated images created with NanoBananaTwo. Get inspired by real examples with prompts.",
    url: "https://nanobananatwo.com/showcase",
    siteName: "NanoBananaTwo",
    type: "website",
    images: [
      {
        url: "/og-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "NanoBananaTwo AI Image Gallery",
      },
    ],
  },
};

export default function ShowcasePage() {
  return <ShowcaseClient />;
}
