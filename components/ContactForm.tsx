"use client";

import { useState } from "react";
import { site } from "@/lib/content";

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
    <section id="contact" className="px-3 py-12 md:px-5 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="card overflow-hidden p-6 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flare">
                Contact
              </p>
              <h2 className="display mt-3 text-3xl text-ink md:text-5xl">
                Let&apos;s bring your project to life.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Tell us about your AI infrastructure or technology ecosystem
                ambitions. We&apos;ll help align the stakeholders to move it
                forward.
              </p>
              <a
                href={`mailto:${site.contactEmail}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink/5 px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-ink/10"
              >
                <span className="h-2 w-2 rounded-full bg-flare" />
                {site.contactEmail}
              </a>
            </div>

            {submitted ? (
              <div className="flex flex-col items-start justify-center rounded-3xl border border-flare/30 bg-cream p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-flare text-white">
                  ✓
                </span>
                <h3 className="display mt-4 text-2xl text-ink">Thank you.</h3>
                <p className="mt-2 text-muted">
                  Your message has been received. We&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-3xl bg-cream p-6 md:p-8"
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
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Message
                  </span>
                  <textarea
                    value={form.message}
                    onChange={update("message")}
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-flare"
                  />
                </label>
                {error && <p className="text-sm text-flare">{error}</p>}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-3 pl-6 pr-2 text-sm font-semibold text-white transition hover:bg-flare"
                >
                  Send Message
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
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
                </button>
              </form>
            )}
          </div>
        </div>
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
      <span className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-flare"
      />
    </label>
  );
}
