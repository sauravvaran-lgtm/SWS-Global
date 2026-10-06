"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Animations respect the visitor's "reduce motion" OS setting. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
