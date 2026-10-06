"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

const format = (n: number) => Math.round(n).toLocaleString("en-US");

/** Counts up from zero the first time it scrolls into view. */
export function Counter({ value, suffix = "", duration = 2.2, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: setDisplay,
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion]);

  const shown = reduceMotion ? value : display;

  return (
    <span ref={ref} className={className}>
      <span aria-hidden>
        {format(shown)}
        {suffix}
      </span>
      <span className="sr-only">
        {format(value)}
        {suffix}
      </span>
    </span>
  );
}
