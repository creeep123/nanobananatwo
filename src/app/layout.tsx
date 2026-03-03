import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import "./globals.css";
import { ClarityScript } from "@/components/ClarityScript";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nanobananatwo.com"),
  title: {
    default: "NanoBananaTwo - Free AI Image Generator & Editor Online",
    template: "%s | NanoBananaTwo",
  },
  description:
    "NanoBananaTwo is your complete guide to Google's next-gen AI image generation model. Generate, edit, and enhance images with NanoBanana2 powered by Gemini.",
  keywords: [
    "nanobananatwo",
    "nanobanana2",
    "nano banana two",
    "nano banana 2",
    "AI image generator",
    "AI image editor",
    "Google AI image",
    "Gemini image generation",
    "free AI image tool",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nanobananatwo.com",
    siteName: "NanoBananaTwo",
    title: "NanoBananaTwo - Free AI Image Generator & Editor Online",
    description:
      "Your complete guide to Google's next-gen AI image generation model. Generate, edit, and enhance images with NanoBanana2.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoBananaTwo - Free AI Image Generator & Editor Online",
    description:
      "Your complete guide to Google's next-gen AI image generation model. Generate, edit, and enhance images with NanoBanana2.",
  },
  alternates: {
    canonical: "https://nanobananatwo.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 从环境变量读取 Analytics IDs
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics gaId={gaId} clarityId={clarityId} />
        <ClarityScript clarityId={clarityId} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
