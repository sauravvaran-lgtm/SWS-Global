"use client";

import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "motion/react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials, testimonialsIntro } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const AUTOPLAY_MS = 7000;

function QuoteCarousel() {
  const [[index, direction], setState] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const paginate = useCallback(
    (dir: number) => setState(([i]) => [(i + dir + total) % total, dir]),
    [total],
  );

  useEffect(() => {
    if (paused) return;
    const id = window.setTimeout(() => paginate(1), AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, paginate]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70) paginate(1);
    else if (info.offset.x > 70) paginate(-1);
  };

  const current = testimonials[index];

  return (
    <div
      className="relative mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <Quote aria-hidden className="absolute -right-6 -top-6 size-40 text-white/[0.04] sm:size-52" />

      <div className="relative flex items-center justify-between gap-4">
        <span className="grid size-14 place-items-center rounded-2xl bg-accent-500 text-ink shadow-[0_18px_40px_-14px_rgb(255_122_26/0.7)]">
          <Quote aria-hidden className="size-6 fill-current" />
        </span>
        <p className="font-display text-sm font-semibold tabular-nums text-white/50" aria-hidden>
          <span className="text-2xl text-white">{String(index + 1).padStart(2, "0")}</span> /{" "}
          {String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="relative mt-8 min-h-[13rem] sm:min-h-[11rem]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.figure
            key={index}
            custom={direction}
            variants={{
              enter: (d: number) => ({ opacity: 0, x: d * 60 }),
              center: { opacity: 1, x: 0 },
              exit: (d: number) => ({ opacity: 0, x: d * -60 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={onDragEnd}
            className="cursor-grab touch-pan-y active:cursor-grabbing"
            aria-hidden
          >
            <blockquote className="font-display text-xl font-medium leading-relaxed text-white text-pretty sm:text-2xl">
              “{current.quote}”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-ink">
                <Quote aria-hidden className="size-4 fill-current" />
              </span>
              <span>
                <span className="block font-semibold text-white">{current.name}</span>
                {current.role && <span className="block text-sm text-brand-200/80">{current.role}</span>}
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="relative mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-7">
        <div className="flex flex-wrap items-center gap-2" aria-hidden>
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              aria-label={`Show testimonial ${i + 1} of ${total}`}
              onClick={() => setState([i, i > index ? 1 : -1])}
              className={`relative h-2 overflow-hidden rounded-full transition-all duration-500 ${
                i === index ? "w-12 bg-white/15" : "w-2 bg-white/25 hover:bg-white/50"
              }`}
            >
              {i === index && (
                <motion.span
                  key={`${index}-${paused}`}
                  className="absolute inset-y-0 left-0 rounded-full bg-accent-500"
                  initial={{ width: paused ? "100%" : "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Resume autoplay" : "Pause autoplay"}
            className="grid size-11 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-accent-500 hover:text-accent-500"
          >
            {paused ? <Play aria-hidden className="size-4" /> : <Pause aria-hidden className="size-4" />}
          </button>
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="grid size-12 place-items-center rounded-full border border-white/15 text-white transition hover:-translate-x-0.5 hover:border-accent-500 hover:bg-accent-500 hover:text-ink"
          >
            <ChevronLeft aria-hidden className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="grid size-12 place-items-center rounded-full bg-accent-500 text-ink transition hover:translate-x-0.5 hover:bg-accent-400"
          >
            <ChevronRight aria-hidden className="size-5" />
          </button>
        </div>
      </div>

      {/* Every testimonial stays in the HTML for search engines and screen readers. */}
      <ul className="sr-only">
        {testimonials.map((t, i) => (
          <li key={i}>
            “{t.quote}” — {t.name}
            {t.role ? `, ${t.role}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="section-y noise relative overflow-hidden bg-brand-950 text-white"
    >
      <div className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
      <div className="absolute -right-40 top-10 size-[34rem] animate-drift rounded-full bg-brand-500/20 blur-[130px]" />
      <div className="absolute -left-40 bottom-0 size-[28rem] animate-drift rounded-full bg-accent-500/10 blur-[120px] [animation-delay:-9s]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal direction="right" distance={48} className="relative order-2 lg:order-1">
          <div className="group relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] ring-1 ring-white/10 lg:max-w-none">
            <Image
              src={testimonialsIntro.image.src}
              alt={testimonialsIntro.image.alt}
              fill
              sizes="(min-width: 1240px) 500px, (min-width: 1024px) 40vw, 92vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-brand-950/70 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-500 text-ink">
                <Quote aria-hidden className="size-5 fill-current" />
              </span>
              <p className="font-display text-sm font-semibold leading-snug text-white sm:text-base">
                Long-term partnerships, built on results
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            id="testimonials-title"
            tone="dark"
            eyebrow={testimonialsIntro.eyebrow}
            title={testimonialsIntro.title}
            description={testimonialsIntro.description}
          />
          <Reveal delay={0.1}>
            <QuoteCarousel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
