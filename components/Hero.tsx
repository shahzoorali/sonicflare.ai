import { hero } from "@/lib/content";
import Arrow from "./Arrow";

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-28 md:px-5 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-4xl mesh-dark p-6 text-white md:p-12 lg:min-h-[640px]">
          <div className="absolute inset-0 grid-lines opacity-50" />

          <div className="relative flex h-full flex-col">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
                {hero.headline.replace("AI Economy", "")}
                <span className="text-lime">AI Economy</span>
              </h1>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/65 md:text-base">
                {hero.subheadline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-white/85"
                >
                  {hero.secondaryCta.label}
                </a>
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-5 pr-2 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white hover:text-ink"
                >
                  {hero.primaryCta.label}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-ink">
                    <Arrow />
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:absolute md:bottom-8 md:right-8 md:mt-0 md:max-w-md">
              <Stat label="Stakeholders" value="06" sub="ecosystem groups" />
              <Stat label="Scope" value="E2E" sub="strategy → live" />
              <Stat label="Posture" value="Exec" sub="not advisory" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="bg-ink/40 p-4 backdrop-blur">
      <p className="text-[10px] uppercase tracking-wider text-white/55">
        {label}
      </p>
      <p className="mt-2 text-2xl font-medium text-white">{value}</p>
      <p className="text-[11px] text-white/55">{sub}</p>
    </div>
  );
}
