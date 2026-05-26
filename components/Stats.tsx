import { stats, team } from "@/lib/content";

const barColors = ["bg-slate", "bg-sage", "bg-lavender", "bg-ink"];

export default function Stats() {
  const quoteFounder = team[1] ?? team[0];
  const quoteText =
    "Connecting projects with aligned capital and helping shape the commercial structures that move large-scale AI infrastructure initiatives from intent to execution.";

  return (
    <section className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.title}
              className={`relative ${barColors[i % barColors.length]} px-5 py-8 text-white md:px-6 md:py-10`}
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-white/65">
                0{i + 1}
              </p>
              <p className="mt-3 text-lg font-medium leading-tight md:text-xl">
                {s.title}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr_1.1fr]">
          <div className="rounded-4xl bg-white p-6 md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-muted">
              Our clients&apos; success is our top priority
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">
              What partners trust us to deliver.
            </p>
          </div>

          <div className="flex flex-col justify-between rounded-4xl bg-lime p-6 text-ink md:p-8">
            <p className="text-xs font-medium uppercase tracking-wider text-ink/70">
              Beyond Launch
            </p>
            <p className="mt-6 text-4xl font-medium leading-tight md:text-6xl">
              End-to-End
            </p>
            <p className="mt-3 text-sm text-ink/75">
              From strategy to post-live operations.
            </p>
          </div>

          <div className="rounded-4xl bg-ink p-6 text-white md:p-8">
            <p className="text-base leading-relaxed md:text-lg">
              &ldquo;{quoteText}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div
                className="h-9 w-9 shrink-0 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${quoteFounder.photo})` }}
                role="img"
                aria-label={quoteFounder.name}
              />
              <div>
                <p className="text-sm font-medium">{quoteFounder.name}</p>
                <p className="text-xs text-white/55">{quoteFounder.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
