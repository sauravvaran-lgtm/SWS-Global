import Image from "next/image";
import { Globe2, Quote } from "lucide-react";
import { about, services } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ParallaxMedia } from "@/components/ui/ParallaxMedia";

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y relative overflow-hidden bg-white">
      <div className="bg-dots pointer-events-none absolute right-0 top-0 h-80 w-1/2 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />

          <div className="mt-7 space-y-5 text-base leading-relaxed text-muted sm:text-[1.05rem]">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p className={i === 0 ? "font-medium text-charcoal" : undefined}>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <figure className="group relative mt-9 overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 transition-shadow duration-500 hover:shadow-[0_20px_50px_-25px_rgb(15_91_184/0.5)] sm:p-7">
              <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-500 to-brand-600 transition-all duration-500 group-hover:w-1.5" />
              <Quote aria-hidden className="absolute -right-2 -top-2 size-24 rotate-180 text-brand-100 transition-transform duration-700 group-hover:rotate-[170deg] group-hover:scale-110" />
              <blockquote className="relative font-display text-2xl font-semibold leading-snug text-ink sm:text-[1.7rem]">
                {about.quoteLead}
                <br />
                <span className="text-gradient-dark">{about.quoteAccent}</span>
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={0.3} className="mt-9">
            <ButtonLink href={about.cta.href} variant="dark" size="lg">
              {about.cta.label}
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal direction="left" distance={48} className="relative">
          <div className="absolute -inset-4 -z-0 translate-x-6 translate-y-6 rounded-[2rem] bg-gradient-to-br from-brand-400 to-brand-700 opacity-90 sm:-inset-5" />
          <ParallaxMedia className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-brand-900 shadow-2xl sm:aspect-[5/4]">
            <Image
              src={about.image.src}
              alt={about.image.alt}
              fill
              sizes="(min-width: 1240px) 560px, (min-width: 1024px) 45vw, 92vw"
              className="scale-[1.14] object-cover"
            />
          </ParallaxMedia>

          <div className="absolute -bottom-6 -left-2 z-10 animate-float rounded-2xl bg-white p-4 shadow-[0_24px_60px_-20px_rgb(6_26_58/0.45)] sm:-left-8 sm:p-5">
            <div className="flex items-center gap-3.5">
              <span className="grid size-11 place-items-center rounded-xl bg-accent-500 text-ink">
                <Globe2 aria-hidden className="size-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">Built for</p>
                <p className="font-display text-base font-bold text-ink sm:text-lg">Global hiring</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 -top-6 z-10 animate-float-delayed rounded-2xl bg-ink p-4 text-white shadow-[0_24px_60px_-20px_rgb(6_26_58/0.6)] sm:-right-6 sm:p-5">
            <div className="flex items-center gap-3.5">
              <p className="font-display text-4xl font-bold leading-none text-accent-500">{services.length}</p>
              <p className="text-xs font-medium leading-snug text-white/75">
                Core recruitment
                <br />
                services
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
