import { ecosystemNodes } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function StakeholderStrip() {
  return (
    <section className="px-3 py-6 md:px-5 md:py-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-in" duration={600}>
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-6">
            <p className="text-sm text-muted">
              Aligning every stakeholder in the AI infrastructure ecosystem
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {ecosystemNodes.map((node) => (
                <span
                  key={node}
                  className="rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink/80 transition hover:border-lime hover:bg-lime/10"
                >
                  {node}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
