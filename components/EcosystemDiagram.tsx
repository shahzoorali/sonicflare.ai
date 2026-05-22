import { ecosystemNodes } from "@/lib/content";

export default function EcosystemDiagram() {
  const center = 50;
  const radius = 38;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.2em] text-flare">
          The Ecosystem
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          One partner aligning every stakeholder.
        </h2>

        <div className="relative mx-auto mt-14 aspect-square w-full max-w-[460px]">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
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
                  stroke="#ff7a2f"
                  strokeWidth="0.4"
                  strokeOpacity="0.4"
                />
              );
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-flare text-center text-sm font-semibold text-ink shadow-[0_0_50px] shadow-flare/50">
            Sonic Flare AI
          </div>

          {ecosystemNodes.map((node, i) => {
            const angle =
              (i / ecosystemNodes.length) * 2 * Math.PI - Math.PI / 2;
            const left = center + radius * Math.cos(angle);
            const top = center + radius * Math.sin(angle);
            return (
              <div
                key={node}
                className="absolute flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-panel p-2 text-center text-xs font-medium text-white/80"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                {node}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
