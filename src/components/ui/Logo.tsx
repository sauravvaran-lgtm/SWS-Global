import Image from "next/image";

type Props = {
  /** `dark` for white backgrounds (navy lettering), `light` for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
  eager?: boolean;
};

/**
 * Horizontal SWS Global logo (globe emblem + "SWS GLOBAL" wordmark) for the header,
 * generated from public/images/logo/sws-logo-master.png. Size it with a text-size class.
 * `light` blends into dark backgrounds; `dark` keeps the emblem's navy disc and
 * uses navy lettering so it reads on white.
 */
export function Logo({ variant = "dark", className = "", eager = false }: Props) {
  const loading = eager ? "eager" : "lazy";
  const light = variant === "light";
  return (
    <span className={`inline-flex items-center gap-[0.5em] leading-none ${className}`}>
      <Image
        src={light ? "/images/logo/sws-emblem-light.png" : "/images/logo/sws-emblem-dark.png"}
        alt=""
        width={542}
        height={542}
        loading={loading}
        sizes="64px"
        className="h-[2.5em] w-auto shrink-0"
      />
      <Image
        src={light ? "/images/logo/sws-wordmark-light.png" : "/images/logo/sws-wordmark-dark.png"}
        alt="SWS Global"
        width={810}
        height={110}
        loading={loading}
        sizes="200px"
        className="h-[1.05em] w-auto"
      />
    </span>
  );
}

/** Full stacked logo with the "Powering businesses beyond boundaries" tagline (for dark backgrounds). */
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo/sws-logo-stacked.png"
      alt="SWS Global — Powering businesses beyond boundaries"
      width={814}
      height={982}
      sizes="200px"
      className={className}
    />
  );
}
