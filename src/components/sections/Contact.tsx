import { Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { contact, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";

/** Shown wherever a contact detail has not been added to src/lib/site.ts yet. */
function Placeholder({ children }: { children: string }) {
  return <span className="text-white/45">{children}</span>;
}

export function Contact() {
  const { address, phones, email } = siteConfig;

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y relative overflow-hidden bg-white">
      <div className="bg-dots pointer-events-none absolute inset-x-0 top-0 h-96 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      <div className="container-x relative">
        <SectionHeading
          id="contact-title"
          align="center"
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          <Reveal direction="right" distance={40} className="h-full">
            <aside className="noise relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-brand-900 p-7 text-white sm:p-10">
              <div className="absolute -right-24 -top-24 size-72 animate-drift rounded-full bg-brand-400/30 blur-3xl" />
              <div className="bg-grid absolute inset-0 opacity-50 [mask-image:linear-gradient(to_top,#000,transparent)]" />

              <div className="relative">
                <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
                  <MapPin aria-hidden className="size-4" /> Office
                </h3>
                <address className="mt-4 not-italic leading-relaxed text-white/85">
                  {address.lines.length > 0 ? (
                    address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))
                  ) : (
                    <Placeholder>[Office address]</Placeholder>
                  )}
                </address>
              </div>

              <div className="relative mt-9">
                <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
                  <Phone aria-hidden className="size-4" /> Phone
                </h3>
                {phones.length > 0 ? (
                  <ul className="mt-4 space-y-2.5">
                    {phones.map((phone) => (
                      <li key={phone.href}>
                        <a
                          href={phone.href}
                          className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-accent-500/60 hover:bg-white/[0.07]"
                        >
                          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/50 group-hover:text-accent-400">
                            {phone.label}
                          </span>
                          <span className="font-semibold tabular-nums text-white">{phone.display}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4">
                    <Placeholder>[Phone number]</Placeholder>
                  </p>
                )}
              </div>

              <div className="relative mt-9">
                <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
                  <Mail aria-hidden className="size-4" /> Email
                </h3>
                {email ? (
                  <a
                    href={`mailto:${email}`}
                    className="link-underline mt-3 inline-block font-display text-xl font-semibold text-white"
                  >
                    {email}
                  </a>
                ) : (
                  <p className="mt-3">
                    <Placeholder>[Email address]</Placeholder>
                  </p>
                )}
              </div>

              <div className="relative mt-auto pt-10">
                <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-accent-500">
                  <Sparkles aria-hidden className="size-4" /> How we can help
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {services.map((s) => (
                    <li
                      key={s.id}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/75"
                    >
                      {s.title}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>

          <Reveal direction="left" distance={40} delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
