import { nav, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="h-3 w-3 rounded-full bg-flare shadow-[0_0_16px] shadow-flare" />
            <span>{site.name}</span>
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
