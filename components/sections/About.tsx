"use client";

import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { skills } from "@/lib/constants";

export function About() {
  return (
    <SectionReveal id="about" as="section" className="py-24 px-6" stagger={0.1}>
      <div className="mx-auto max-w-4xl">
        <SectionRevealItem>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            About Me
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-gold)]" />
        </SectionRevealItem>

        <SectionRevealItem delay={1}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            I&apos;m a Fullstack MERN Developer with a year of frontend experience
            and hands-on work across the stack. I focus on building reliable,
            performant applications—from responsive UIs to APIs and
            databases—and I enjoy turning complex requirements into clear,
            maintainable solutions.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            Fluent in Bangla and English, I&apos;m based in Bangladesh and currently
            open to new opportunities where I can contribute to meaningful
            products and grow as an engineer.
          </p>
        </SectionRevealItem>

        <SectionRevealItem delay={2}>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SkillGroup title="Frontend" items={skills.frontend} />
            <SkillGroup title="Backend & Data" items={skills.backend} />
            <SkillGroup title="Auth & Tools" items={[...skills.auth, ...skills.tools]} />
          </div>
        </SectionRevealItem>
      </div>
    </SectionReveal>
  );
}

function SkillGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50 p-5"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
        {title}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <li
            key={s}
            className="rounded-md bg-[var(--bg-secondary)] px-3 py-1.5 text-sm text-[var(--text-secondary)]"
          >
            {s}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
