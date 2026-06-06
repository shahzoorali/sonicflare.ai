"use client";

import { about, whyItems, hero } from "@/lib/content";
import Arrow from "./Arrow";
import { useGsap } from "@/lib/gsap";

// Equinix "Enterprise AI is distributed everywhere" section:
// dark navy panel, left headline + buttons, right a card of bullet items that
// light up one-by-one as you scroll through the pinned section.
export default function ScrollStatement() {
  const ref = useGsap<HTMLDivElement>(({ gsap, root }) => {
    const items = root.querySelectorAll<HTMLElement>(".reveal-item");

    gsap.to(items, {
      opacity: 1,
      stagger: 1,
      ease: "none",
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "+=160%",
        pin: true,
        scrub: 0.5,
      },
      onUpdate: function () {
        // light the dot of items that have crossed the threshold
        items.forEach((el) => {
          const dot = el.querySelector<HTMLElement>(".reveal-dot");
          if (dot)
            dot.style.background =
              parseFloat(getComputedStyle(el).opacity) > 0.85 ? "#e91c24" : "#3a4252";
        });
      },
    });
  });

  return (
    <section id="why" className="px-3 py-6 md:px-5 md:py-10">
      <div className="mx-auto max-w-[1400px]">
        <div
          ref={ref}
          className="flex min-h-screen items-center overflow-hidden rounded-4xl panel-dark p-7 md:p-16"
        >
          <div className="grid w-full gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red">
                Why <span className="text-gradient">SonicFlare AI</span>
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white md:text-5xl">
                {about.title}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/65">
                {hero.subheadline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white/90"
                >
                  Explore Capabilities
                  <Arrow className="h-3.5 w-3.5 text-red" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to Us
                </a>
              </div>
            </div>

            <div className="panel-dark-card rounded-2xl p-2 md:p-3">
              <ul>
                {whyItems.map((item, i) => (
                  <li
                    key={item.title}
                    className={`reveal-item px-5 py-5 ${
                      i < whyItems.length - 1 ? "border-b border-navy-line" : ""
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="reveal-dot mt-2 h-2 w-2 shrink-0 rounded-full" />
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
