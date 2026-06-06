import { team } from "@/lib/content";
import Arrow from "./Arrow";
import ScrollReveal from "./ScrollReveal";

export default function Team() {
  return (
    <section id="team" className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal variant="fade-up">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
              Founding team
            </h2>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 self-start bg-red px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-dark"
            >
              Get in touch
              <Arrow className="h-3 w-3" />
            </a>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          {team.map((member, i) => (
            <ScrollReveal
              key={member.name}
              variant="fade-up"
              delay={i * 150}
              duration={800}
            >
              <article className="card-light overflow-hidden rounded-4xl hover-lift">
                <div className="flex flex-col md:flex-row">
                  {/* Photo — compact square on mobile, tall sidebar on desktop */}
                  <div
                    className="h-56 w-full shrink-0 bg-cover bg-top sm:h-64 md:h-auto md:w-72 lg:w-80"
                    style={{
                      backgroundImage: `url(${member.photo})`,
                      minHeight: "clamp(224px, 30vw, 340px)",
                    }}
                    role="img"
                    aria-label={member.name}
                  />
                  {/* Bio */}
                  <div className="flex flex-col justify-center p-6 md:p-10">
                    <span className="self-start bg-paper px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-red">
                      {member.role}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-bold text-ink md:text-3xl">
                      {member.name}
                    </h3>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                      {member.bio.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {member.roles.map((r) => (
                        <li
                          key={r.org}
                          className="border border-line bg-paper/60 px-3 py-2 text-xs transition hover:border-red"
                        >
                          <p className="font-semibold text-ink">{r.org}</p>
                          <p className="text-[11px] text-muted">{r.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
