import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="px-3 pb-6 md:px-5">
      <div className="mx-auto max-w-6xl">
        <div className="card p-6 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr] md:items-start">
            <div>
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt={site.name}
                  className="h-9 w-auto"
                  style={{
                    filter:
                      "brightness(0.2) contrast(1.4)",
                  }}
                />
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                Building the infrastructure powering the AI economy — from
                strategy and stakeholder alignment to execution and long-term
                operational success.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Navigate
              </p>
              <ul className="mt-4 space-y-2 text-sm font-medium text-ink/80">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-flare">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Contact
              </p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-4 inline-block text-sm font-semibold text-ink hover:text-flare"
              >
                {site.contactEmail}
              </a>
            </div>
          </div>

          <div className="divider my-8" />

          <div className="flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <p>Strategic Execution Partner for AI Infrastructure</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
