// NanoBananaTwo Logo SVG
export const LogoSVG = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 120 40"
    fill="none"
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect width="120" height="40" rx="8" fill="url(#logoGrad)"/>
    {/* Smile face */}
    <circle cx="18" cy="20" r="6" fill="white"/>
    <circle cx="18" cy="18" r="1" fill="#8B5CF6"/>
    <circle cx="22" cy="18" r="1" fill="#8B5CF6"/>
    <path d="M13 24 Q18 28 23 24" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    {/* Text */}
    <text x="38" y="26" fontSize="12" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">
      NB2
    </text>
  </svg>
);

export const LogoIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="none"
  >
    <defs>
      <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#iconGrad)"/>
    <circle cx="16" cy="24" r="7" fill="white"/>
    <circle cx="16" cy="22" r="1.5" fill="#8B5CF6"/>
    <circle cx="20" cy="22" r="1.5" fill="#8B5CF6"/>
    <path d="M11 30 Q16 35 21 30" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
  </svg>
);

export const LogoLarge = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 60"
    fill="none"
  >
    <defs>
      <linearGradient id="largeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#8B5CF6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#6366F1", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="200" height="60" rx="12" fill="url(#largeGrad)"/>
    <circle cx="30" cy="30" r="10" fill="white"/>
    <circle cx="30" cy="27" r="2" fill="#8B5CF6"/>
    <circle cx="35" cy="27" r="2" fill="#8B5CF6"/>
    <path d="M20 38 Q30 44 40 38" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <text x="60" y="38" fontSize="20" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">
      NanoBananaTwo
    </text>
  </svg>
);
