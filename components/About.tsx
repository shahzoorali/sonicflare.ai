import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-flare">
            About Us
          </p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            {about.title}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-white/70">{about.body}</p>
      </div>
    </section>
  );
}
