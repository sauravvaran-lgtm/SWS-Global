import { Quote } from "lucide-react";
import { about } from "@/lib/content";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function Avatar({ name, size = "lg" }: { name: string; size?: "lg" | "md" }) {
  return (
    <span
      aria-hidden
      className={`relative grid shrink-0 place-items-center rounded-2xl bg-brand-800 font-display font-bold text-white ring-1 ring-white/10 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-105 ${
        size === "lg" ? "size-16 text-xl" : "size-14 text-lg"
      }`}
    >
      {initials(name)}
      <span className="absolute -bottom-1 -right-1 size-4 rounded-full border-2 border-white bg-accent-500" />
    </span>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-y relative overflow-hidden bg-mist">
      <div className="container-x relative">
        <SectionHeading
          id="about-title"
          align="center"
          eyebrow={about.eyebrow}
          title={about.title}
          description={
            <>
              {about.intro.before}
              <strong className="font-semibold text-brand-700">{about.intro.highlight}</strong>
              {about.intro.after}
            </>
          }
        />

        {/* Executive team */}
        <Stagger as="ul" className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-3" stagger={0.1}>
          {about.executives.map((person) => (
            <StaggerItem as="li" key={person.name} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-7 shadow-[0_2px_24px_-12px_rgb(18_31_49/0.25)] ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgb(26_45_70/0.45)] hover:ring-accent-400 sm:p-8">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-500 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center gap-4">
                  <Avatar name={person.name} />
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink">{person.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-accent-700">{person.role}</p>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-muted">{person.bio}</p>
                <figure className="mt-auto pt-6">
                  <blockquote className="relative rounded-2xl bg-brand-50 p-5 pl-12 font-display text-[0.95rem] font-medium italic leading-relaxed text-brand-800">
                    <Quote aria-hidden className="absolute left-4 top-5 size-5 rotate-180 fill-accent-500/20 text-accent-500" />
                    “{person.quote}”
                  </blockquote>
                </figure>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Business growth team */}
        <Reveal delay={0.05} className="mt-14 lg:mt-16">
          <h3 className="text-center text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
            Business Growth Team
          </h3>
        </Reveal>
        <Stagger as="ul" className="mx-auto mt-6 grid max-w-5xl gap-6 md:grid-cols-2" stagger={0.1}>
          {about.growthTeam.map((person) => (
            <StaggerItem as="li" key={person.name} className="h-full">
              <article className="group flex h-full gap-5 rounded-3xl bg-white p-6 ring-1 ring-ink/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-25px_rgb(26_45_70/0.45)] hover:ring-accent-400 sm:p-7">
                <Avatar name={person.name} size="md" />
                <div>
                  <h4 className="font-display text-lg font-bold text-ink">{person.name}</h4>
                  <p className="mt-0.5 text-sm font-semibold text-accent-700">{person.role}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{person.bio}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
