"use client";

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
    >
      Try Generator Above
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
    </button>
  );
}