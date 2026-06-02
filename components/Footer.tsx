import { nav, site } from "@/lib/content";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="px-3 pb-6 md:px-5">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal variant="fade-up" duration={700}>
          <div className="grid gap-3 md:grid-cols-[1fr_2fr]">
            <div className="flex flex-col justify-between rounded-4xl bg-lime p-6 text-ink md:p-10">
              <div className="flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt={site.name}
                  className="h-8 w-auto"
                  style={{ filter: "brightness(0.2) contrast(1.4)" }}
                />
              </div>
              <p className="mt-12 max-w-xs text-xl font-medium leading-tight md:text-2xl">
                We&apos;re dedicated to bringing AI infrastructure ambitions to life.
              </p>
            </div>

            <div className="rounded-4xl bg-ink p-6 text-white md:p-10">
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/55">
                    Navigate
                  </p>
                  <ul className="mt-4 space-y-2.5 text-base">
                    {nav.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="text-white/90 transition hover:text-lime"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/55">
                    Contact
                  </p>
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="mt-4 block text-base text-white hover:text-lime md:text-lg"
                  >
                    {site.contactEmail}
                  </a>
                  <p className="mt-4 text-xs text-white/55">Follow Us</p>
                  <div className="mt-2 flex gap-3 text-sm text-white/85">
                    <a href="#" className="hover:text-lime">
                      LinkedIn
                    </a>
                    <a href="#" className="hover:text-lime">
                      Twitter
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/55">
                    Positioning
                  </p>
                  <p className="mt-4 text-sm text-white/85">
                    Strategic Execution Partner for AI Infrastructure &amp;
                    Technology Ecosystems.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
                <p>
                  © {new Date().getFullYear()} {site.name}. All rights reserved.
                </p>
                <p>Made with intention.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
