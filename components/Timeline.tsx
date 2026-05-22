import { timelineSteps } from "@/lib/content";

export default function Timeline() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-flare">
          How We Work
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          From first strategy to long-term optimization.
        </h2>

        <ol className="mt-14 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {timelineSteps.map((step, i) => (
            <li key={step} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-flare/50 bg-flare/10 text-sm font-semibold text-flare">
                  {i + 1}
                </span>
                {i < timelineSteps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gradient-to-r from-flare/50 to-transparent lg:block" />
                )}
              </div>
              <p className="mt-4 font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
