import { about } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-4 md:grid-cols-2">
          <ScrollReveal variant="slide-left" duration={800}>
            <div className="card-light h-full rounded-4xl p-8 md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                About
              </p>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
                {about.title}
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
                Putting the right strategy, alignment, and execution in place.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-right" duration={800} delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl panel-dark md:aspect-auto">
              <div className="absolute inset-0 grid-lines-animated opacity-40" />
              <div className="relative flex h-full flex-col justify-between p-8 text-white md:p-10">
                <span className="self-start border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80">
                  Built for Execution
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <Tag>Government</Tag>
                  <Tag>Hyperscalers</Tag>
                  <Tag>Investors</Tag>
                  <Tag>Utilities</Tag>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal variant="fade-up" delay={200}>
          <div className="card-light mt-4 rounded-4xl p-8 md:p-12">
            <p className="max-w-4xl text-lg leading-relaxed text-ink/85 md:text-xl">
              {about.body}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-white/15 bg-white/[0.06] px-3 py-2 text-xs font-medium text-white/85 transition hover:bg-white/12">
      {children}
    </span>
  );
}
