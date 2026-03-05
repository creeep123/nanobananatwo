import type { Metadata } from "next";
import Link from "next/link";
import { LogoIcon, LogoLarge, LogoSVG } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Brand Assets & Logo Download - NanoBananaTwo",
  description: "Download NanoBananaTwo logo, icons, and brand assets for use in your projects.",
};

const downloads = [
  {
    id: "logo-icon",
    name: "Logo Icon",
    description: "Main logo icon for dark backgrounds",
    filename: "logo-icon.svg",
    preview: <LogoIcon className="w-16 h-16" />,
    downloadUrl: "/brand/logo-icon.svg",
  },
  {
    id: "logo-horizontal",
    name: "Horizontal Logo",
    description: "Horizontal logo with text",
    filename: "logo-horizontal.svg",
    preview: <LogoSVG className="w-32 h-auto" />,
    downloadUrl: "/brand/logo-horizontal.svg",
  },
  {
    id: "logo-large",
    name: "Large Logo",
    description: "Full logo for headers and hero sections",
    filename: "logo-large.svg",
    preview: <LogoLarge className="w-40 h-auto" />,
    downloadUrl: "/brand/logo-large.svg",
  },
  {
    id: "favicon",
    name: "Favicon",
    description: "Browser favicon (SVG)",
    filename: "favicon.svg",
    downloadUrl: "/icons/favicon.svg",
  },
  {
    id: "apple-touch-icon",
    name: "Apple Touch Icon",
    description: "iOS home screen icon",
    filename: "apple-touch-icon.svg",
    downloadUrl: "/icons/apple-touch-icon.svg",
  },
];

export default function BrandAssetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <LogoLarge className="w-24 h-auto" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Brand Assets & Logo
          </h1>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Download official NanoBananaTwo logos and brand assets for use in your projects, presentations, and marketing materials.
          </p>
        </div>

        {/* Download Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground">{item.name}</h3>
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-3 rounded-lg">
                  {item.preview}
                </div>
              </div>
              <p className="text-sm text-muted mb-4">{item.description}</p>
              <a
                href={item.downloadUrl}
                download={item.filename}
                className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download {item.filename}
              </a>
            </div>
          ))}
        </div>

        {/* Brand Guidelines */}
        <div className="bg-white border border-border rounded-2xl p-8 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Brand Guidelines</h2>
          <div className="space-y-4 text-sm text-muted">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Colors</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]"></div>
                  <span>Primary: #8B5CF6</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#6366F1]"></div>
                  <span>Secondary: #6366F1</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-white border"></div>
                  <span>White: #FFFFFF</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Usage Rules</h3>
              <ul className="space-y-1 list-disc list-inside">
                <li>Use the logo on light or dark backgrounds</li>
                <li>Maintain clear space around the logo (minimum height equal to logo height)</li>
                <li>Do not stretch, distort, or modify the logo proportions</li>
                <li>You can scale the logo to any size needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
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
              <path d="m12 19-7-7 7" />
              <path d="M19 12H5" />
            </svg>
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
