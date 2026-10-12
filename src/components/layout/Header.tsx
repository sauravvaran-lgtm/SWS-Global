"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { useLockBodyScroll } from "@/lib/hooks";
import { Logo } from "@/components/ui/Logo";

const sectionIds = [...navLinks.map((l) => l.href.slice(1)), "contact"];

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useLockBodyScroll(menuOpen);

  // The header stays pinned to the top; it turns solid once the page is scrolled.
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;
  const lightText = !solid;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
          solid
            ? menuOpen
              ? "border-b border-white/10 bg-brand-950"
              : "border-b border-ink/5 bg-white/95 shadow-[0_8px_30px_-18px_rgb(6_26_58/0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container-x flex h-[var(--header-height)] items-center justify-between gap-6">
          <a
            href="#home"
            className="group shrink-0 transition-transform duration-300 hover:scale-[1.03]"
            aria-label="SWS Global — back to top"
            onClick={() => setMenuOpen(false)}
          >
            <Logo variant={lightText || menuOpen ? "light" : "dark"} eager className="text-[1rem] sm:text-[1.15rem]" />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 xl:px-4 ${
                        lightText
                          ? isActive
                            ? "text-white"
                            : "text-white/75 hover:text-white"
                          : isActive
                            ? "text-brand-800"
                            : "text-charcoal hover:text-brand-700"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className={`absolute inset-0 -z-10 rounded-full ${
                            lightText ? "bg-white/12" : "bg-brand-50 ring-1 ring-brand-200/70"
                          }`}
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`shine group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex ${
                lightText || menuOpen
                  ? "bg-accent-500 text-ink hover:bg-accent-400"
                  : "bg-ink text-white hover:bg-brand-800"
              }`}
            >
              <span className="relative z-[2]">Get in touch</span>
              <ArrowRight
                aria-hidden
                className="relative z-[2] size-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <button
              type="button"
              className={`relative grid size-11 place-items-center rounded-full transition-colors lg:hidden ${
                lightText || menuOpen
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-ink/5 text-ink hover:bg-ink/10"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-5" aria-hidden>
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 overflow-y-auto bg-brand-950 pt-[var(--header-height)] lg:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute -right-24 top-24 size-80 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-accent-500/15 blur-3xl" />
            <nav aria-label="Mobile" className="container-x relative flex min-h-full flex-col pb-10 pt-8">
              <motion.ul
                className="flex flex-col"
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
              >
                {[...navLinks, { label: "Contact", href: "#contact" }].map((link, i) => (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                    }}
                    className="border-b border-white/10"
                  >
                    <a
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center justify-between py-4 font-display text-2xl font-semibold text-white sm:text-3xl"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="text-xs font-medium text-accent-500">0{i + 1}</span>
                        <span className="transition-colors group-hover:text-accent-400">{link.label}</span>
                      </span>
                      <ArrowRight
                        aria-hidden
                        className="size-5 text-accent-500 transition-transform group-hover:translate-x-1"
                      />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.55 } }}
                className="mt-auto space-y-3 pt-10 text-sm text-white/70"
              >
                {siteConfig.email && (
                  <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 hover:text-white">
                    <Mail aria-hidden className="size-4 text-accent-500" /> {siteConfig.email}
                  </a>
                )}
                {siteConfig.phones[0] && (
                  <a href={siteConfig.phones[0].href} className="flex items-center gap-3 hover:text-white">
                    <Phone aria-hidden className="size-4 text-accent-500" /> {siteConfig.phones[0].display}
                  </a>
                )}
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-accent-400"
                >
                  Get in touch <ArrowRight aria-hidden className="size-4" />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
