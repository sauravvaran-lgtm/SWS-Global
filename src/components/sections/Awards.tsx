"use client";

import Image from "next/image";
import { Award, Medal, Minus, Plus, Trophy } from "lucide-react";
import { useId, useState } from "react";
import { awards, awardsIntro } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [Trophy, Medal, Award, Trophy];

export function Awards() {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section
      id="awards"
      aria-labelledby="awards-title"
      className="section-y noise relative overflow-hidden bg-ink text-white"
    >
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]" />
      <div className="absolute -left-40 bottom-0 size-[32rem] animate-drift rounded-full bg-aqua-600/25 blur-[130px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal direction="right" distance={48} className="relative order-2 lg:order-1">
          <div className="group relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[1.75rem] bg-aqua-950 ring-1 ring-white/10 sm:aspect-square lg:max-w-none">
            <Image
              src={awardsIntro.image.src}
              alt={awardsIntro.image.alt}
              fill
              sizes="(min-width: 1240px) 540px, (min-width: 1024px) 44vw, 92vw"
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-full bg-aqua-400 py-2 pl-2 pr-5 text-ink shadow-[0_18px_40px_-14px_rgb(61_217_217/0.7)] sm:left-10">
            <span className="grid size-9 place-items-center rounded-full bg-ink text-aqua-400">
              <Trophy aria-hidden className="size-4" />
            </span>
            <span className="text-sm font-bold">Recognition & awards</span>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            id="awards-title"
            tone="dark"
            eyebrow={awardsIntro.eyebrow}
            title={awardsIntro.title}
            description={awardsIntro.description}
          />

          <Stagger as="ul" stagger={0.08} className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {awards.map((award, i) => {
              const Icon = icons[i];
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const buttonId = `${baseId}-button-${i}`;
              return (
                <StaggerItem as="li" key={award.title} distance={20}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="group flex w-full items-center gap-4 py-5 text-left sm:gap-5"
                      >
                        <span
                          className={`grid size-12 shrink-0 place-items-center rounded-2xl transition-all duration-500 ${
                            isOpen
                              ? "rotate-0 bg-aqua-400 text-ink"
                              : "-rotate-6 bg-white/5 text-aqua-400 ring-1 ring-white/10 group-hover:rotate-0 group-hover:bg-white/10"
                          }`}
                        >
                          <Icon aria-hidden className="size-5" />
                        </span>
                        <span
                          className={`flex-1 font-display text-lg font-semibold transition-colors duration-300 sm:text-xl ${
                            isOpen ? "text-aqua-300" : "text-white group-hover:text-aqua-200"
                          }`}
                        >
                          {award.title}
                        </span>
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-aqua-400 bg-aqua-400/10 text-aqua-400"
                              : "border-white/20 text-white/70 group-hover:border-white/50"
                          }`}
                        >
                          {isOpen ? <Minus aria-hidden className="size-4" /> : <Plus aria-hidden className="size-4" />}
                        </span>
                      </button>
                    </h3>
                    {/* Kept in the DOM (for search engines) and collapsed with a grid-rows transition */}
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      inert={!isOpen}
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pl-16 pr-12 leading-relaxed text-white/70 sm:pl-[4.25rem]">
                          {award.description}
                        </p>
                      </div>
                    </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
