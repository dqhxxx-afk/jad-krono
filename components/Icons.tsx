type IconProps = {
  size?: number;
  className?: string;
};

export function ArrowIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 20, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.3 3.7A11.68 11.68 0 0 0 12.02.28C5.58.28.34 5.52.34 11.96c0 2.06.54 4.08 1.57 5.85L.24 23.9l6.23-1.63a11.67 11.67 0 0 0 5.55 1.41h.01c6.44 0 11.68-5.24 11.68-11.68 0-3.12-1.21-6.05-3.41-8.3Z" fill="currentColor" opacity=".18" />
      <path d="m3.7 17.52-1.1 4.02 4.12-1.08a9.73 9.73 0 1 0-3.02-2.94Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
      <path d="M8.4 7.17c.2-.44.4-.45.72-.46h.62c.18 0 .47.07.71.62.24.57.82 2.01.89 2.16.07.14.12.31.02.5-.09.2-.14.31-.28.48-.15.17-.3.37-.43.49-.14.14-.29.29-.13.58.17.29.73 1.2 1.56 1.94 1.08.96 1.98 1.26 2.27 1.4.29.15.46.12.63-.07.17-.2.72-.84.91-1.13.2-.29.39-.24.65-.14.27.09 1.68.79 1.97.94.29.14.48.21.55.33.07.12.07.7-.17 1.37-.24.67-1.39 1.28-1.91 1.36-.49.08-1.1.12-1.78-.1-.41-.13-.94-.31-1.62-.6-.28-.12-4.94-1.83-7.48-6.44-.72-1.3-.72-2.36-.55-2.77.17-.41.61-.89.85-1.16Z" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function PlusIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
