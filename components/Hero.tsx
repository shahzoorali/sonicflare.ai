import { hero, ecosystemNodes } from "@/lib/content";

const dotColors = [
  "bg-flare",
  "bg-amber-300",
  "bg-sky-400",
  "bg-emerald-400",
  "bg-violet-400",
  "bg-rose-400",
];

export default function Hero() {
  return (
    <section id="top" className="px-3 pt-28 md:px-5 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="card overflow-hidden p-6 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                <span className="text-flare">✦</span>
                Strategic Execution Partner
              </div>

              <h1 className="display mt-6 text-5xl text-ink md:text-7xl">
                Building the{" "}
                <span className="inline-flex h-[0.85em] -translate-y-[0.06em] items-center gap-1 rounded-full bg-gradient-to-br from-flare to-flare-deep px-3 align-middle text-[0.55em] font-extrabold uppercase tracking-wider text-white">
                  AI
                </span>{" "}
                Economy{" "}
                <span className="inline-flex -translate-y-[0.06em] items-center align-middle">
                  {ecosystemNodes.slice(0, 3).map((_, i) => (
                    <span
                      key={i}
                      className={`-ml-3 h-[0.7em] w-[0.7em] rounded-full border-[3px] border-white first:ml-0 ${dotColors[i]}`}
                    />
                  ))}
                </span>{" "}
                Infrastructure
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {hero.subheadline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-6 pr-2 text-sm font-semibold text-white transition hover:bg-flare"
                >
                  {hero.primaryCta.label}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
                    <Arrow />
                  </span>
                </a>
                <a
                  href={hero.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/40"
                >
                  {hero.secondaryCta.label}
                </a>
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative aspect-[5/6] overflow-hidden rounded-4xl bg-gradient-to-br from-ink to-[#1c1f2e] p-6 text-white shadow-pop">
        <div className="absolute inset-0 opacity-60">
          <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-flare/40 blur-3xl" />
          <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-violet-500/30 blur-3xl" />
        </div>

        <div className="relative flex h-full flex-col">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            The Ecosystem
          </p>
          <p className="mt-2 text-2xl font-semibold leading-tight">
            One partner. <br />
            Every stakeholder.
          </p>

          <div className="mt-auto grid grid-cols-2 gap-2">
            {ecosystemNodes.map((node, i) => (
              <div
                key={node}
                className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-2 text-xs font-medium backdrop-blur"
              >
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${dotColors[i % dotColors.length]}`}
                />
                {node}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-3xl bg-white p-4 shadow-pop sm:block">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              Time to Deploy
            </p>
            <p className="mt-1 text-3xl font-bold text-ink">2.3×</p>
            <p className="text-xs text-muted">Faster execution</p>
          </div>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-flare text-white">
            <Arrow />
          </span>
        </div>
        <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-ink/10">
          <span className="h-full w-3/4 rounded-full bg-gradient-to-r from-flare to-flare-deep" />
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}
