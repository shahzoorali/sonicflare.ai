"use client";

import { ecosystemNodes } from "@/lib/content";
import { useGsap } from "@/lib/gsap";

export default function EcosystemDiagram() {
  const center = 50;
  const radius = 36;

  // Pinned moment: the orbit ring rotates while the chips counter-rotate so
  // their labels stay perfectly upright. Stakeholder list lights up on scroll.
  const ref = useGsap<HTMLDivElement>(({ gsap, root }) => {
    const orbit = root.querySelector(".eco-orbit");
    const chips = root.querySelectorAll<HTMLElement>(".eco-chip");
    const items = root.querySelectorAll<HTMLElement>(".eco-item");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top top",
        end: "+=110%",
        pin: true,
        scrub: 0.6,
      },
    });
    tl.fromTo(orbit, { rotate: -28 }, { rotate: 28, ease: "none" }, 0);
    // Counter-rotation keeps every label upright through the spin.
    tl.fromTo(chips, { rotate: 28 }, { rotate: -28, ease: "none" }, 0);
    tl.fromTo(
      items,
      { opacity: 0.35, x: -10 },
      { opacity: 1, x: 0, stagger: 0.5, ease: "none" },
      0
    );
  });

  return (
    <section className="px-5 py-12 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1400px]">
        <div ref={ref} className="flex min-h-screen flex-col justify-center">
          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
              The Ecosystem
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              <span className="text-gradient">One partner aligning every stakeholder.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted">
              <span className="text-gradient">SonicFlare AI</span> sits at the center — connecting governments,
              hyperscalers, investors, utilities, EPC providers, and local
              partners so projects move from intent to operation.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <ul className="grid grid-cols-2 gap-2">
              {ecosystemNodes.map((node) => (
                <li
                  key={node}
                  className="eco-item card-light flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-ink transition hover:border-red"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red" />
                  {node}
                </li>
              ))}
            </ul>

            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              <span className="absolute left-1/2 top-1/2 z-0 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/15 blur-3xl glow-pulse" />

              <div className="eco-orbit absolute inset-0">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                  {/* Orbit path */}
                  <circle
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="#e91c24"
                    strokeOpacity="0.22"
                    strokeWidth="0.3"
                    strokeDasharray="1 1.6"
                  />
                  {/* Connector spokes with flowing dashes */}
                  {ecosystemNodes.map((_, i) => {
                    const angle =
                      (i / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);
                    return (
                      <line
                        key={i}
                        className="eco-line"
                        x1={center}
                        y1={center}
                        x2={x}
                        y2={y}
                        stroke="#e91c24"
                        strokeOpacity="0.45"
                        strokeWidth="0.35"
                        strokeDasharray="0.8 1.4"
                      />
                    );
                  })}
                </svg>

                {ecosystemNodes.map((node, i) => {
                  const angle =
                    (i / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
                  const left = center + radius * Math.cos(angle);
                  const top = center + radius * Math.sin(angle);
                  return (
                    <div
                      key={node}
                      className="absolute h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${left}%`, top: `${top}%` }}
                    >
                      {/* Inner chip is counter-rotated by GSAP → label stays upright */}
                      <div
                        className="eco-chip flex h-full w-full flex-col items-center justify-center gap-1 rounded-2xl border border-line bg-white p-2 text-center text-[11px] font-semibold leading-tight text-ink shadow-card orbit-pulse transition hover:border-red"
                        style={{ ["--orbit-i" as string]: i }}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-red" />
                        {node}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Center brand node */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <span className="spin-slow absolute inset-[-14px] rounded-full border border-dashed border-red/40" />
                <span className="spin-slow-rev absolute inset-[-26px] rounded-full border border-dashed border-red/20" />
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-red to-[#b3151c] text-center font-display text-sm font-bold text-white ring-4 ring-white shadow-[0_10px_40px_-8px_rgba(233,28,36,0.6)]">
                  <span>
                    SonicFlare
                    <br />
                    AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
