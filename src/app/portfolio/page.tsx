import Link from "next/link";
import { freelanceProjects, privateProjects, type Project, type ProjectType } from "@/data/portfolio";
import {
  Globe,
  Monitor,
  Smartphone,
  Database,
  Server,
  ExternalLink,
  GitBranch,
  Lock
} from "lucide-react";

const typeConfig: Record<ProjectType, { label: string; Icon: React.ElementType; color: string }> = {
  "landing-page": {
    label: "Landing Page",
    Icon: Globe,
    color: "text-electric-cyan border-electric-cyan/30 bg-electric-cyan/10"
  },
  "web-app": {
    label: "Web App",
    Icon: Monitor,
    color: "text-electric-blue border-electric-blue/30 bg-electric-blue/10"
  },
  "android-app": {
    label: "Android App",
    Icon: Smartphone,
    color: "text-electric-green border-electric-green/30 bg-electric-green/10"
  },
  "data-platform": {
    label: "Data Platform",
    Icon: Database,
    color: "text-electric-amber border-electric-amber/30 bg-electric-amber/10"
  },
  api: {
    label: "API / Backend",
    Icon: Server,
    color: "text-purple-400 border-purple-400/30 bg-purple-400/10"
  }
};

function ProjectCard({ project }: { project: Project }) {
  const { label, Icon, color } = typeConfig[project.type];

  return (
    <article className="code-card group flex flex-col gap-4 p-6 transition-all hover:border-electric-cyan/50">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-display text-xl font-semibold text-white">
            {project.title}
          </h3>
          {project.company && (
            <p className="mt-0.5 font-mono text-xs text-electric-amber/80">
              {project.company}
            </p>
          )}
        </div>
        <span
          className={`flex items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-xs font-medium ${color}`}
        >
          <Icon size={12} />
          {label}
        </span>
      </div>

      <p className="flex-1 font-mono text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-tech-border bg-tech-surface/60 px-2.5 py-1 font-mono text-xs text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>

      {(project.liveUrl || project.githubUrl) && (
        <div className="flex gap-3 border-t border-tech-border pt-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs font-semibold text-electric-cyan transition-colors hover:text-white"
            >
              <ExternalLink size={12} />
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs font-semibold text-gray-400 transition-colors hover:text-white"
            >
              <GitBranch size={12} />
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen pb-20 pt-8">
      {/* Ambient lighting */}
      <div className="pointer-events-none fixed left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-electric-cyan/10 blur-[120px]" />
      <div className="pointer-events-none fixed right-0 top-1/4 h-[500px] w-[500px] translate-x-1/3 rounded-full bg-electric-amber/8 blur-[100px]" />
      <div className="pointer-events-none fixed bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="terminal-card mb-8 overflow-hidden p-6 sm:p-8 lg:p-10 animate-fade-up">
          <div className="mb-8 flex items-center gap-2 border-b border-tech-border pb-4">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-electric-amber/80" />
              <div className="h-3 w-3 rounded-full bg-electric-green/80" />
            </div>
            <div className="ml-4 font-mono text-xs text-electric-cyan/60">
              ~/.portfolio/projects
            </div>
            <div className="ml-auto">
              <Link
                href="/"
                className="font-mono text-xs text-gray-500 transition-colors hover:text-electric-cyan"
              >
                ← back to home
              </Link>
            </div>
          </div>

          <div className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-electric-cyan/70">
            $ ls ./projects
          </div>
          <h1 className="font-display text-5xl font-bold leading-[1.1] text-white sm:text-6xl">
            Portfolio
          </h1>
          <p className="mt-3 max-w-2xl font-mono text-sm leading-relaxed text-gray-400">
            A selection of projects I&apos;ve built — from client landing pages to
            enterprise-scale platforms. Available for freelance work.
          </p>
        </header>

        {/* Freelance Projects */}
        <section className="mb-8 animate-fade-up delay-200">
          <div className="mb-4">
            <div className="mb-1 font-mono text-xs uppercase tracking-[0.25em] text-electric-cyan/70">
              {"// Freelance Work"}
            </div>
            <h2 className="font-display text-3xl font-bold text-white">
              Client Projects
            </h2>
            <p className="mt-2 font-mono text-sm text-gray-500">
              Public projects built for clients — live and shipped.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {freelanceProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* Company Projects */}
        <section className="terminal-card p-6 sm:p-8 animate-fade-up delay-400">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-tech-border pb-4">
            <div>
              <div className="mb-1 font-mono text-xs uppercase tracking-[0.25em] text-electric-cyan/70">
                {"// Professional Work"}
              </div>
              <h2 className="font-display text-3xl font-bold text-white">
                Company Projects
              </h2>
              <p className="mt-2 font-mono text-sm text-gray-500">
                Enterprise-scale work built during my full-time roles. Source code
                is private.
              </p>
            </div>
            <span className="flex items-center gap-1.5 rounded border border-tech-border bg-tech-surface/60 px-3 py-1.5 font-mono text-xs text-gray-400">
              <Lock size={11} />
              Confidential
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {privateProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
