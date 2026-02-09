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

const sectionCard = "glass-panel rounded-3xl p-6 sm:p-8";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden pb-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-emerald-400/10 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-28 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl animate-glow-pulse" />
      <div className="pointer-events-none absolute -right-16 top-[30rem] h-60 w-60 rounded-full bg-amber-400/10 blur-3xl animate-glow-pulse" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8">
        <section className={`${sectionCard} animate-fade-up`}>
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-300/90">
            {profile.title} • {profile.location}
          </p>
          <h1 className="font-display mt-4 text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">{profile.summary}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-emerald-300/60 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/20"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-300/60 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <article
              key={metric.label}
              className={`${sectionCard} animate-fade-up`}
              style={{ animationDelay: `${120 * (index + 1)}ms` }}
            >
              <p className="font-display text-3xl font-semibold text-zinc-50">{metric.value}</p>
              <h2 className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-300">{metric.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{metric.detail}</p>
            </article>
          ))}
        </section>

        <section className={`${sectionCard} animate-fade-up`} style={{ animationDelay: "420ms" }}>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-semibold text-zinc-50 sm:text-3xl">Experience</h2>
            <p className="text-sm text-zinc-300">Built for scale, reliability, and measurable impact.</p>
          </div>

          <div className="mt-6 space-y-5">
            {experience.map((job) => (
              <article key={`${job.company}-${job.role}`} className="rounded-2xl border border-zinc-700/70 bg-zinc-950/40 p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-50">{job.role}</h3>
                    <p className="text-sm text-zinc-300">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <p className="rounded-full border border-zinc-600 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-200">
                    {job.period}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-200">
                  {job.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-emerald-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <article className={`${sectionCard} animate-fade-up`} style={{ animationDelay: "520ms" }}>
            <h2 className="font-display text-2xl font-semibold text-zinc-50 sm:text-3xl">Core Skills</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.17em] text-zinc-300">{group.label}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={`${group.label}-${item}`}
                        className="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-3 py-1 text-xs font-semibold text-zinc-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={`${sectionCard} animate-fade-up`} style={{ animationDelay: "620ms" }}>
            <h2 className="font-display text-2xl font-semibold text-zinc-50">Education & Growth</h2>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="rounded-xl border border-zinc-700/70 bg-zinc-950/35 p-4">
                  <p className="text-sm font-semibold text-zinc-100">{item.degree}</p>
                  <p className="mt-1 text-xs text-zinc-300">
                    {item.institution} • {item.location}
                  </p>
                  <p className="mt-1 text-xs text-emerald-200">{item.year}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.17em] text-zinc-300">Certifications</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-200">
              {certifications.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.17em] text-zinc-300">Publication</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-200">{publication}</p>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.17em] text-zinc-300">Languages</h3>
            <p className="mt-2 text-sm text-zinc-200">{languages.join(" • ")}</p>
          </article>
        </section>

        <section className={`${sectionCard} animate-fade-up`} style={{ animationDelay: "700ms" }}>
          <div className="grid gap-7 lg:grid-cols-[1fr_1.25fr]">
            <aside>
              <h2 className="font-display text-2xl font-semibold text-zinc-50 sm:text-3xl">Let&apos;s Build Together</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-200 sm:text-base">
                I partner with teams building data-intensive software, cloud-first products, and modern full-stack platforms.
                Send me a note and I will follow up quickly.
              </p>
              <div className="mt-5 space-y-2 text-sm text-zinc-200">
                <p>
                  <span className="font-semibold text-zinc-50">Email:</span> {profile.email}
                </p>
                <p>
                  <span className="font-semibold text-zinc-50">Phone:</span> {profile.phone}
                </p>
              </div>
            </aside>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
