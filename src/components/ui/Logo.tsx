import Image from "next/image";

type Props = {
  /** `dark` = original colours for light backgrounds, `light` = white lettering for dark backgrounds. */
  variant?: "dark" | "light";
  className?: string;
  eager?: boolean;
};

/**
 * Horizontal SWS Global logo (globe + "SWS GLOBAL" wordmark), generated from
 * public/images/logo/swsglobal-logo-dark-2.png. Size it with a text-size class:
 * the globe is 2.5em tall and the wordmark 0.95em.
 */
export function Logo({ variant = "dark", className = "", eager = false }: Props) {
  const loading = eager ? "eager" : "lazy";
  return (
    <span className={`inline-flex items-center gap-[0.45em] leading-none ${className}`}>
      <Image
        src="/images/logo/logo-mark.png"
        alt=""
        width={512}
        height={512}
        loading={loading}
        sizes="64px"
        className="h-[2.5em] w-auto shrink-0"
      />
      <Image
        src={variant === "light" ? "/images/logo/wordmark-light.png" : "/images/logo/wordmark.png"}
        alt="SWS Global"
        width={900}
        height={96}
        loading={loading}
        sizes="240px"
        className="h-[0.95em] w-auto"
      />
    </span>
  );
}

/** Full stacked logo with the "Powering businesses beyond boundaries" tagline. */
export function LogoFull({ variant = "dark", className = "" }: Omit<Props, "eager">) {
  return (
    <Image
      src={variant === "light" ? "/images/logo/logo-full-light.png" : "/images/logo/logo-full.png"}
      alt="SWS Global — Powering businesses beyond boundaries"
      width={960}
      height={705}
      sizes="240px"
      className={className}
    />
  );
}
