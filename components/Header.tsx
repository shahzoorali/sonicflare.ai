import { nav, site } from "@/lib/content";
import Arrow from "./Arrow";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 md:top-5 md:px-5">
      <div className="mx-auto max-w-6xl rounded-full border border-line bg-white/95 px-3 py-2 backdrop-blur md:px-4 md:py-2.5">
        <div className="flex items-center justify-between gap-2">
          <a
            href="#top"
            className="flex shrink-0 items-center pl-2"
            aria-label={site.name}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt={site.name} className="h-6 w-auto md:h-7" />
          </a>

          <nav className="hidden items-center gap-8 text-sm text-ink/75 md:flex">
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
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink transition hover:border-ink/40 md:text-sm"
          >
            Talk to Us
            <Arrow className="h-3 w-3" />
          </a>
        </div>

        <nav className="mt-2 flex flex-wrap justify-center gap-1 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full bg-paper px-3 py-1 text-[11px] font-medium text-ink/75 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
