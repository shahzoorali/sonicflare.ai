"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function getGsap() {
  if (typeof window !== "undefined" && !registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Run a GSAP setup function scoped to a container ref via gsap.context().
 * Automatically cleans up all tweens/ScrollTriggers on unmount.
 * Skips entirely (leaving content visible) when reduced motion is requested.
 */
export function useGsap<T extends HTMLElement>(
  setup: (ctx: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger; root: T }) => void,
  deps: unknown[] = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (prefersReducedMotion()) return;

    const { gsap: g, ScrollTrigger: st } = getGsap();
    const ctx = g.context(() => setup({ gsap: g, ScrollTrigger: st, root }), root);

    // Recalculate positions once fonts/images settle.
    const refresh = () => st.refresh();
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
