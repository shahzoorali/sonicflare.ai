"use client";

import { useState } from "react";
import Arrow from "./Arrow";

type Capability = { title: string; body: string };

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  items: Capability[];
  meshClass?: string;
};

export default function Capabilities({
  id,
  eyebrow,
  title,
  items,
  meshClass = "mesh-dark",
}: Props) {
  const [active, setActive] = useState(0);
  const activeItem = items[active];

  return (
    <section id={id} className="px-3 py-6 md:px-5 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-4xl">
          <div className={`grid gap-px md:grid-cols-[1fr_1.1fr]`}>
            <div className="bg-ink p-6 text-white md:p-10">
              <div className="mb-8 max-w-md">
                <p className="text-xs font-medium uppercase tracking-wider text-white/55">
                  {eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-medium leading-tight md:text-4xl">
                  {title}
                </h2>
              </div>

              <ul className="space-y-1">
                {items.map((item, i) => (
                  <li key={item.title}>
                    <button
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition ${
                        i === active
                          ? "bg-white/8 text-white"
                          : "text-white/60 hover:bg-white/5 hover:text-white/85"
                      }`}
                    >
                      <span
                        className={`flex h-2 w-2 shrink-0 rounded-full transition ${
                          i === active ? "bg-lime" : "bg-white/20"
                        }`}
                      />
                      <span className="text-sm font-medium md:text-base">
                        {item.title}
                      </span>
                      <span className="ml-auto text-[10px] text-white/35">
                        0{i + 1}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime py-2 pl-5 pr-2 text-sm font-medium text-ink transition hover:bg-lime-dark"
              >
                Discuss your project
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white">
                  <Arrow />
                </span>
              </a>
            </div>

            <div
              className={`relative ${meshClass} flex flex-col justify-end p-6 text-white md:p-10`}
            >
              <div className="absolute inset-0 grid-lines opacity-30" />
              <div className="relative max-w-md rounded-2xl bg-white p-6 text-ink shadow-card">
                <p className="text-[11px] font-medium uppercase tracking-wider text-muted">
                  {String(active + 1).padStart(2, "0")} · {activeItem.title}
                </p>
                <h3 className="mt-2 text-xl font-medium md:text-2xl">
                  {activeItem.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {activeItem.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
