import { whyItems } from "@/lib/content";

export default function WhySection() {
  return (
    <section id="why" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-flare">
          Why Sonic Flare AI
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          The alignment, speed, and execution to move projects forward.
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-panel p-6 transition hover:border-flare/40"
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
