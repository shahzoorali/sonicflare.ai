import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl space-y-3">
        <div className="card p-6 md:p-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flare">
                Founding Team
              </p>
              <h2 className="display mt-3 max-w-2xl text-3xl text-ink md:text-5xl">
                The people behind Sonic Flare AI.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted">
              Operators and investors with decades of experience building
              ventures across energy, manufacturing, finance, and technology.
            </p>
          </div>
        </div>

        {team.map((member) => (
          <article key={member.name} className="card overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[340px_1fr]">
              <div className="relative bg-cream p-6 md:p-8">
                <div
                  role="img"
                  aria-label={member.name}
                  className="aspect-square w-full overflow-hidden rounded-3xl bg-gradient-to-br from-peach-100 to-peach-300 bg-cover bg-center shadow-card"
                  style={{ backgroundImage: `url(${member.photo})` }}
                />
                <div className="mt-5">
                  <h3 className="display text-2xl text-ink">{member.name}</h3>
                  <p className="text-sm font-semibold text-flare">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="space-y-4 text-base leading-relaxed text-muted">
                  {member.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <ul className="mt-7 grid gap-2 sm:grid-cols-3">
                  {member.roles.map((r) => (
                    <li
                      key={r.org}
                      className="rounded-2xl border border-ink/8 bg-cream px-4 py-3"
                    >
                      <p className="text-sm font-bold text-ink">{r.org}</p>
                      <p className="text-xs text-muted">{r.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
