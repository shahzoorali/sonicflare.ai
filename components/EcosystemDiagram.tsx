import { ecosystemNodes } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function EcosystemDiagram() {
  const center = 50;
  const radius = 36;

  return (
    <section className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="rounded-4xl bg-white p-6 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted">
                  The Ecosystem
                </p>
                <h2 className="mt-3 text-3xl font-medium leading-tight text-ink md:text-5xl">
                  One partner aligning every stakeholder.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  SonicFlare AI sits at the center — connecting governments,
                  hyperscalers, investors, utilities, EPC providers, and local
                  partners so projects move from intent to operation.
                </p>

                <ul className="mt-6 grid grid-cols-2 gap-2">
                  {ecosystemNodes.map((node) => (
                    <li
                      key={node}
                      className="flex items-center gap-2 rounded-2xl border border-line bg-paper px-3 py-2 text-xs font-medium text-ink transition hover:border-lime hover:shadow-sm"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-lime" />
                      {node}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative mx-auto aspect-square w-full max-w-[440px]">
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full"
                >
                  {ecosystemNodes.map((_, i) => {
                    const angle =
                      (i / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);
                    return (
                      <line
                        key={i}
                        x1={center}
                        y1={center}
                        x2={x}
                        y2={y}
                        stroke="#0e0f12"
                        strokeOpacity="0.15"
                        strokeWidth="0.3"
                        strokeDasharray="0.8 1.2"
                      />
                    );
                  })}
                </svg>

                <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-center text-sm font-medium text-white">
                  <span>
                    SonicFlare
                    <br />
                    AI
                  </span>
                </div>
                <span className="absolute left-1/2 top-1/2 z-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/40 blur-2xl glow-pulse" />

                {ecosystemNodes.map((node, i) => {
                  const angle =
                    (i / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
                  const left = center + radius * Math.cos(angle);
                  const top = center + radius * Math.sin(angle);
                  return (
                    <div
                      key={node}
                      className="absolute flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line bg-white p-2 text-center text-[11px] font-medium text-ink orbit-pulse hover-lift"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        ["--orbit-i" as string]: i,
                      }}
                    >
                      {node}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
