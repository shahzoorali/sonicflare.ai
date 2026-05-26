import { timelineSteps } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-4xl bg-white p-6 md:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-tight text-ink md:text-5xl">
              From first strategy to long-term optimization.
            </h2>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {timelineSteps.map((step, i) => (
              <li
                key={step}
                className="rounded-3xl border border-line bg-paper p-5"
              >
                <span className="text-3xl font-medium text-lime-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-6 text-base font-medium text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
