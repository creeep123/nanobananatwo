import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'
export const revalidate = 0

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
    const supabase = await createClient();
    const body = await req.json();
    const { prompt, negativePrompt, aspectRatio = "1:1", imageSize = "1K", style = "", userId } = body;

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Verify user authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    if (authError || !user) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    // Verify userId matches authenticated user
    if (userId !== user.id) {
      return NextResponse.json(
        { error: "Invalid user" },
        { status: 403 }
      );
    }

    // Get user credits
    const { data: credits, error: creditsError } = await supabase
      .from("nb2_user_credits")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (creditsError || !credits) {
      return NextResponse.json(
        { error: "Unable to verify credits" },
        { status: 500 }
      );
    }

    // Check if user has free credits remaining
    const freeRemaining = Math.max(0, credits.free_limit - credits.free_used);
    const hasFreeCredits = freeRemaining > 0;
    const hasPurchasedCredits = credits.total_credits > 0;

    if (!hasFreeCredits && !hasPurchasedCredits) {
      return NextResponse.json(
        { error: "No credits remaining. Please purchase credits to continue." },
        { status: 402 }
      );
    }

    // Determine which credit type to use (free first, then purchased)
    const useFreeCredit = hasFreeCredits;

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
    // Deduct credits and save generation record
    try {
      // Determine new credit values
      const newFreeUsed = useFreeCredit ? credits.free_used + 1 : credits.free_used;
      const newTotalCredits = useFreeCredit ? credits.total_credits : credits.total_credits - 1;

      // Update user credits
      await supabase
        .from("nb2_user_credits")
        .update({
          total_credits: newTotalCredits,
          free_used: newFreeUsed,
          updated_at: new Date().toISOString(),
        })
        .eq("user_id", user.id);

      // Record the credit transaction
      await supabase
        .from("nb2_credit_transactions")
        .insert({
          user_id: user.id,
          amount: -1,
          type: useFreeCredit ? "free_trial" : "generation",
          balance_after: newTotalCredits,
          description: useFreeCredit ? "Free trial generation" : "Image generation",
          metadata: {
            model: "NanoBanana2",
            prompt: prompt.substring(0, 100),
          },
        });

      // Save generation record (without image URL for now - client has base64)
      await supabase
        .from("nb2_generations")
        .insert({
          user_id: user.id,
          prompt,
          negative_prompt: negativePrompt,
          aspect_ratio: aspectRatio,
          image_size: imageSize,
          style,
          model_used: "gemini-3.1-flash-image-preview",
          credits_cost: 1,
        });
    } catch (dbError) {
      console.error("Error updating credits:", dbError);
      // Don't fail the request if credit update fails
    }

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
