"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

export function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => setVisible(y > 900));

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.92 }}
          className="group fixed bottom-5 right-5 z-40 grid size-12 place-items-center rounded-full bg-ink text-white shadow-[0_14px_40px_-12px_rgb(18_31_49/0.7)] sm:bottom-8 sm:right-8 sm:size-14"
        >
          <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 56 56" aria-hidden>
            <circle cx="28" cy="28" r="26" fill="none" stroke="rgb(255 255 255 / 0.12)" strokeWidth="2.5" />
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="#e0773d"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <ArrowUp aria-hidden className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
