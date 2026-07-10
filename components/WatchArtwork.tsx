import type { WatchTone } from "@/data/watches";

type WatchArtworkProps = {
  id: string;
  tone: WatchTone;
  label: string;
  hero?: boolean;
  className?: string;
};

const palettes: Record<WatchTone, { dial: string; dialEdge: string; accent: string; lume: string; metal: string }> = {
  onyx: { dial: "#10100f", dialEdge: "#020202", accent: "#d0aa69", lume: "#eee2c6", metal: "#a8a8a5" },
  forest: { dial: "#17372b", dialEdge: "#07130f", accent: "#d2b274", lume: "#f1e8d2", metal: "#aaa9a4" },
  navy: { dial: "#162e42", dialEdge: "#050c13", accent: "#c9a567", lume: "#eef2ee", metal: "#afb5b7" },
  silver: { dial: "#b7b6ae", dialEdge: "#42413d", accent: "#8c682e", lume: "#faf7ee", metal: "#c2c3c0" },
  burgundy: { dial: "#4e1921", dialEdge: "#160609", accent: "#d4af70", lume: "#f2e9d5", metal: "#aaa9a7" },
  champagne: { dial: "#927245", dialEdge: "#291d0e", accent: "#f0d69b", lume: "#fff4dc", metal: "#9e9382" },
  ice: { dial: "#d6dcdb", dialEdge: "#5f6b6a", accent: "#2e3334", lume: "#ffffff", metal: "#bdc2c1" },
  slate: { dial: "#3b4245", dialEdge: "#111516", accent: "#d6b676", lume: "#f0ebdf", metal: "#aeb2b1" },
};

