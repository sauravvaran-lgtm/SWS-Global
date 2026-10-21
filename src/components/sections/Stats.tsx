import { Briefcase, Smile, Users, Building2 } from "lucide-react";
import { stats } from "@/lib/content";
import { Counter } from "@/components/ui/Counter";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";

const icons = [Building2, Briefcase, Users, Smile];

export function Stats() {
  return (
    <section aria-label="SWS Global in numbers" className="relative bg-white pb-20 lg:pb-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-900 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
          <Stagger as="ul" className="relative grid grid-cols-2 gap-y-10 lg:grid-cols-4" stagger={0.12}>
            {stats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <StaggerItem
                  as="li"
                  key={stat.label}
                  className={`group px-3 text-center sm:px-6 lg:text-left ${
                    i % 2 === 1 ? "border-l border-white/10" : ""
                  } ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
                >
                  <span className="mx-auto mb-4 grid size-11 place-items-center rounded-xl bg-white/5 text-accent-500 ring-1 ring-white/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-6 group-hover:bg-accent-500 group-hover:text-ink lg:mx-0">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  {stat.value === null ? (
                    // Placeholder until the real figure is added in src/lib/content.ts
                    <span className="block font-display text-4xl font-bold tracking-tight text-white/40 sm:text-5xl lg:text-[3.4rem]">
                      XX{stat.suffix}
                    </span>
                  ) : (
                    <Counter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="block font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
                    />
                  )}
                  <span className="mt-2 block text-sm font-medium uppercase tracking-[0.14em] text-brand-200/80">
                    {stat.label}
                  </span>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
