import { Briefcase, Code2, GraduationCap, HeartPulse, Users, type LucideIcon } from "lucide-react";
import { careers } from "@/lib/content";
import { ApplyButton } from "@/components/ui/ApplyButton";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sectorIcons: Record<string, LucideIcon> = {
  "UK Healthcare": HeartPulse,
  "UK Education": GraduationCap,
  IT: Code2,
};

export function Careers() {
  const totalOpenings = careers.vacancies.reduce((sum, v) => sum + v.openings, 0);

  return (
    <section id="careers" aria-labelledby="careers-title" className="section-y relative overflow-hidden bg-mist">
      <div className="absolute -left-40 top-24 size-[30rem] rounded-full bg-brand-200/40 blur-[120px]" />

      <div className="container-x relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="careers-title"
            eyebrow={careers.eyebrow}
            title={careers.title}
            description={careers.description}
          />
          <Reveal delay={0.15} className="shrink-0">
            <p className="inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-[0_2px_20px_-12px_rgb(18_31_49/0.3)] ring-1 ring-ink/5">
              <span className="grid size-11 place-items-center rounded-xl bg-accent-500 text-ink">
                <Briefcase aria-hidden className="size-5" />
              </span>
              <span>
                <span className="block font-display text-2xl font-bold leading-none text-ink">{totalOpenings}</span>
                <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                  Open positions
                </span>
              </span>
            </p>
          </Reveal>
        </div>

        <Stagger as="ul" className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6" stagger={0.07}>
          {careers.vacancies.map((job) => {
            const Icon = sectorIcons[job.sector] ?? Briefcase;
            const role = job.sector === "IT" ? job.title : `${job.title} (${job.sector})`;
            return (
              <StaggerItem as="li" key={job.id} className="h-full">
                <article
                  id={`job-${job.id}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[0_2px_20px_-12px_rgb(18_31_49/0.25)] ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgb(26_45_70/0.45)] hover:ring-accent-400"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-accent-500 transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                      <Icon aria-hidden className="size-3.5" />
                      {job.sector}
                    </span>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent-50 px-3 py-1.5 text-xs font-bold text-accent-700 ring-1 ring-accent-100">
                      <Users aria-hidden className="size-3.5" />
                      {job.openings} {job.openings === 1 ? "position" : "positions"}
                    </span>
                  </div>

                  <h3 className="mt-6 flex-1 font-display text-xl font-bold leading-snug text-ink transition-colors duration-300 group-hover:text-brand-700">
                    {job.title}
                  </h3>

                  <div className="mt-6 border-t border-ink/5 pt-5">
                    <ApplyButton role={role} />
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
