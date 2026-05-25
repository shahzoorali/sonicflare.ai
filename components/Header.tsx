import { nav, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-5 md:px-5">
      <div className="mx-auto max-w-6xl rounded-full bg-white/95 px-3 py-2 shadow-card backdrop-blur md:px-4 md:py-3">
        <div className="flex items-center justify-between gap-2">
          <a
            href="#top"
            className="flex shrink-0 items-center pl-2"
            aria-label={site.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={site.name} className="h-7 w-auto md:h-9" />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-ink/70 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group flex items-center gap-1.5 rounded-full border border-ink/15 bg-white py-1.5 pl-4 pr-1.5 text-xs font-semibold text-ink transition hover:border-ink/40 md:text-sm"
          >
            <span>Talk to Us</span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-flare md:h-8 md:w-8">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </span>
          </a>
        </div>

        <nav className="mt-2 flex flex-wrap justify-center gap-1 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full bg-ink/5 px-3 py-1 text-[11px] font-semibold text-ink/75 transition hover:bg-ink/10 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
