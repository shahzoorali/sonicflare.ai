"use client";

import { useState } from "react";
import { hero } from "@/lib/content";
import Arrow from "./Arrow";
import { useGsap } from "@/lib/gsap";

const VIDEO_SRC = "https://ravist.s3.ap-south-1.amazonaws.com/posters/sonicflare-hero-web-small.mp4";

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const ref = useGsap<HTMLElement>(({ gsap, root }) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(root.querySelectorAll(".hero-rise"), {
      y: 36,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
    });
    gsap.to(root.querySelector(".hero-media"), {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: root, start: "top top", end: "bottom top", scrub: true },
    });
  });

  return (
    <>
      <section id="top" ref={ref} className="px-3 pt-24 md:px-5 md:pt-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative flex min-h-[600px] h-[90vh] flex-col justify-between overflow-hidden rounded-4xl panel-dark p-7 md:p-12 lg:p-16">
            {/* Background video */}
            <div className="hero-media absolute inset-0 scale-105">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/hero-poster.jpg"
              >
                <source src={VIDEO_SRC} type="video/mp4" />
              </video>
              <div className="absolute inset-0 grid-lines-animated opacity-20" />
            </div>

            {/* Directional legibility gradients */}
            <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/55 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink/90 to-transparent" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" />

            {/* TOP ROW */}
            <div className="relative flex items-start justify-between">
              <span className="hero-rise inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-red animate-pulse" />
                Strategic Execution Partner
              </span>
              <span className="hero-rise hidden text-right text-[11px] font-medium uppercase tracking-[0.25em] text-white/40 md:block">
                AI Infrastructure
                <br />
                &amp; Hyperscaler Enablement
              </span>
            </div>

            {/* BOTTOM BLOCK */}
            <div className="relative w-full">
              <h1 className="hero-rise max-w-4xl font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[5rem]">
                {hero.headline.replace("AI Economy", "")}
                <span className="text-red">AI Economy</span>
              </h1>

              <div className="hero-rise mt-9 flex flex-wrap items-center gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red/25 transition hover:bg-red/90"
                >
                  {hero.primaryCta.label}
                  <Arrow className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/60 hover:bg-white/10"
                >
                  {hero.secondaryCta.label}
                </a>
                {/* Watch Video — subtle, ghost style */}
                <button
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-2 px-1 py-1 text-sm font-medium text-white/50 transition hover:text-white/80"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-white/5">
                    {/* Play icon */}
                    <svg className="h-3 w-3 translate-x-[1px]" viewBox="0 0 10 12" fill="currentColor">
                      <path d="M0 0L10 6L0 12V0Z" />
                    </svg>
                  </span>
                  Watch Video
                </button>
              </div>

              <div className="hero-rise mt-12 grid max-w-2xl grid-cols-3 divide-x divide-white/15 border-t border-white/15 pt-6">
                <Stat value="06" label="Stakeholder groups" />
                <Stat value="E2E" label="Strategy → live" />
                <Stat value="Exec" label="Not advisory" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-md p-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white transition text-sm flex items-center gap-1.5"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
              Close
            </button>
            <video
              className="w-full rounded-2xl shadow-2xl"
              controls
              autoPlay
              playsInline
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 first:pl-0">
      <p className="font-display text-3xl font-extrabold text-white md:text-4xl">
        {value}
      </p>
      <p className="mt-1 text-xs text-white/55">{label}</p>
    </div>
  );
}
