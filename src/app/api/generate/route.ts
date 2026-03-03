import { NextRequest, NextResponse } from "next/server";

const APIYI_API_KEY = process.env.APIYI_API_KEY || "sk-UlpYk69776Sk7WDEAa689dF6Da3748E486923265831d7dAf";
const APIYI_ENDPOINT = "https://api.apiyi.com/v1beta/models/gemini-3.1-flash-image-preview:generateContent";

// Aspect ratio mapping
const ASPECT_RATIO_MAP: Record<string, string> = {
  "1:1": "1:1",
  "16:9": "16:9",
  "9:16": "9:16",
  "4:3": "4:3",
  "3:4": "3:4",
  "21:9": "21:9",
  "1:4": "1:4",
  "4:1": "4:1",
  "2:3": "2:3",
  "3:2": "3:2",
  "4:5": "4:5",
  "5:4": "5:4",
  "1:8": "1:8",
  "8:1": "8:1",
};

// Image size mapping
const IMAGE_SIZE_MAP: Record<string, string> = {
  "512": "512px",
  "1k": "1K",
  "2k": "2K",
  "4k": "4K",
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, negativePrompt, aspectRatio = "1:1", imageSize = "1K", style = "" } = body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Build the full prompt with style if provided
    let fullPrompt = prompt;
    if (style && style.toLowerCase() !== "no style") {
      fullPrompt = `${prompt}, ${style} style`;
    }

    // Add negative prompt if provided
    let contents: any;
    if (negativePrompt && negativePrompt.trim()) {
      contents = {
        parts: [
          { text: `Generate an image with these requirements: ${fullPrompt}. Avoid: ${negativePrompt}` }
        ]
      };
    } else {
      contents = {
        parts: [
          { text: fullPrompt }
        ]
      };
    }

    // Map aspect ratio
    const mappedAspectRatio = ASPECT_RATIO_MAP[aspectRatio] || "1:1";

    // Map image size
    const mappedImageSize = IMAGE_SIZE_MAP[imageSize.toLowerCase()] || "1K";

    // Prepare request payload
    const payload = {
      contents: [contents],
      generationConfig: {
        responseModalities: ["IMAGE"],
        imageConfig: {
          aspectRatio: mappedAspectRatio,
          imageSize: mappedImageSize,
        },
      },
    };

    // Call APIYI API
    const response = await fetch(APIYI_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${APIYI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      // 5 minute timeout for image generation
      signal: AbortSignal.timeout(300000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("APIYI API error:", response.status, errorText);
      return NextResponse.json(
        { error: `API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Extract base64 image data
    const imageData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!imageData) {
      console.error("Invalid API response:", data);
      return NextResponse.json(
        { error: "Failed to extract image data from API response" },
        { status: 500 }
      );
    }

    // Return the base64 image data
    return NextResponse.json({
      success: true,
      imageData: imageData,
      mimeType: data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.mimeType || "image/png",
      usage: data.usageMetadata,
    });

  } catch (error) {
    console.error("Generate API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
