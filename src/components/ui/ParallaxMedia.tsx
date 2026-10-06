"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** How far (in %) the inner media drifts while the frame crosses the viewport. */
  strength?: number;
};

/** Frame whose inner media drifts vertically as you scroll, for a subtle depth effect. */
export function ParallaxMedia({ children, className = "", strength = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }} className="relative size-full">
        {children}
      </motion.div>
    </div>
  );
}
