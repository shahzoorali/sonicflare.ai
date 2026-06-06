import Arrow from "./Arrow";
import ScrollReveal from "./ScrollReveal";

export default function CtaBlock() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal variant="scale-up" duration={800}>
          <div className="relative overflow-hidden rounded-4xl panel-dark p-8 text-white md:p-16">
            <div className="absolute inset-0 grid-lines-animated opacity-25" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red">
                Ready to move your project forward
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
                Unlock the alignment, execution, and partnership your AI
                infrastructure project needs to succeed.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                Whether you&apos;re launching a hyperscale data campus, planning an
                IT park, or coordinating land, power, and capital, we&apos;re here
                to align stakeholders and bring it to life.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-red px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark"
                >
                  Talk to Us
                  <Arrow className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 border border-white/35 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
