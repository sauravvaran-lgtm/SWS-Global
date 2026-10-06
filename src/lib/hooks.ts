"use client";

import { useEffect, useSyncExternalStore } from "react";

let lockCount = 0;

/** Prevents the page behind a modal or menu from scrolling while `locked` is true. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const { body, documentElement } = document;
    if (lockCount === 0) {
      const scrollbar = window.innerWidth - documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;
    }
    lockCount += 1;
    return () => {
      lockCount -= 1;
      if (lockCount === 0) {
        body.style.overflow = "";
        body.style.paddingRight = "";
      }
    };
  }, [locked]);
}

const noopSubscribe = () => () => {};

/** True only after hydration on the client — safe guard for portals. */
export function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

/** Live result of a CSS media query; `false` during server rendering. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
