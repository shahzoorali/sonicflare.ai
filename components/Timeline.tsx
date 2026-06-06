import { timelineSteps } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Timeline() {
  return (
    <section className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="card-light rounded-4xl p-8 md:p-14">
          <ScrollReveal variant="fade-up">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                How We Work
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
                From first strategy to long-term optimization.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={200} stagger={100}>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
              {timelineSteps.map((step, i) => (
                <li
                  key={step}
                  className="border border-line bg-paper/60 p-5 hover-lift"
                >
                  <span className="font-display text-3xl font-extrabold text-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-6 text-base font-semibold text-ink">{step}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
