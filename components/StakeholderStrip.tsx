import { ecosystemNodes } from "@/lib/content";

export default function StakeholderStrip() {
  const row = [...ecosystemNodes, ...ecosystemNodes];

  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Aligning every stakeholder in the AI infrastructure ecosystem
        </p>
      </div>
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12 px-6">
          {row.map((node, i) => (
            <span
              key={`${node}-${i}`}
              className="whitespace-nowrap font-display text-xl font-bold text-ink/30 transition-colors hover:text-ink/60 md:text-2xl"
            >
              {node}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
