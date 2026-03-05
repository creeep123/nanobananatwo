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
  icons: {
    icon: [
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/icons/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nanobananatwo.com",
    siteName: "NanoBananaTwo",
    title: "NanoBananaTwo - Free AI Image Generator & Editor Online",
    description:
      "Your complete guide to Google's next-gen AI image generation model. Generate, edit, and enhance images with NanoBanana2.",
    images: [
      {
        url: '/screenshots/homepage-hero.png',
        width: 1920,
        height: 1080,
        alt: 'NanoBananaTwo AI Image Generator Homepage',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NanoBananaTwo - Free AI Image Generator & Editor Online",
    description:
      "Your complete guide to Google's next-gen AI image generation model. Generate, edit, and enhance images with NanoBanana2.",
    images: ['/screenshots/homepage-hero.png'],
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
