import { team } from "@/lib/content";

export default function Team() {
  return (
    <section id="team" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-flare">
          Founding Team
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          The people behind Sonic Flare AI.
        </h2>

        <div className="mt-14 space-y-16">
          {team.map((member) => (
            <article
              key={member.name}
              className="grid gap-10 rounded-3xl border border-white/10 bg-panel p-8 md:grid-cols-[260px_1fr] md:items-start md:p-10"
            >
              <div className="mx-auto md:mx-0">
                <div
                  role="img"
                  aria-label={member.name}
                  className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-flare/30 to-ink bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.photo})` }}
                />
                <div className="mt-5 text-center md:text-left">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-flare">{member.role}</p>
                </div>
              </div>

              <div>
                <div className="space-y-4 text-white/70">
                  {member.bio.map((p, i) => (
                    <p key={i} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {member.roles.map((r) => (
                    <li
                      key={r.org}
                      className="rounded-xl border border-white/10 bg-ink/60 px-4 py-3"
                    >
                      <p className="text-sm font-semibold">{r.org}</p>
                      <p className="text-xs text-white/55">{r.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
