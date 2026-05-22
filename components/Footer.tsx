import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 font-semibold">
          <span className="h-3 w-3 rounded-full bg-flare" />
          <span>{site.name}</span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-white/60">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-white/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