export function WatchArtwork({ id, tone, label, hero = false, className = "" }: WatchArtworkProps) {
  const palette = palettes[tone];
  const safeId = id.replace(/[^a-zA-Z0-9_-]/g, "");
  const ticks = Array.from({ length: 12 }, (_, index) => index * 30);

  return (
    <svg
      viewBox="0 0 600 720"
      className={`watch-art${hero ? " watch-art--hero" : ""}${className ? ` ${className}` : ""}`}
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id={`dial-${safeId}`} cx="38%" cy="30%" r="72%">
          <stop offset="0%" stopColor={palette.dial} />
          <stop offset="74%" stopColor={palette.dial} />
          <stop offset="100%" stopColor={palette.dialEdge} />
        </radialGradient>
        <linearGradient id={`metal-${safeId}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#535553" />
          <stop offset="19%" stopColor="#deded7" />
          <stop offset="42%" stopColor={palette.metal} />
          <stop offset="67%" stopColor="#393a39" />
          <stop offset="87%" stopColor="#d3d3cc" />
          <stop offset="100%" stopColor="#5d5e5b" />
        </linearGradient>
        <linearGradient id={`strap-${safeId}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#161716" />
          <stop offset="18%" stopColor="#8b8e89" />
          <stop offset="37%" stopColor="#242624" />
          <stop offset="63%" stopColor="#b9bab5" />
          <stop offset="82%" stopColor="#2b2c2a" />
          <stop offset="100%" stopColor="#111211" />
        </linearGradient>
        <filter id={`shadow-${safeId}`} x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#000" floodOpacity=".62" />
        </filter>
        <filter id={`glow-${safeId}`} x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="20" />
        </filter>
      </defs>

      <ellipse cx="300" cy="622" rx="185" ry="35" fill="#000" opacity=".48" filter={`url(#glow-${safeId})`} />

      <g filter={`url(#shadow-${safeId})`}>
        <path d="M224 2h152l-18 226H242L224 2Z" fill={`url(#strap-${safeId})`} />
        <path d="M242 492h116l18 226H224l18-226Z" fill={`url(#strap-${safeId})`} />
        <g opacity=".55" stroke="#eee" strokeWidth="1">
          <path d="M251 8 264 220M300 8v212M349 8 336 220" />
          <path d="M264 500 251 710M300 500v210M336 500l13 210" />
        </g>

        <path d="M226 205c20-14 128-14 148 0l17 61H209l17-61Z" fill={`url(#metal-${safeId})`} />
        <path d="M209 454h182l-17 61c-20 14-128 14-148 0l-17-61Z" fill={`url(#metal-${safeId})`} />

        <rect x="474" y="330" width="55" height="60" rx="15" fill={`url(#metal-${safeId})`} />
        <path d="M482 338v44M493 334v52M504 334v52M515 338v44" stroke="#2e302f" strokeWidth="3" opacity=".72" />

        <circle cx="300" cy="360" r="221" fill="#101111" stroke="#3b3d3c" strokeWidth="3" />
        <circle cx="300" cy="360" r="211" fill={`url(#metal-${safeId})`} />
        <circle cx="300" cy="360" r="192" fill="#121313" stroke="#050505" strokeWidth="5" />
        <circle cx="300" cy="360" r="178" fill={`url(#dial-${safeId})`} stroke={palette.accent} strokeOpacity=".38" strokeWidth="2" />
        <circle cx="300" cy="360" r="161" fill="none" stroke="rgba(255,255,255,.14)" strokeWidth="1" />

        {ticks.map((rotation) => (
          <g key={rotation} transform={`rotate(${rotation} 300 360)`}>
            <rect
              x="294"
              y="202"
              width="12"
              height={rotation % 90 === 0 ? 34 : 25}
              rx="4"
              fill={palette.lume}
              stroke={palette.accent}
              strokeWidth="1.5"
            />
          </g>
        ))}

        {Array.from({ length: 60 }, (_, index) => index * 6).map((rotation) => (
          <line
            key={rotation}
            x1="300"
            y1="213"
            x2="300"
            y2={rotation % 30 === 0 ? "219" : "216"}
            transform={`rotate(${rotation} 300 360)`}
            stroke={palette.lume}
            strokeWidth={rotation % 30 === 0 ? "1.5" : ".8"}
            opacity={rotation % 30 === 0 ? ".75" : ".35"}
          />
        ))}

        <text x="300" y="292" textAnchor="middle" fill={palette.lume} fontSize="18" letterSpacing="5" fontFamily="Arial, sans-serif">
          JAD KRONO
        </text>
        <text x="300" y="315" textAnchor="middle" fill={palette.accent} fontSize="10" letterSpacing="3" fontFamily="Arial, sans-serif">
          SINGAPORE
        </text>
        <text x="300" y="445" textAnchor="middle" fill={palette.lume} opacity=".72" fontSize="9" letterSpacing="2.5" fontFamily="Arial, sans-serif">
          AUTOMATIC
        </text>

        <rect x="373" y="346" width="54" height="30" rx="4" fill="#eee9de" stroke={palette.accent} strokeWidth="2" />
        <text x="400" y="367" textAnchor="middle" fill="#171817" fontSize="16" fontFamily="Arial, sans-serif">18</text>

        <g transform="rotate(43 300 360)">
          <path d="M296 366 300 242l4 124Z" fill={palette.lume} stroke={palette.accent} strokeWidth="2" />
        </g>
        <g transform="rotate(126 300 360)">
          <path d="M295 365 300 273l5 92Z" fill={palette.lume} stroke={palette.accent} strokeWidth="2" />
        </g>
        <g transform="rotate(206 300 360)">
          <path d="M299 371 300 226l2 145Z" fill={palette.accent} />
          <circle cx="300" cy="228" r="6" fill="none" stroke={palette.accent} strokeWidth="2" />
        </g>
        <circle cx="300" cy="360" r="12" fill={palette.accent} stroke="#111" strokeWidth="4" />
        <circle cx="300" cy="360" r="4" fill={palette.lume} />

        <path d="M174 271c45-72 136-102 218-67" fill="none" stroke="#fff" strokeWidth="16" strokeLinecap="round" opacity=".07" />
        <path d="M196 248c44-48 111-68 173-45" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".18" />
      </g>
    </svg>
  );
}
