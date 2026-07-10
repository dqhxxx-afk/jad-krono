type ServiceGlyphProps = {
  type: "buy" | "source" | "sell" | "consign" | "view";
};

export function ServiceGlyph({ type }: ServiceGlyphProps) {
  if (type === "buy") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="20" />
        <path d="M32 18v28M18 32h28" />
      </svg>
    );
  }
  if (type === "source") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="27" cy="27" r="16" />
        <path d="m39 39 12 12M27 18v18M18 27h18" />
      </svg>
    );
  }
  if (type === "sell") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M12 23h40v26H12zM20 23V15h24v8" />
        <path d="M21 37h22M36 30l7 7-7 7" />
      </svg>
    );
  }
  if (type === "consign") {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M17 13h30v38H17z" />
        <path d="M24 24h16M24 32h16M24 40h10" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M7 32s9-15 25-15 25 15 25 15-9 15-25 15S7 32 7 32Z" />
      <circle cx="32" cy="32" r="7" />
    </svg>
  );
}
