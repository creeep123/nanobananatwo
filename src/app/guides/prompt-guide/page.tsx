import type { Metadata } from "next";
import PromptGuideClient from "./PromptGuideClient";

export const metadata: Metadata = {
  title: "AI Image Prompt Guide - Master Prompt Writing & Engineering Techniques 2026",
  description: "Complete guide to writing effective AI image prompts. Learn prompt structure, keywords, styles, and advanced techniques to create stunning images with NanoBananaTwo and other AI generators.",
  alternates: {
    canonical: "https://nanobananatwo.com/guides/prompt-guide",
  },
};

export default function PromptGuidePage() {
  return <PromptGuideClient />;
}
