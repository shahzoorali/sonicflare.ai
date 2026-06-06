import { stats, team } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Stats() {
  const quoteFounder = team[1] ?? team[0];
  const quoteText =
    "Connecting projects with aligned capital and helping shape the commercial structures that move large-scale AI infrastructure initiatives from intent to execution.";

  return (
    <section className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px] space-y-4">
        <ScrollReveal variant="fade-up" stagger={120}>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.title}
                className="relative bg-white px-5 py-8 transition-colors hover:bg-paper md:px-6 md:py-10"
              >
                <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-red">
                  0{i + 1}
                </p>
                <p className="mt-3 font-display text-lg font-bold leading-tight text-ink md:text-xl">
                  {s.title}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={200} stagger={150}>
          <div className="grid gap-4 md:grid-cols-[1fr_1.1fr_1.1fr]">
            <div className="card-light rounded-4xl p-6 md:p-8 hover-lift">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                Our clients&apos; success is our top priority
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                What partners trust us to deliver.
              </p>
            </div>

            <div className="flex flex-col justify-between rounded-4xl bg-red p-6 text-white md:p-8 hover-lift">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
                Beyond Launch
              </p>
              <p className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">
                End-to-End
              </p>
              <p className="mt-3 text-sm text-white/80">
                From strategy to post-live operations.
              </p>
            </div>

            <div className="rounded-4xl panel-dark p-6 text-white md:p-8 hover-lift">
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
                  <p className="text-sm font-semibold">{quoteFounder.name}</p>
                  <p className="text-xs text-white/55">{quoteFounder.role}</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
