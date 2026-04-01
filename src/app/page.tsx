import ContactForm from "@/components/contact-form";
import {
  certifications,
  education,
  experience,
  languages,
  metrics,
  profile,
  publication,
  skillGroups
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <main className="relative min-h-screen pb-20 pt-8">
      {/* Ambient lighting effects */}
      <div className="pointer-events-none fixed left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-electric-cyan/10 blur-[120px]" />
      <div className="pointer-events-none fixed right-0 top-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-electric-amber/8 blur-[100px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Terminal Header */}
        <header className="terminal-card mb-8 overflow-hidden p-6 sm:p-8 lg:p-10 animate-fade-up">
          <div className="mb-8 flex items-center gap-2 border-b border-tech-border pb-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-electric-amber/80" />
              <div className="h-3 w-3 rounded-full bg-electric-green/80" />
            </div>
            <div className="ml-4 font-mono text-xs text-electric-cyan/60">
              ~/.portfolio/senior-engineer
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-electric-cyan/70">
                $ whoami
              </div>
              <h1 className="font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="mt-3 font-mono text-lg text-electric-cyan sm:text-xl">
                {profile.title}
              </p>
              <p className="mt-1 font-mono text-sm text-electric-amber/90">
                📍 {profile.location}
              </p>

              <div className="mt-6 border-l-2 border-electric-cyan/40 bg-tech-surface/50 p-4">
                <p className="font-mono text-sm leading-relaxed text-gray-300 sm:text-base">
                  {profile.summary}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group rounded-md border border-electric-cyan/40 bg-electric-cyan/10 px-5 py-2.5 font-mono text-sm font-semibold text-electric-cyan transition-all hover:bg-electric-cyan/20 hover:shadow-glow"
                >
                  <span className="mr-2">›</span>
                  Contact
                </a>
                <a
                  href="/portfolio"
                  className="rounded-md border border-tech-border bg-tech-surface/50 px-5 py-2.5 font-mono text-sm font-semibold text-gray-300 transition-all hover:border-electric-cyan/40 hover:bg-tech-surface hover:text-electric-cyan"
                >
                  Portfolio →
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="rounded-lg border border-tech-border bg-tech-darker/80 p-6">
                <div className="mb-4 font-mono text-xs text-electric-green/70">
                  {"// System Status"}
                </div>
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-electric-green">Available for Projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-white">6+ Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Specialization:</span>
                    <span className="text-electric-cyan">Full-Stack Development</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Stack:</span>
                    <span className="text-white">React • .NET • SQL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Education:</span>
                    <span className="text-white">MS Computer Science</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Metrics Grid */}
        <section className="mb-8">
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-electric-cyan/70">
            {"// Performance Metrics"}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((metric, index) => (
              <article
                key={metric.label}
                className="metric-card hover-lift rounded-lg p-5 animate-fade-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className="metric-number font-display text-4xl font-bold text-white sm:text-5xl">
                    {metric.value}
                  </div>
                  <h3 className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-electric-cyan/80">
                    {metric.label}
                  </h3>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-gray-400">
                    {metric.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="terminal-card mb-8 p-6 sm:p-8 animate-fade-up delay-400">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-tech-border pb-4">
            <div>
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-electric-cyan/70">
                {"// Career History"}
              </div>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Experience
              </h2>
            </div>
            <p className="font-mono text-xs text-gray-400">
              Building systems that scale
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((job, index) => (
              <article
                key={`${job.company}-${job.role}`}
                className="code-card group p-6 transition-all hover:border-electric-cyan/60"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-electric-cyan">
                      {job.company}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-gray-400">
                      {job.location}
                    </p>
                  </div>
                  <div className="rounded border border-electric-amber/30 bg-electric-amber/5 px-3 py-1.5">
                    <p className="font-mono text-xs font-medium text-electric-amber">
                      {job.period}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {job.highlights.map((item) => (
                    <div key={item} className="flex gap-3">
                      <div className="mt-2 flex-none">
                        <div className="flex h-1.5 w-1.5 items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-electric-cyan" />
                        </div>
                      </div>
                      <p className="flex-1 font-mono text-sm leading-relaxed text-gray-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & Education Grid */}
        <section className="mb-8 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          {/* Skills */}
          <article className="terminal-card diagonal-accent p-6 sm:p-8 animate-fade-up delay-500">
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-electric-cyan/70">
              {"// Tech Stack"}
            </div>
            <h2 className="font-display mb-6 text-3xl font-bold text-white">
              Core Skills
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-electric-green/90">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={`${group.label}-${item}`}
                        className="rounded border border-tech-border bg-tech-surface/60 px-3 py-1.5 font-mono text-xs font-medium text-gray-300 transition-colors hover:border-electric-cyan/40 hover:bg-tech-surface hover:text-electric-cyan"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Education & More */}
          <article className="terminal-card p-6 sm:p-8 animate-fade-up delay-600">
            <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-electric-cyan/70">
              {"// Credentials"}
            </div>
            <h2 className="font-display mb-6 text-2xl font-bold text-white">
              Education
            </h2>

            <div className="space-y-4">
              {education.map((item) => (
                <div
                  key={item.degree}
                  className="rounded-lg border border-tech-border bg-tech-surface/40 p-4"
                >
                  <p className="font-mono text-sm font-semibold text-white">
                    {item.degree}
                  </p>
                  <p className="mt-1 font-mono text-xs text-gray-400">
                    {item.institution}
                  </p>
                  <p className="mt-1 font-mono text-xs text-electric-cyan/80">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mb-3 mt-8 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-electric-green/90">
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((item) => (
                <li key={item} className="flex gap-2 font-mono text-xs text-gray-400">
                  <span className="text-electric-cyan">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-electric-green/90">
              Publication
            </h3>
            <p className="font-mono text-xs leading-relaxed text-gray-400">
              {publication}
            </p>

            <h3 className="mb-2 mt-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-electric-green/90">
              Languages
            </h3>
            <p className="font-mono text-xs text-gray-400">
              {languages.join(" • ")}
            </p>
          </article>
        </section>

        {/* Contact Section */}
        <section className="terminal-card diagonal-accent p-6 sm:p-8 lg:p-10 animate-fade-up delay-600">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
            <aside>
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-electric-cyan/70">
                {"// Get in Touch"}
              </div>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Let&apos;s Build Together
              </h2>
              <p className="mt-4 font-mono text-sm leading-relaxed text-gray-300">
                I partner with teams building data-intensive software, cloud-first
                products, and modern full-stack platforms. Let&apos;s discuss your next
                project.
              </p>

              <div className="mt-6 space-y-3 border-l-2 border-electric-green/40 bg-tech-surface/30 p-4 font-mono text-sm">
                <div>
                  <span className="text-gray-500">Email:</span>{" "}
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-electric-cyan hover:underline"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </aside>

            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
