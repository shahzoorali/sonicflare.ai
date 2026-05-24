import { nav, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="flex items-center"
            aria-label={site.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt={site.name}
              className="h-10 w-auto md:h-12"
              style={{
                filter:
                  "brightness(1.55) contrast(1.1) drop-shadow(0 0 10px rgba(255,255,255,0.35))",
              }}
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-flare px-4 py-2 text-xs font-medium text-ink transition hover:bg-flare-soft md:px-5 md:text-sm"
          >
            Talk to Us
          </a>
        </div>

        <nav className="mt-3 flex flex-wrap justify-center gap-1.5 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-white/10 bg-panel px-3 py-1.5 text-xs font-medium text-white/80 transition hover:border-flare/40 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
