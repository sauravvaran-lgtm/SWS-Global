"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Globe2 } from "lucide-react";
import { useRef, type CSSProperties } from "react";
import { hero, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { TalentNetwork } from "@/components/ui/TalentNetwork";
import { useMediaQuery } from "@/lib/hooks";

const EASE = [0.22, 1, 0.36, 1] as const;
const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  // Scroll parallax only on large screens, where text and media sit side by side.
  const parallax = useMediaQuery("(min-width: 1024px)");

  const words = hero.titleLead.split(" ");

  return (
    <section
      ref={ref}
      id="home"
      aria-labelledby="hero-title"
      className="noise relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-aqua-950 text-white"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--color-aqua-800)_0%,transparent_55%)]" />
      <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_40%_40%,#000_15%,transparent_75%)]" />
      <div className="absolute -left-40 top-1/4 -z-10 size-[34rem] animate-drift rounded-full bg-aqua-500/25 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 -z-10 size-[30rem] animate-drift rounded-full bg-aqua-400/20 blur-[120px] [animation-delay:-6s]" />

      <div className="container-x relative flex flex-1 items-center pb-32 pt-[calc(var(--header-height)+2.5rem)] sm:pb-36 lg:pb-40">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-12 xl:gap-16">
          <motion.div style={parallax ? { y: contentY, opacity: fade } : undefined}>
            <p
              style={delay(0.1)}
              className="hero-fade mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-1.5 pr-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-aqua-200 backdrop-blur-md sm:text-xs"
            >
              <span className="whitespace-nowrap rounded-full bg-aqua-400 px-2.5 py-1 text-[0.65rem] font-bold tracking-[0.12em] text-ink">
                {hero.badge}
              </span>
              {hero.eyebrow}
            </p>

            <h1
              id="hero-title"
              className="font-display text-[2.3rem] font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[2.9rem] xl:text-[3.45rem]"
            >
              {words.map((word, i) => (
                <span key={i}>
                  <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <span className="hero-word" style={delay(0.15 + i * 0.05)}>
                      {word}
                    </span>
                  </span>{" "}
                </span>
              ))}
              <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <span className="hero-word text-gradient relative" style={delay(0.25 + words.length * 0.05)}>
                  {hero.titleAccent}
                  <svg
                    aria-hidden
                    viewBox="0 0 300 20"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1 left-0 h-3 w-full text-signal-soft"
                  >
                    <path
                      d="M3 14 C 70 4, 150 4, 297 12"
                      pathLength={1}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                      className="hero-draw"
                      style={delay(1.1)}
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p
              style={delay(0.8)}
              className="hero-fade mt-7 max-w-xl text-base leading-relaxed text-white/75 text-pretty sm:text-lg"
            >
              {hero.description}
            </p>

            <div
              style={delay(0.95)}
              className="hero-fade mt-10 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center sm:gap-4"
            >
              <ButtonLink href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={hero.secondaryCta.href} variant="outline-light" size="lg">
                {hero.secondaryCta.label}
              </ButtonLink>
            </div>
          </motion.div>

          {/* Photo card (hand + glowing talent network) with rotating tagline badge */}
          <motion.div
            style={parallax ? { y: mediaY, opacity: fade } : undefined}
            className="relative mx-auto hidden w-full max-w-[30rem] md:block lg:mx-0 lg:ml-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5, ease: EASE }}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-[2.1rem] bg-gradient-to-br from-aqua-300/70 via-aqua-500/20 to-transparent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-aqua-900 shadow-[0_40px_100px_-30px_rgb(0_0_0/0.7)]">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 480px, 70vw"
                  className="object-cover object-[40%_center] transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                {/* Shift the photo's blue towards the brand teal */}
                <div className="absolute inset-0 bg-aqua-500/45 mix-blend-color" />
                <div className="absolute inset-0 bg-gradient-to-t from-aqua-950/50 via-transparent to-aqua-950/30" />
                <TalentNetwork className="absolute inset-0 size-full transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -60 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 1, ease: EASE }}
              className="absolute -bottom-10 -left-6 size-36 sm:-left-12 sm:size-44"
              aria-hidden
            >
              <div className="absolute inset-0 rounded-full bg-aqua-950/90 shadow-[0_20px_50px_-15px_rgb(0_0_0/0.7)] ring-1 ring-white/10 backdrop-blur-md" />
              <div className="absolute inset-0 animate-spin-slow">
                <svg viewBox="0 0 200 200" className="size-full">
                  <defs>
                    <path id="badge-circle" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                  </defs>
                  <text className="fill-aqua-200 text-[15.5px] font-semibold uppercase tracking-[0.2em]">
                    <textPath href="#badge-circle">{hero.ring}</textPath>
                  </text>
                </svg>
              </div>
              <div className="absolute inset-[29%] grid place-items-center rounded-full bg-aqua-400 text-ink">
                <Globe2 className="size-7 sm:size-9" strokeWidth={1.8} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.3, ease: EASE }}
              className="absolute -right-3 top-8 animate-float rounded-2xl border border-white/15 bg-aqua-950/75 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-aqua-300">{hero.chip.label}</p>
              <p className="mt-0.5 font-display text-sm font-bold text-white sm:text-base">{hero.chip.value}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-aqua-950/60 backdrop-blur-md"
      >
        <div className="mask-fade-x flex overflow-hidden py-5" aria-hidden>
          <div className="flex shrink-0 animate-marquee items-center [--marquee-duration:45s]">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {services.map((s) => (
                  <span
                    key={`${dup}-${s.id}`}
                    className="flex items-center gap-8 whitespace-nowrap px-8 text-sm font-semibold uppercase tracking-[0.16em] text-white/60"
                  >
                    {s.title}
                    <span className="size-1.5 rotate-45 bg-aqua-400" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="sr-only">
          {siteConfig.name} services: {services.map((s) => s.title).join(", ")}.
        </p>
      </motion.div>
    </section>
  );
}
