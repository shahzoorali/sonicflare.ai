import { nav, site } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="px-5 pb-6 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="grid gap-3 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col justify-between rounded-4xl bg-red p-8 text-white md:p-10">
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt={site.name}
                  className="h-16 w-auto brightness-0 invert"
                />
              </div>
              <p className="mt-12 max-w-xs font-display text-xl font-bold leading-tight md:text-2xl">
                We&apos;re dedicated to bringing AI infrastructure ambitions to life.
              </p>
            </div>

            <div className="rounded-4xl panel-dark p-8 text-white md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    Navigate
                  </p>
                  <ul className="mt-4 space-y-2.5 text-base">
                    {nav.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-white/85 transition hover:text-red"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    Contact
                  </p>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="mt-4 block break-words text-base text-white transition hover:text-red"
                  >
                    {site.contactEmail}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/45">
                    Positioning
                  </p>
                  <p className="mt-4 text-sm text-white/85">
                    Strategic Execution Partner for AI Infrastructure &amp;
                    Technology Ecosystems.
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-navy-line pt-6">
                <p className="text-xs text-white/45">
                  © {new Date().getFullYear()} {site.name}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
