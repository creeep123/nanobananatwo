"use client";

import { useState } from "react";

interface GenerationOptions {
  prompt: string;
  negativePrompt?: string;
  aspectRatio: "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
  style: string;
  model: string;
}

const EXAMPLE_PROMPTS = [
  {
    text: "A futuristic city at sunset with flying cars",
    style: "Cyberpunk",
    image: "🌆",
  },
  {
    text: "A magical forest with glowing mushrooms",
    style: "Fantasy Art",
    image: "🍄",
  },
  {
    text: "Professional headshot of a business person",
    style: "Photorealistic",
    image: "👔",
  },
  {
    text: "Abstract geometric patterns in vibrant colors",
    style: "Abstract",
    image: "🎨",
  },
  {
    text: "A cozy coffee shop interior with warm lighting",
    style: "Interior Design",
    image: "☕",
  },
  {
    text: "Space exploration scene with planets and stars",
    style: "Sci-Fi",
    image: "🚀",
  },
];

const STYLES = [
  "No Style",
  "Photorealistic",
  "Digital Art",
  "Oil Painting",
  "Watercolor",
  "Anime",
  "3D Render",
  "Pixel Art",
  "Fantasy Art",
  "Cyberpunk",
  "Abstract",
  "Minimalist",
];

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState<GenerationOptions["aspectRatio"]>("1:1");
  const [style, setStyle] = useState("No Style");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError("Please enter a description");
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // For demo purposes, we'll simulate the generation
      // In production, this would call an actual AI API
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Simulated response - in production, this would be the actual generated image
      const demoImage = `https://picsum.photos/seed/${Date.now()}/512/512`;
      setGeneratedImage(demoImage);
    } catch (err) {
      setError("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleExampleClick = (example: typeof EXAMPLE_PROMPTS[0]) => {
    setPrompt(example.text);
    setStyle(example.style);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClear = () => {
    setPrompt("");
    setNegativePrompt("");
    setStyle("No Style");
    setAspectRatio("1:1");
    setGeneratedImage(null);
    setError(null);
  };

  const handleRandom = () => {
    const randomPrompt = EXAMPLE_PROMPTS[Math.floor(Math.random() * EXAMPLE_PROMPTS.length)];
    setPrompt(randomPrompt.text);
    setStyle(randomPrompt.style);
  };

  return (
    <div className="w-full">
      {/* Main Generator Interface */}
      <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
        {/* Prompt Input */}
        <div className="space-y-4">
          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-foreground mb-2">
              Describe what you want to create
            </label>
            <div className="relative">
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A serene mountain landscape at dawn, with mist rolling through pine forests..."
                className="w-full px-4 py-3 border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors min-h-[100px] text-foreground"
                rows={3}
              />
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button
                  onClick={handleClear}
                  className="text-xs text-muted hover:text-foreground transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={handleRandom}
                  className="text-xs text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  Random
                </button>
              </div>
            </div>
          </div>

          {/* Style and Aspect Ratio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="style" className="block text-sm font-medium text-foreground mb-2">
                Style
              </label>
              <select
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground bg-white"
              >
                {STYLES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="aspect" className="block text-sm font-medium text-foreground mb-2">
                Aspect Ratio
              </label>
              <select
                id="aspect"
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value as GenerationOptions["aspectRatio"])}
                className="w-full px-4 py-2.5 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground bg-white"
              >
                <option value="1:1">Square (1:1)</option>
                <option value="16:9">Landscape (16:9)</option>
                <option value="9:16">Portrait (9:16)</option>
                <option value="4:3">Classic (4:3)</option>
                <option value="3:4">Portrait Classic (3:4)</option>
              </select>
            </div>
          </div>

          {/* Advanced Options */}
          <div>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <svg
                className={`w-4 h-4 transition-transform ${showAdvanced ? "rotate-90" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
              Advanced Settings
            </button>

            {showAdvanced && (
              <div className="mt-3">
                <label htmlFor="negative" className="block text-sm font-medium text-foreground mb-2">
                  Negative Prompt (what to avoid)
                </label>
                <textarea
                  id="negative"
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  placeholder="blurry, low quality, distorted..."
                  className="w-full px-4 py-2.5 border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-foreground"
                  rows={2}
                />
              </div>
            )}
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-primary text-white py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
          >
            {isGenerating ? (
              <>
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Generating...
              </>
            ) : (
              <>
                Generate Image
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </>
            )}
          </button>
        </div>

        {/* Generated Image Display */}
        {generatedImage && (
          <div className="mt-6 pt-6 border-t border-border">
            <div className="bg-surface rounded-xl p-4">
              <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src={generatedImage}
                  alt="Generated image"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm">
                  Download
                </button>
                <button className="flex-1 bg-white border border-border text-foreground py-2.5 rounded-lg font-medium hover:border-primary/30 hover:text-primary transition-colors text-sm">
                  Try in Editor
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Example Prompts Gallery */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          Try these examples
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EXAMPLE_PROMPTS.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="bg-white border border-border rounded-xl p-4 hover:border-primary/30 hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{example.image}</span>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {example.text}
                  </p>
                  <p className="text-xs text-muted mt-1">{example.style}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-8 bg-primary/5 border border-primary/10 rounded-xl p-4">
        <div className="flex gap-3">
          <svg
            className="w-5 h-5 text-primary shrink-0 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <div className="text-sm text-muted">
            <p className="font-medium text-foreground mb-1">Demo Mode</p>
            <p>
              This is a demonstration interface. For production use with real NanoBanana2 API,{" "}
              <a
                href="https://aistudio.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                visit Google AI Studio
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}