import { team } from "@/lib/content";
import Arrow from "./Arrow";
import ScrollReveal from "./ScrollReveal";

export default function Team() {
  return (
    <section id="team" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-medium leading-tight text-ink md:text-5xl">
              Founding team
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Get in touch
              <Arrow className="h-3 w-3" />
            </a>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 md:grid-cols-2">
          {team.map((member, i) => (
            <ScrollReveal
              key={member.name}
              variant={i === 0 ? "slide-left" : "slide-right"}
              delay={i * 200}
              duration={800}
            >
              <article className="overflow-hidden rounded-4xl bg-white hover-lift">
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.photo})` }}
                  role="img"
                  aria-label={member.name}
                />
                <div className="p-6 md:p-8">
                  <span className="rounded-full bg-paper px-3 py-1 text-[11px] font-medium text-muted">
                    {member.role}
                  </span>
                  <h3 className="mt-4 text-2xl font-medium text-ink md:text-3xl">
                    {member.name}
                  </h3>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                    {member.bio.slice(0, 2).map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {member.roles.map((r) => (
                      <li
                        key={r.org}
                        className="rounded-2xl border border-line bg-paper px-3 py-2 text-xs transition hover:border-lime"
                      >
                        <p className="font-medium text-ink">{r.org}</p>
                        <p className="text-[11px] text-muted">{r.detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
