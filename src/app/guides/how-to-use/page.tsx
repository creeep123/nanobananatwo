import type { Metadata } from "next";
import HowToUseClient from "./HowToUseClient";

export const metadata: Metadata = {
  title: "How to Use NanoBananaTwo - Complete AI Image Generator Guide 2026",
  description: "Learn how to use NanoBananaTwo AI image generator in minutes. Step-by-step tutorial for beginners covering text-to-image, image editing, prompts, and advanced features.",
  alternates: {
    canonical: "https://nanobananatwo.com/guides/how-to-use",
  },
};

export default function HowToUsePage() {
  return <HowToUseClient />;
}
