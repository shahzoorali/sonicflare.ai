import { whyItems } from "@/lib/content";

export default function WhySection() {
  return (
    <section id="why" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="card p-6 md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flare">
                Why Sonic Flare AI
              </p>
              <h2 className="display mt-3 max-w-2xl text-3xl text-ink md:text-5xl">
                The alignment, speed, and execution to move projects forward.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Six reasons partners trust us with their most complex AI
              infrastructure and ecosystem initiatives.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-ink/8 bg-cream p-6 transition hover:bg-white hover:shadow-card"
              >
                <span className="text-[11px] font-semibold text-flare">
                  0{i + 1}
                </span>
                <h3 className="display mt-2 text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
