type Props = {
  /** `dark` text for light backgrounds, `light` text for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
};

/** The globe-and-orbit symbol on its own (used in the logo and favicons). */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden focusable="false">
      <rect width="48" height="48" rx="13" fill="#3dd9d9" />
      <g fill="none" stroke="#083636" strokeWidth="2.6" strokeLinecap="round">
        <circle cx="24" cy="24" r="11.5" />
        <ellipse cx="24" cy="24" rx="5" ry="11.5" />
        <path d="M12.5 24h23" />
      </g>
      <ellipse
        cx="24"
        cy="24"
        rx="19"
        ry="6.5"
        transform="rotate(-28 24 24)"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.4"
      />
      <circle cx="39.6" cy="15.9" r="3.4" fill="#e01616" stroke="#ffffff" strokeWidth="1.6" />
    </svg>
  );
}

/** SWS Global logo: symbol + "SWSGLOBAL" wordmark. Size it with a text-size class. */
export function Logo({ variant = "dark", className = "" }: Props) {
  const light = variant === "light";
  return (
    <span
      className={`inline-flex items-center gap-[0.45em] font-display leading-none tracking-[0.01em] ${className}`}
    >
      <LogoMark className="size-[1.55em] shrink-0" />
      <span className="text-[1em] uppercase" aria-hidden>
        <span className="font-extrabold text-[#30dbdb]">SWS</span>
        <span className={`font-semibold transition-colors duration-500 ${light ? "text-white" : "text-ink"}`}>
          GLOBAL
        </span>
      </span>
      <span className="sr-only">SWS Global</span>
    </span>
  );
}
