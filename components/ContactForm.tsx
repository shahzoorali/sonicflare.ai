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
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-start">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-flare">
            Contact
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Let&apos;s bring your project to life.
          </h2>
          <p className="mt-5 max-w-md text-white/65">
            Tell us about your AI infrastructure or technology ecosystem
            ambitions. We&apos;ll help align the stakeholders to move it forward.
          </p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="mt-6 inline-block text-flare transition hover:text-flare-soft"
          >
            {site.contactEmail}
          </a>
        </div>

        {submitted ? (
          <div className="flex flex-col items-start justify-center rounded-2xl border border-flare/30 bg-panel p-8">
            <h3 className="text-xl font-semibold">Thank you.</h3>
            <p className="mt-2 text-white/65">
              Your message has been received. We&apos;ll be in touch shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-white/10 bg-panel p-8"
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
              <span className="text-sm text-white/70">Message</span>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={4}
                required
                className="mt-1.5 w-full rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm outline-none transition focus:border-flare"
              />
            </label>
            {error && <p className="text-sm text-flare">{error}</p>}
            <button
              type="submit"
              className="w-full rounded-full bg-flare px-7 py-3 font-medium text-ink transition hover:bg-flare-soft"
            >
              Send Message
            </button>
          </form>
        )}
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
      <span className="text-sm text-white/70">{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-white/10 bg-ink px-3 py-2 text-sm outline-none transition focus:border-flare"
      />
    </label>
  );
}
