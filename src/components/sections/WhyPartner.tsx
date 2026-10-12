import Image from "next/image";
import {
  Clock4,
  BarChart3,
  GraduationCap,
  Maximize2,
  ShieldCheck,
  SlidersHorizontal,
  UserCheck,
  UserRoundCog,
} from "lucide-react";
import { whyPartner } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons = [GraduationCap, UserRoundCog, UserCheck, Clock4, ShieldCheck, SlidersHorizontal, Maximize2, BarChart3];

export function WhyPartner() {
  return (
    <section id="why-us" aria-labelledby="why-title" className="section-y relative overflow-hidden bg-white">
      <div className="absolute -left-48 top-1/3 size-[30rem] rounded-full bg-brand-200/50 blur-[120px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <SectionHeading id="why-title" eyebrow={whyPartner.eyebrow} title={whyPartner.title} />

          <Stagger as="ul" className="mt-10 grid gap-3.5 sm:grid-cols-2" stagger={0.06}>
            {whyPartner.points.map((point, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem as="li" key={point} distance={20}>
                  <div className="group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl bg-mist p-4 ring-1 ring-ink/5 transition-all duration-400 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-22px_rgb(10_44_92/0.5)] hover:ring-accent-400">
                    <span className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-accent-500 transition-transform duration-400 group-hover:scale-y-100" />
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-900 text-accent-500 transition-all duration-400 group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-ink">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span className="font-semibold leading-snug text-charcoal">{point}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.2} className="mt-10">
            <ButtonLink href="#contact" variant="dark" size="lg">
              Start the conversation
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal direction="left" distance={48}>
          <div className="group/frame relative">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-gradient-to-br from-brand-400 via-brand-500 to-brand-800 opacity-90 transition-transform duration-700 group-hover/frame:rotate-0 sm:-inset-4" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-ink p-2.5 shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
                <Image
                  src={whyPartner.image.src}
                  alt={whyPartner.image.alt}
                  fill
                  sizes="(min-width: 1024px) 560px, 92vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover/frame:scale-105"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 left-6 z-10 animate-float rounded-2xl bg-white p-4 shadow-[0_24px_60px_-20px_rgb(6_26_58/0.45)] sm:left-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">{whyPartner.imageCard.label}</p>
              <p className="mt-0.5 font-display text-base font-bold text-ink">{whyPartner.imageCard.value}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
