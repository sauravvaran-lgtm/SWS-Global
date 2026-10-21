import { Award, ChartLine, Clock, Cog, Earth, Move, UserCog, type LucideIcon } from "lucide-react";
import { approach } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
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

        <Reveal delay={0.1} className="mt-14 lg:mt-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-brand-950 shadow-[0_30px_60px_-30px_rgb(18_31_49/0.6)]">
            {/* One row of seven on wide screens; a swipeable slider on smaller ones */}
            <Stagger
              as="ul"
              stagger={0.08}
              className="flex snap-x snap-mandatory overflow-x-auto px-3 py-10 [scrollbar-width:none] sm:px-6 xl:grid xl:grid-cols-7 xl:overflow-visible xl:px-4 xl:py-12 [&::-webkit-scrollbar]:hidden"
            >
              {approach.highlights.map((item, i) => {
                const Icon = icons[item.id];
                return (
                  <StaggerItem
                    as="li"
                    key={item.id}
                    className={`group w-[68%] shrink-0 snap-start px-5 text-center min-[480px]:w-[45%] md:w-[31%] xl:w-auto xl:px-4 ${
                      i > 0 ? "border-l border-white/10" : ""
                    }`}
                  >
                    <Icon
                      aria-hidden
                      strokeWidth={2.2}
                      className="mx-auto size-9 text-accent-500 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                    />
                    <h3 className="mt-5 font-display text-xl font-bold leading-snug text-accent-500 transition-colors duration-300 group-hover:text-accent-300">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-white/75">{item.text}</p>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
          <p className="mt-4 text-center text-xs font-medium text-muted xl:hidden" aria-hidden>
            Swipe to see more →
          </p>
        </Reveal>
      </div>
    </section>
  );
}
