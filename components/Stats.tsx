import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-panel to-ink p-6"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-flare" />
              <h3 className="text-lg font-semibold">{stat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
