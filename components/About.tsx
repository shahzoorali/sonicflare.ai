import { about } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-2">
          <ScrollReveal variant="slide-left" duration={800}>
            <div className="rounded-4xl bg-white p-6 md:p-10">
              <h2 className="text-3xl font-medium leading-tight text-ink md:text-5xl">
                {about.title}
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted">
                Putting the right strategy, alignment, and execution in place.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slide-right" duration={800} delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-4xl mesh-dark-cool md:aspect-auto">
              <div className="absolute inset-0 grid-lines-animated opacity-40" />
              <div className="relative flex h-full flex-col justify-between p-6 text-white md:p-8">
                <span className="self-start rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
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
          <div className="mt-4 rounded-4xl bg-white p-6 md:p-10">
            <p className="max-w-4xl text-base leading-relaxed text-ink/85 md:text-lg">
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
    <span className="rounded-2xl bg-white/8 px-3 py-2 text-xs font-medium text-white/80 backdrop-blur transition hover:bg-white/15">
      {children}
    </span>
  );
}
