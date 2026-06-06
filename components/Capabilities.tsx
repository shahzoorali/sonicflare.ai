"use client";

import { useState } from "react";
import Arrow from "./Arrow";
import CapabilityIcon from "./CapabilityIcon";
import ScrollReveal from "./ScrollReveal";

type Capability = { title: string; body: string };

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  items: Capability[];
};

export default function Capabilities({ id, eyebrow, title, items }: Props) {
  const [active, setActive] = useState(0);
  const activeItem = items[active];

  return (
    <section id={id} className="px-3 py-6 md:px-5 md:py-8">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="overflow-hidden rounded-4xl panel-dark">
            <div className="grid md:grid-cols-[1fr_1.1fr]">
              {/* Left: capability selector list */}
              <div className="p-7 md:p-12">
                <div className="mb-8 max-w-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                    {eyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
                    {title}
                  </h2>
                </div>

                <ul className="space-y-1">
                  {items.map((item, i) => (
                    <li key={item.title}>
                      <button
                        onClick={() => setActive(i)}
                        className={`group flex w-full items-center gap-3 px-3 py-2.5 text-left transition-all duration-300 ${
                          i === active
                            ? "bg-white/[0.06] text-white"
                            : "text-white/55 hover:bg-white/[0.03] hover:text-white/85"
                        }`}
                      >
                        <span
                          className={`flex h-2 w-2 shrink-0 rounded-full transition-all duration-300 ${
                            i === active ? "scale-125 bg-red" : "bg-white/20"
                          }`}
                        />
                        <span className="text-sm font-medium md:text-base">
                          {item.title}
                        </span>
                        <span className="ml-auto font-display text-[10px] text-white/35">
                          0{i + 1}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="arrow-link mt-8 text-sm">
                  Discuss your project
                  <Arrow className="h-3.5 w-3.5" />
                </a>
              </div>

              {/* Right: illustration + detail card */}
              <div className="relative flex flex-col justify-between border-t border-navy-line bg-[#0e131e] p-7 md:border-l md:border-t-0 md:p-12">
                <div className="absolute inset-0 grid-lines opacity-40" />

                <div
                  key={`icon-${active}`}
                  className="relative flex flex-1 items-center justify-center py-8 animate-capability-card"
                >
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red/15 blur-3xl" />
                    <CapabilityIcon
                      title={activeItem.title}
                      className="relative h-40 w-40 text-red md:h-52 md:w-52"
                    />
                  </div>
                </div>

                <div
                  key={`card-${active}`}
                  className="relative panel-dark-card rounded-2xl p-6 animate-capability-card"
                >
                  <p className="font-display text-[11px] font-semibold uppercase tracking-wider text-red">
                    {String(active + 1).padStart(2, "0")} · Capability
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white md:text-2xl">
                    {activeItem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {activeItem.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
