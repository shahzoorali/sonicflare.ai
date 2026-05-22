type Capability = { title: string; body: string };

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  items: Capability[];
};

export default function Capabilities({ id, eyebrow, title, items }: Props) {
  return (
    <section id={id} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-flare">
          {eyebrow}
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-panel p-6 transition hover:bg-panel/60"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
