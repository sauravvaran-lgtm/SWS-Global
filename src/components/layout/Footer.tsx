import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, services } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/ui/BrandIcons";

const socials = [
  { label: "LinkedIn", href: siteConfig.social.linkedin, Icon: LinkedInIcon },
  { label: "Facebook", href: siteConfig.social.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, Icon: YouTubeIcon },
  { label: "X (Twitter)", href: siteConfig.social.twitter, Icon: XIcon },
].filter((s) => s.href);

const headingClass = "text-xs font-bold uppercase tracking-[0.2em] text-accent-500";

export function Footer() {
  const year = new Date().getFullYear();
  const { address, phones, email } = siteConfig;

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      {/* CTA band */}
      <div className="container-x relative">
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-14 md:flex-row md:items-center lg:py-16">
          <p className="max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Powering businesses
            <br />
            <span className="text-accent-500">beyond boundaries.</span>
          </p>
          <a
            href="#contact"
            className="shine group inline-flex shrink-0 items-center gap-3 rounded-full bg-accent-500 px-7 py-4 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-400"
          >
            <span className="relative z-[2]">Get in touch</span>
            <ArrowUpRight
              aria-hidden
              className="relative z-[2] size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>

      <div className="container-x relative grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_1.1fr] lg:gap-10 lg:py-16">
        <div>
          <a href="#home" aria-label="SWS Global — back to top" className="inline-block">
            <Logo sizes="200px" className="h-auto w-40 sm:w-44" />
          </a>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">{siteConfig.description}</p>
          {socials.length > 0 && (
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`SWS Global on ${label}`}
                    className="grid size-10 place-items-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-500 hover:text-ink hover:ring-accent-500"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Footer">
          <h3 className={headingClass}>Quick Links</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[...navLinks, { label: "Contact", href: "#contact" }].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="link-underline text-white/70 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className={headingClass}>Services</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="link-underline text-white/70 transition-colors hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Contact Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-accent-500" />
              <address className="not-italic leading-relaxed">
                {address.lines.length > 0 ? (
                  address.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))
                ) : (
                  <span className="text-white/40">[Office address]</span>
                )}
              </address>
            </li>
            {phones.length > 0 ? (
              phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className="flex items-center gap-3 transition-colors hover:text-white">
                    <Phone aria-hidden className="size-4 shrink-0 text-accent-500" />
                    <span className="tabular-nums">{phone.display}</span>
                  </a>
                </li>
              ))
            ) : (
              <li className="flex items-center gap-3">
                <Phone aria-hidden className="size-4 shrink-0 text-accent-500" />
                <span className="text-white/40">[Phone number]</span>
              </li>
            )}
            <li>
              {email ? (
                <a href={`mailto:${email}`} className="flex items-center gap-3 transition-colors hover:text-white">
                  <Mail aria-hidden className="size-4 shrink-0 text-accent-500" />
                  <span className="link-underline">{email}</span>
                </a>
              ) : (
                <span className="flex items-center gap-3">
                  <Mail aria-hidden className="size-4 shrink-0 text-accent-500" />
                  <span className="text-white/40">[Email address]</span>
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        {/* Extra bottom/right padding keeps the text clear of the fixed back-to-top button */}
        <div className="container-x flex flex-col items-center justify-between gap-3 pb-24 pt-6 text-center text-xs text-white/50 sm:flex-row sm:pb-6 sm:pr-20 sm:text-left min-[1400px]:pr-6">
          <p>Copyright © {year} SWS Global. All rights reserved.</p>
          <p>Offshore recruitment services</p>
        </div>
      </div>
    </footer>
  );
}
