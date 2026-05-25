import { about } from "@/lib/content";

const microStats = [
  { label: "Stakeholders Aligned", value: "6+", sub: "ecosystem groups" },
  { label: "Scope", value: "End-to-End", sub: "strategy → post-live" },
  { label: "Posture", value: "Execution", sub: "not advisory" },
];

export default function About() {
  return (
    <section id="about" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="card md:col-span-2 p-6 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flare">
              About Us
            </p>
            <h2 className="display mt-3 text-3xl text-ink md:text-5xl">
              {about.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {about.body}
            </p>
          </div>

          <div className="card flex flex-col gap-3 p-6 md:p-8">
            {microStats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-cream p-4"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  {s.label}
                </p>
                <p className="display mt-1 text-2xl text-ink md:text-3xl">
                  {s.value}
                </p>
                <p className="text-xs text-muted">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
