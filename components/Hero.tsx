import { hero } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-40 md:pt-48"
    >
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-flare/20 blur-[140px]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-block rounded-full border border-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
          Strategic Execution Partner
        </p>
        <h1 className="animate-fade-up text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Building the Infrastructure Powering the{" "}
          <span className="flare-text">AI Economy</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
          {hero.subheadline}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={hero.primaryCta.href}
            className="w-full rounded-full bg-flare px-7 py-3 font-medium text-ink transition hover:bg-flare-soft sm:w-auto"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="w-full rounded-full border border-white/15 px-7 py-3 font-medium text-white transition hover:border-white/40 sm:w-auto"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
