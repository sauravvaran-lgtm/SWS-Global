"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none" | "scale";

const EASE = [0.22, 1, 0.36, 1] as const;

function hiddenState(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { opacity: 0, y: distance };
    case "down":
      return { opacity: 0, y: -distance };
    case "left":
      return { opacity: 0, x: distance };
    case "right":
      return { opacity: 0, x: -distance };
    case "scale":
      return { opacity: 0, scale: 0.92 };
    default:
      return { opacity: 0 };
  }
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  amount?: number;
  id?: string;
};

/** Fades and slides its content in the first time it scrolls into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 32,
  amount = 0.2,
  id,
}: RevealProps) {
  return (
    <motion.div
      id={id}
      data-reveal
      className={className}
      initial={hiddenState(direction, distance)}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: "div" | "ul" | "ol";
};

const containerVariants = (stagger: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

/** Reveals its <StaggerItem> children one after another. */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.15,
  as = "div",
}: StaggerProps) {
  const props = {
    className,
    variants: containerVariants(stagger, delay),
    initial: "hidden" as const,
    whileInView: "show" as const,
    viewport: { once: true, amount },
  };
  if (as === "ul") return <motion.ul {...props}>{children}</motion.ul>;
  if (as === "ol") return <motion.ol {...props}>{children}</motion.ol>;
  return <motion.div {...props}>{children}</motion.div>;
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  children,
  className,
  direction = "up",
  distance = 28,
  as = "div",
}: StaggerItemProps) {
  const variants: Variants = {
    hidden: hiddenState(direction, distance),
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: EASE },
    },
  };
  const props = { className, variants, "data-reveal": true };
  if (as === "li") return <motion.li {...props}>{children}</motion.li>;
  if (as === "article") return <motion.article {...props}>{children}</motion.article>;
  return <motion.div {...props}>{children}</motion.div>;
}
