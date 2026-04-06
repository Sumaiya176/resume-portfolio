"use client";

import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { experience } from "@/lib/constants";

export function Experience() {
  return (
    <SectionReveal id="experience" as="section" className="py-24 px-6" stagger={0.05}>
      <div className="mx-auto max-w-3xl">
        <SectionRevealItem>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Experience
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-gold)]" />
        </SectionRevealItem>

        <div className="relative mt-12 pl-6 before:absolute before:left-[5px] before:top-2 before:bottom-2 before:w-px before:bg-[var(--border-subtle)]">
          {experience.map((exp, i) => (
            <SectionRevealItem key={i} delay={i}>
              <div className="relative pb-12 last:pb-0">
                <span className="absolute -left-6 top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)]" />
                <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-[var(--color-gold)]">{exp.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{exp.company}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm leading-relaxed text-[var(--text-secondary)]"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-gold)]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionRevealItem>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
