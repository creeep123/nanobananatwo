import type { Metadata } from "next";
import FreeAlternativesClient from "./FreeAlternativesClient";

export const metadata: Metadata = {
  title: "Free AI Image Generator Alternatives - Complete Comparison & Review 2026",
  description: "Discover the best free alternatives to NanoBananaTwo. Compare features, limits, and quality of Bing Image Creator, Leonardo.ai, Stable Diffusion, Canva, Adobe Firefly, and Ideogram.",
  alternates: {
    canonical: "https://nanobananatwo.com/guides/free-alternatives",
  },
};

export default function FreeAlternativesPage() {
  return <FreeAlternativesClient />;
}
