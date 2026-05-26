import { whyItems } from "@/lib/content";

export default function WhySection() {
  return (
    <section id="why" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 md:grid-cols-[1.1fr_1fr]">
          <div className="relative aspect-[5/6] overflow-hidden rounded-4xl mesh-dark-warm md:aspect-auto">
            <div className="absolute inset-0 grid-lines opacity-30" />
            <div className="relative flex h-full flex-col justify-between p-6 text-white md:p-10">
              <span className="self-start rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white/80 backdrop-blur">
                Why SonicFlare AI
              </span>
              <div>
                <h2 className="text-3xl font-medium leading-tight md:text-5xl">
                  We build trust and maintain long-lasting relationships.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
                  Six reasons partners trust us with their most complex AI
                  infrastructure and ecosystem initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-4xl bg-white p-6 md:p-10">
            <ul className="divide-y divide-line">
              {whyItems.map((item, i) => (
                <li key={item.title} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-4">
                    <span className="mt-1 text-xs font-medium text-muted">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-medium text-ink md:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
