import { Cpu, GraduationCap, HardHat, HeartPulse, Scale, UserSearch, type LucideIcon } from "lucide-react";
import { expertise } from "@/lib/content";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<(typeof expertise.items)[number]["id"], LucideIcon> = {
  recruitment: UserSearch,
  it: Cpu,
  engineering: HardHat,
  "finance-and-legal": Scale,
  education: GraduationCap,
  healthcare: HeartPulse,
};

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-title"
      className="section-y relative overflow-hidden bg-white"
    >
      <div className="container-x relative">
        <SectionHeading
          id="expertise-title"
          align="center"
          eyebrow={expertise.eyebrow}
          title={expertise.title}
          description={expertise.description}
        />

        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6" stagger={0.08}>
          {expertise.items.map((item, i) => {
            const Icon = icons[item.id];
            return (
              <StaggerItem as="li" key={item.id} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-mist p-7 ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_60px_-25px_rgb(26_45_70/0.45)] hover:ring-accent-400 sm:p-8">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <span
                    aria-hidden
                    className="absolute right-6 top-5 font-display text-5xl font-bold text-ink/[0.06] transition-colors duration-500 group-hover:text-accent-500/25"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-14 place-items-center rounded-2xl bg-brand-900 text-accent-500 transition-all duration-500 group-hover:-rotate-6 group-hover:scale-105 group-hover:bg-accent-500 group-hover:text-ink">
                    <Icon aria-hidden className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors duration-300 group-hover:text-brand-700">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
