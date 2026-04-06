"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <SectionReveal id="projects" as="section" className="py-24 px-6" stagger={0.08}>
      <div className="mx-auto max-w-5xl">
        <SectionRevealItem>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Projects
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-gold)]" />
        </SectionRevealItem>

        <div className="mt-16 space-y-20">
          {projects.map((project, i) => (
            <SectionRevealItem key={project.id} delay={i}>
              <ProjectCard project={project} reverse={i % 2 === 1} />
            </SectionRevealItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

function ProjectCard({
  project,
  reverse,
}: {
  project: (typeof projects)[number];
  reverse: boolean;
}) {
  return (
    <motion.article
      className={cn(
        "gradient-border overflow-hidden rounded-2xl p-[1px]",
        "transition-shadow duration-300 hover:shadow-[var(--shadow-glow)]"
      )}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-col gap-8 rounded-2xl bg-[var(--bg-elevated)] p-6 md:flex-row md:gap-10 md:p-8">
        <div
          className={cn(
            "relative aspect-video w-full overflow-hidden rounded-xl bg-[var(--bg-secondary)] md:w-2/5",
            reverse && "md:order-2"
          )}
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-[var(--border-subtle)] text-[var(--text-muted)]">
              <span className="text-sm">{project.title}</span>
              <span className="text-xs">Screenshot placeholder</span>
            </div>
          )}
        </div>

        <div className={cn("flex flex-1 flex-col", reverse && "md:order-1")}>
          <h3 className="font-display text-2xl font-semibold text-[var(--text-primary)]">
            {project.title}
          </h3>
          <p className="mt-2 text-[var(--text-secondary)]">{project.summary}</p>

          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
              Key features
            </h4>
            <ul className="mt-2 space-y-1 text-sm text-[var(--text-secondary)]">
              {project.features.map((f, j) => (
                <li key={j}>• {f}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
              Architecture
            </h4>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">
              {project.architecture}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[var(--border-subtle)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--color-gold)] px-4 py-2 text-sm font-medium text-[var(--bg-primary)] transition-colors hover:bg-[var(--color-gold-light)]"
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--border-accent)] px-4 py-2 text-sm font-medium text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)]/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
