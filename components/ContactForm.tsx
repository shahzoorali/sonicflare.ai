"use client";

import { useState } from "react";
import { site } from "@/lib/content";
import Arrow from "./Arrow";
import ScrollReveal from "./ScrollReveal";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function update(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    // TODO: wire up a form handler (e.g. Formspree, Resend, or an API route).
    console.log("Contact form submission:", form);
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-5 py-12 md:px-10 md:py-16">
      <div className="mx-auto max-w-[1400px]">
        <ScrollReveal variant="fade-up" duration={800}>
          <div className="card-light rounded-4xl p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red">
                  Contact
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
                  Let&apos;s bring your project to life.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
                  Tell us about your AI infrastructure or technology ecosystem
                  ambitions. We&apos;ll help align the stakeholders to move it
                  forward.
                </p>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="mt-6 inline-flex items-center gap-2 border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition hover:border-red"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red" />
                  {site.contactEmail}
                </a>
              </div>

              {submitted ? (
                <div className="flex flex-col items-start justify-center rounded-3xl border border-line bg-paper p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red text-white">
                    ✓
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink">
                    Thank you.
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Your message has been received. We&apos;ll be in touch shortly.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 rounded-3xl border border-line bg-paper p-6 md:p-8"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="Name"
                      value={form.name}
                      onChange={update("name")}
                      required
                    />
                    <Field
                      label="Company"
                      value={form.company}
                      onChange={update("company")}
                    />
                  </div>
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                  <label className="block">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      Message
                    </span>
                    <textarea
                      value={form.message}
                      onChange={update("message")}
                      rows={4}
                      required
                      className="mt-1.5 w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red"
                    />
                  </label>
                  {error && <p className="text-sm text-red">{error}</p>}
                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2 bg-red py-3.5 text-sm font-semibold text-white transition hover:bg-red-dark"
                  >
                    Send Message
                    <span className="transition-transform group-hover:translate-x-0.5">
                      <Arrow />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-red"
      />
    </label>
  );
}
