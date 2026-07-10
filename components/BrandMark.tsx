import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className={`brand-mark${compact ? " brand-mark--compact" : ""}`}
      aria-label="JAD KRONO home"
    >
      <span className="brand-mark__monogram" aria-hidden="true">
        <svg viewBox="0 0 48 48" role="presentation">
          <path d="M11 8h9v20c0 8.6-4.5 13-13 13v-7c4.3 0 4.8-2.4 4.8-6V8H11Z" />
          <path d="M29.5 8H40L28.2 23.5 41 41H30L19 24.8 29.5 8Z" />
        </svg>
      </span>
      <span className="brand-mark__words">
        <strong>JAD KRONO</strong>
        {!compact && <small>Singapore</small>}
      </span>
    </Link>
  );
}
