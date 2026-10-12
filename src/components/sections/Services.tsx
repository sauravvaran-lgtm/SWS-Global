import Image from "next/image";
import { services, servicesIntro } from "@/lib/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-y relative overflow-hidden bg-mist"
    >
      <div className="absolute -right-40 top-20 size-[30rem] rounded-full bg-brand-200/40 blur-[120px]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="services-title"
            eyebrow={servicesIntro.eyebrow}
            title={servicesIntro.title}
            description={servicesIntro.description}
          />
          <Reveal delay={0.15} className="shrink-0">
            <ButtonLink href="#contact" variant="outline-dark">
              Discuss your requirement
            </ButtonLink>
          </Reveal>
        </div>

        <Stagger
          as="ul"
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
          stagger={0.08}
          amount={0.05}
        >
          {services.map((service, i) => (
            <StaggerItem as="li" key={service.id} className="h-full">
              <article
                id={service.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_2px_20px_-12px_rgb(6_26_58/0.25)] ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgb(10_44_92/0.45)] hover:ring-accent-400"
              >
                <div className="relative aspect-[10/8] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1240px) 290px, (min-width: 1024px) 23vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover grayscale transition-[transform,filter] duration-[900ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-900/10 to-transparent mix-blend-multiply transition-opacity duration-500 group-hover:opacity-70" />
                  <div className="absolute inset-0 bg-brand-500/0 mix-blend-color transition-colors duration-500 group-hover:bg-brand-500/35" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 font-display text-xs font-bold tracking-wider text-brand-800 backdrop-blur">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative flex flex-1 flex-col p-6">
                  <span className="absolute inset-x-6 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <h3 className="font-display text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-700">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-muted">{service.description}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
