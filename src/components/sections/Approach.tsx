import { approach } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Approach() {
  const { framework } = approach;

  return (
    <section id="approach" aria-labelledby="approach-title" className="section-y relative overflow-hidden bg-mist">
      <div className="container-x relative">
        <SectionHeading
          id="approach-title"
          align="center"
          eyebrow={approach.eyebrow}
          title={approach.title}
          description={approach.description}
        />

        {/* The B.O.S.S. framework */}
        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <div className="rounded-[2rem] bg-white p-6 shadow-[0_2px_24px_-12px_rgb(18_31_49/0.25)] ring-1 ring-ink/5 sm:p-10 lg:p-12">
            <div className="grid gap-6 border-b border-ink/10 pb-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-12 lg:pb-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-700">{framework.label}</p>
                <h3 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {framework.title}
                </h3>
                <p className="mt-3 font-display text-lg font-semibold text-brand-700 sm:text-xl">
                  {framework.tagline.map((word, i) => (
                    <span key={i}>
                      <span className="text-accent-600">{word.charAt(0)}</span>
                      {word.slice(1)}
                      {i < framework.tagline.length - 1 ? " " : ""}
                    </span>
                  ))}
                </p>
              </div>
              <p className="text-base leading-relaxed text-muted sm:text-lg">{framework.description}</p>
            </div>

            <Stagger as="ol" stagger={0.1} className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
              {framework.steps.map((step, i) => (
                <StaggerItem as="li" key={step.title} className="h-full">
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-mist p-6 ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_60px_-25px_rgb(26_45_70/0.45)] hover:ring-accent-400 sm:p-7">
                    <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
                    <span
                      aria-hidden
                      className="grid size-14 place-items-center rounded-2xl bg-brand-900 font-display text-3xl font-bold text-accent-500 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-ink"
                    >
                      {step.letter}
                    </span>
                    <h4 className="mt-5 font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-brand-700">
                      <span className="sr-only">Step {i + 1}: </span>
                      {step.title}
                    </h4>
                    <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
