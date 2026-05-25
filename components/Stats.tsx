import { stats } from "@/lib/content";

const accents = ["bg-flare", "bg-sky-400", "bg-emerald-400", "bg-violet-400"];

export default function Stats() {
  return (
    <section className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.title}
              className="card p-6 transition hover:shadow-pop"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`h-2.5 w-10 rounded-full ${accents[i % accents.length]}`}
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  0{i + 1}
                </span>
              </div>
              <h3 className="display mt-6 text-xl text-ink md:text-2xl">
                {stat.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
