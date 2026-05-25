type Capability = { title: string; body: string };

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  items: Capability[];
};

export default function Capabilities({ id, eyebrow, title, items }: Props) {
  return (
    <section id={id} className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="card p-6 md:p-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flare">
                {eyebrow}
              </p>
              <h2 className="display mt-3 max-w-2xl text-3xl text-ink md:text-5xl">
                {title}
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink/70">
              {items.length} capabilities
            </span>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-ink/8 bg-cream p-5 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-ink shadow-card">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-flare/60 group-hover:bg-flare" />
                </div>
                <h3 className="display mt-5 text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
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
