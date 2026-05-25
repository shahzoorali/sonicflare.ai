import { ecosystemNodes } from "@/lib/content";

const dotColors = [
  "from-flare to-flare-deep",
  "from-amber-300 to-amber-500",
  "from-sky-300 to-sky-500",
  "from-emerald-300 to-emerald-500",
  "from-violet-300 to-violet-500",
  "from-rose-300 to-rose-500",
];

export default function EcosystemDiagram() {
  const center = 50;
  const radius = 36;

  return (
    <section className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="card overflow-hidden p-6 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flare">
                The Ecosystem
              </p>
              <h2 className="display mt-3 text-3xl text-ink md:text-5xl">
                One partner aligning every stakeholder.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                SonicFlare AI sits at the center — connecting governments,
                hyperscalers, investors, utilities, EPC providers, and local
                partners so projects move from intent to operation.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2">
                {ecosystemNodes.map((node, i) => (
                  <div
                    key={node}
                    className="flex items-center gap-2 rounded-2xl bg-cream px-3 py-2 text-xs font-semibold text-ink"
                  >
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${dotColors[i]}`}
                    />
                    {node}
                  </div>
                ))}
              </div>
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
                      stroke="#0a0c14"
                      strokeOpacity="0.12"
                      strokeWidth="0.4"
                      strokeDasharray="1 1.5"
                    />
                  );
                })}
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-flare to-flare-deep text-center text-sm font-semibold text-white shadow-pop">
                Sonic
                <br />
                Flare AI
              </div>

              {ecosystemNodes.map((node, i) => {
                const angle =
                  (i / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
                const left = center + radius * Math.cos(angle);
                const top = center + radius * Math.sin(angle);
                return (
                  <div
                    key={node}
                    className="absolute flex h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-ink/10 bg-white p-2 text-center text-[11px] font-semibold text-ink shadow-card"
                    style={{ left: `${left}%`, top: `${top}%` }}
                  >
                    {node}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
