import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Screenshot - NanoBananaTwo",
  description: "Download NanoBananaTwo homepage screenshot",
};

export default function DownloadScreenshotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
          <svg className="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          NanoBananaTwo 首屏截图
        </h1>
        <p className="text-gray-600 mb-8">
          点击下方按钮下载图片
        </p>

        <div className="space-y-4">
          <a
            href="/screenshots/homepage-hero.png"
            download="nanobananatwo-homepage-hero.png"
            className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
          >
            <svg className="w-5 h-5 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            下载 PC 版截图 (PNG)
            <span className="text-sm opacity-80 block font-normal">1920x1080 高清</span>
          </a>

          <a
            href="/screenshots/homepage-mobile.jpg"
            download="nanobananatwo-homepage-mobile.jpg"
            className="block w-full bg-white border-2 border-purple-200 text-purple-700 py-4 px-6 rounded-xl font-semibold hover:bg-purple-50 transition-all"
          >
            <svg className="w-5 h-5 mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12" y2="2" />
            </svg>
            下载手机版截图 (JPG)
            <span className="text-sm opacity-80 block font-normal">适合手机分享</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <a
            href="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
          >
            <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 19-7-7 7" />
              <path d="M19 12H5" />
            </svg>
            返回首页
          </a>
        </div>

        <p className="mt-8 text-xs text-gray-500">
          NanoBananaTwo.com - AI Image Generator
        </p>
      </div>
    </div>
  );
}
