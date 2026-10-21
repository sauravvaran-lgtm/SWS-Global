import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "dark" | "outline-light" | "outline-dark" | "white";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-ink shadow-[0_10px_30px_-10px_rgb(224_119_61/0.4)] hover:bg-accent-400 hover:shadow-[0_16px_40px_-12px_rgb(224_119_61/0.5)]",
  dark: "bg-ink text-white shadow-[0_10px_30px_-12px_rgb(22_22_22/0.6)] hover:bg-brand-800",
  white: "bg-white text-ink shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)] hover:bg-brand-50",
  "outline-light":
    "border border-white/30 text-white backdrop-blur-sm hover:border-accent-500 hover:bg-white/10",
  "outline-dark":
    "border border-ink/15 text-ink hover:border-brand-600 hover:bg-brand-50 hover:text-brand-800",
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: "arrow" | "external" | "none";
  size?: "md" | "lg";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  size = "md",
  className = "",
  ...rest
}: Props) {
  const isExternal = /^https?:\/\//.test(href);
  const Icon = icon === "external" ? ArrowUpRight : ArrowRight;
  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
      className={`shine group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${
        size === "lg" ? "px-7 py-4 text-[0.95rem]" : "px-6 py-3 text-sm"
      } ${variants[variant]} ${className}`}
    >
      <span className="relative z-[2]">{children}</span>
      {icon !== "none" && (
        <span className="relative z-[2] grid size-6 place-items-center overflow-hidden rounded-full bg-current/10">
          <Icon
            aria-hidden
            className={`size-4 transition-transform duration-300 ${
              icon === "external"
                ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                : "group-hover:translate-x-0.5"
            }`}
            strokeWidth={2.4}
          />
        </span>
      )}
    </a>
  );
}
