import { Award, ChartLine, Clock, Cog, Earth, Move, UserCog, type LucideIcon } from "lucide-react";
import { approach } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<(typeof approach.highlights)[number]["id"], LucideIcon> = {
  experience: Award,
  delivery: Earth,
  specialists: UserCog,
  bot: Cog,
  operations: Clock,
  scalable: Move,
  "track-record": ChartLine,
};

export function Approach() {
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

        {/* Rows of 2 / 3 / 4 cards; an incomplete last row is centred */}
        <Stagger as="ul" stagger={0.07} className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-5 lg:mt-16 lg:gap-6">
          {approach.highlights.map((item) => {
            const Icon = icons[item.id];
            return (
              <StaggerItem
                as="li"
                key={item.id}
                className="w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.625rem)] md:w-[calc(33.333%-0.84rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-5 shadow-[0_2px_20px_-12px_rgb(18_31_49/0.25)] ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgb(26_45_70/0.45)] hover:ring-accent-400 sm:p-7">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-900 text-accent-500 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-ink sm:size-14">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-700 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{item.text}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
