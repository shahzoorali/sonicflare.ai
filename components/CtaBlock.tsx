import Arrow from "./Arrow";

export default function CtaBlock() {
  return (
    <section className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-4xl bg-lime p-8 text-ink md:p-14">
          <p className="text-sm font-medium uppercase tracking-wider text-ink/70">
            Ready to move your project forward
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight md:text-5xl">
            Unlock the alignment, execution, and partnership your AI
            infrastructure project needs to succeed.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink/80 md:text-base">
            Whether you&apos;re launching a hyperscale data campus, planning an
            IT park, or coordinating land, power, and capital, we&apos;re here
            to align stakeholders and bring it to life.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#capabilities"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-white/90"
            >
              Explore Capabilities
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink py-2 pl-5 pr-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Talk to Us
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink">
                <Arrow />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
