import { timelineSteps } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="card overflow-hidden p-6 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flare">
                How We Work
              </p>
              <h2 className="display mt-3 max-w-2xl text-3xl text-ink md:text-5xl">
                From first strategy to long-term optimization.
              </h2>
            </div>
          </div>

          <div className="mt-10">
            <div className="relative grid gap-3 md:grid-cols-6">
              {timelineSteps.map((step, i) => (
                <div
                  key={step}
                  className="rounded-3xl border border-ink/8 bg-cream p-5 transition hover:bg-white hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="display text-3xl text-flare">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < timelineSteps.length - 1 && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className="text-ink/30"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                  <p className="display mt-6 text-base text-ink">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
