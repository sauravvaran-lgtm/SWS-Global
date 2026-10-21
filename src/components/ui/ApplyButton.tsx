"use client";

import { ArrowRight } from "lucide-react";

export const APPLY_EVENT = "sws:apply";

/** Scrolls to the contact form and pre-fills the inquiry with the chosen role. */
export function ApplyButton({ role }: { role: string }) {
  return (
    <a
      href="#contact"
      onClick={() => window.dispatchEvent(new CustomEvent(APPLY_EVENT, { detail: role }))}
      className="shine group/apply inline-flex items-center gap-2 rounded-full bg-brand-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-500 hover:text-ink"
    >
      <span className="relative z-[2]">Apply now</span>
      <ArrowRight
        aria-hidden
        className="relative z-[2] size-4 transition-transform duration-300 group-hover/apply:translate-x-1"
      />
      <span className="sr-only"> for {role}</span>
    </a>
  );
}
