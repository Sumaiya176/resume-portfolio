"use client";

import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { skills } from "@/lib/constants";

const ALL_SKILLS = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.auth,
  ...skills.tools,
];

const CATEGORIES = [
  { label: "Frontend", items: skills.frontend },
  { label: "Backend & Data", items: skills.backend },
  { label: "Auth & Tools", items: [...skills.auth, ...skills.tools] },
];

export function TechStack() {
  return (
    <SectionReveal id="tech" as="section" className="py-24 px-6" stagger={0.04}>
      <div className="mx-auto max-w-4xl">
        <SectionRevealItem>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Tech Stack
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-gold)]" />
        </SectionRevealItem>

        <SectionRevealItem delay={1}>
          <p className="mt-6 max-w-xl text-[var(--text-secondary)]">
            Technologies I use to build and ship production applications.
          </p>
        </SectionRevealItem>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (j: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: j * 0.06, duration: 0.4 },
                }),
              }}
              custom={i}
              className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                {cat.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((s) => (
                  <motion.li
                    key={s}
                    className="rounded-lg bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--border-accent)] hover:text-[var(--text-primary)]"
                    whileHover={{ scale: 1.02 }}
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Optional: simple radar-style list */}
        <SectionRevealItem delay={2}>
          <div className="mt-12 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/30 p-8">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
              Full stack at a glance
            </h3>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {ALL_SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="rounded-full border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-4 py-2 text-sm text-[var(--text-secondary)]"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </SectionRevealItem>
      </div>
    </SectionReveal>
  );
}
