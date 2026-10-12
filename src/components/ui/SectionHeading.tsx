import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Eyebrow + H2 + intro paragraph used at the top of every section. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <Reveal distance={16}>
          <p
            className={`mb-4 inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] ${
              dark ? "text-accent-500" : "text-brand-600"
            }`}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-accent-500" />
            </span>
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          id={id}
          className={`font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.85rem] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${
              dark ? "text-white/70" : "text-muted"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
