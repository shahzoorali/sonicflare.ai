import { team } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function FounderVoice() {
  const founder = team[0];
  const quote = founder.bio[0];

  return (
    <section className="px-3 py-12 md:px-5 md:py-20">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal variant="blur-in" duration={1000}>
          <p className="text-2xl font-normal leading-snug text-ink md:text-4xl md:leading-[1.15]">
            {quote}
          </p>
        </ScrollReveal>

        <ScrollReveal variant="fade-up" delay={400}>
          <div className="mt-10 flex items-center gap-3">
            <div
              className="h-12 w-12 shrink-0 rounded-full bg-cover bg-center ring-2 ring-line"
              style={{ backgroundImage: `url(${founder.photo})` }}
              role="img"
              aria-label={founder.name}
            />
            <div>
              <p className="text-sm font-medium text-ink">{founder.name}</p>
              <p className="text-xs text-muted">{founder.role}</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
