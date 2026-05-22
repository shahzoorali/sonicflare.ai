import { nav, site } from "@/lib/content";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="h-3 w-3 rounded-full bg-flare shadow-[0_0_16px] shadow-flare" />
          <span>{site.name}</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-flare px-5 py-2 text-sm font-medium text-ink transition hover:bg-flare-soft"
        >
          Talk to Us
        </a>
      </div>
    </header>
  );
}
