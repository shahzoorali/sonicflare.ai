// Line-illustration set for the Capabilities panel. Each capability title maps
// to an abstract icon that visually echoes its meaning. Keywords are matched
// loosely so both the AI and IT-Park capability lists are covered.

type Props = { title: string; className?: string };

const S = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function pick(title: string): keyof typeof ICONS {
  const t = title.toLowerCase();
  if (t.includes("strategy") && t.includes("ai")) return "strategy";
  if (t.includes("hyperscaler") || t.includes("enablement")) return "hyperscaler";
  if (t.includes("government") || t.includes("ppp")) return "government";
  if (t.includes("land") || t.includes("power") || t.includes("infrastructure"))
    return "power";
  if (t.includes("investor") || t.includes("engagement")) return "investor";
  if (t.includes("commercial")) return "commercial";
  if (t.includes("execution")) return "execution";
  if (t.includes("post") || t.includes("operations")) return "operations";
  if (t.includes("anchor") || t.includes("tenant")) return "anchor";
  if (t.includes("local") || t.includes("partner")) return "partners";
  if (t.includes("launch") || t.includes("growth")) return "launch";
  if (t.includes("long-term") || t.includes("partnership")) return "partnership";
  if (t.includes("park") || t.includes("ecosystem")) return "park";
  return "strategy";
}

const ICONS = {
  strategy: (
    <>
      <circle cx="24" cy="24" r="16" {...S} />
      <path d="M24 8v8M24 32v8M8 24h8M32 24h8" {...S} />
      <circle cx="24" cy="24" r="4" {...S} />
    </>
  ),
  hyperscaler: (
    <>
      <rect x="8" y="10" width="32" height="9" rx="1.5" {...S} />
      <rect x="8" y="22" width="32" height="9" rx="1.5" {...S} />
      <rect x="8" y="34" width="20" height="4" rx="1" {...S} />
      <circle cx="14" cy="14.5" r="1.2" fill="currentColor" />
      <circle cx="14" cy="26.5" r="1.2" fill="currentColor" />
    </>
  ),
  government: (
    <>
      <path d="M24 8l16 7H8l16-7z" {...S} />
      <path d="M12 18v14M20 18v14M28 18v14M36 18v14" {...S} />
      <path d="M8 36h32" {...S} />
    </>
  ),
  power: (
    <>
      <path d="M26 6L12 26h10l-2 16 16-22H26l2-14z" {...S} />
    </>
  ),
  investor: (
    <>
      <path d="M8 34l9-10 7 6 11-14" {...S} />
      <path d="M34 16h6v6" {...S} />
      <path d="M8 40h32" {...S} />
    </>
  ),
  commercial: (
    <>
      <circle cx="24" cy="24" r="15" {...S} />
      <path d="M24 15v18M28 19h-6.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H20" {...S} />
    </>
  ),
  execution: (
    <>
      <path d="M10 24h20" {...S} />
      <path d="M24 16l8 8-8 8" {...S} />
      <circle cx="36" cy="24" r="3" {...S} />
    </>
  ),
  operations: (
    <>
      <circle cx="24" cy="24" r="6" {...S} />
      <path
        d="M24 6v6M24 36v6M6 24h6M36 24h6M11 11l4 4M33 33l4 4M37 11l-4 4M15 33l-4 4"
        {...S}
      />
    </>
  ),
  anchor: (
    <>
      <circle cx="24" cy="12" r="4" {...S} />
      <path d="M24 16v22M14 28a10 10 0 0020 0M10 28h4M34 28h4" {...S} />
    </>
  ),
  partners: (
    <>
      <circle cx="16" cy="18" r="5" {...S} />
      <circle cx="32" cy="18" r="5" {...S} />
      <path d="M8 38a8 8 0 0116 0M24 38a8 8 0 0116 0" {...S} />
    </>
  ),
  launch: (
    <>
      <path d="M24 6c8 4 10 12 10 18l-10 6-10-6c0-6 2-14 10-18z" {...S} />
      <circle cx="24" cy="18" r="3" {...S} />
      <path d="M16 32l-4 8 8-4M32 32l4 8-8-4" {...S} />
    </>
  ),
  partnership: (
    <>
      <path d="M14 24l6-6 6 4 8-8" {...S} />
      <circle cx="14" cy="24" r="3" {...S} />
      <circle cx="34" cy="14" r="3" {...S} />
      <path d="M8 38h32" {...S} />
    </>
  ),
  park: (
    <>
      <rect x="10" y="20" width="12" height="18" rx="1" {...S} />
      <rect x="26" y="12" width="12" height="26" rx="1" {...S} />
      <path d="M14 26h4M14 31h4M30 18h4M30 24h4M30 30h4" {...S} />
    </>
  ),
};

export default function CapabilityIcon({ title, className = "" }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {ICONS[pick(title)]}
    </svg>
  );
}
