"use client";

import { useEffect, useRef, ReactNode } from "react";

type Variant =
  | "fade-up"
  | "fade-down"
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "scale-up"
  | "blur-in";

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  threshold?: number;
  stagger?: number; // ms delay between each direct child
  className?: string;
  once?: boolean;
};

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.15,
  stagger = 0,
  className = "",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply initial hidden state
    el.classList.add("sr-hidden");
    el.dataset.srVariant = variant;
    el.style.setProperty("--sr-delay", `${delay}ms`);
    el.style.setProperty("--sr-duration", `${duration}ms`);

    // If staggering, apply incremental delays to direct children
    if (stagger > 0) {
      const children = el.querySelectorAll(":scope > *");
      children.forEach((child, i) => {
        (child as HTMLElement).style.setProperty(
          "--sr-child-delay",
          `${delay + i * stagger}ms`
        );
        (child as HTMLElement).classList.add("sr-stagger-child");
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sr-visible");
          el.classList.remove("sr-hidden");
          if (once) observer.unobserve(el);
        } else if (!once) {
          el.classList.remove("sr-visible");
          el.classList.add("sr-hidden");
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [variant, delay, duration, threshold, stagger, once]);

  return (
    <div ref={ref} className={`sr-wrapper ${className}`}>
      {children}
    </div>
  );
}
