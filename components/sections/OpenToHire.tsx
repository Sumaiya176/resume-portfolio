"use client";

import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { openToHire } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function OpenToHire() {
  return (
    <SectionReveal id="hire" as="section" className="py-24 px-6" stagger={0.06}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="rounded-2xl border border-[var(--border-accent)] bg-[var(--bg-elevated)] p-8 text-center shadow-[var(--shadow-soft)] md:p-12"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <SectionRevealItem>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)]/15 px-4 py-1.5 text-sm font-medium text-[var(--color-gold)]">
              Open to Hire
            </span>
          </SectionRevealItem>
          <SectionRevealItem delay={1}>
            <h2 className="mt-6 font-display text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
              {openToHire.cta}
            </h2>
          </SectionRevealItem>
          <SectionRevealItem delay={2}>
            <p className="mt-4 text-[var(--text-secondary)]">
              {openToHire.availability}
            </p>
          </SectionRevealItem>
          <SectionRevealItem delay={3}>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Roles I&apos;m interested in:
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {openToHire.roles.map((role) => (
                <li
                  key={role}
                  className="rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-3 py-1.5 text-sm text-[var(--text-secondary)]"
                >
                  {role}
                </li>
              ))}
            </ul>
          </SectionRevealItem>
          <SectionRevealItem delay={4}>
            <div className="mt-10">
              <MagneticButton href="#contact" variant="primary">
                Get in Touch
              </MagneticButton>
            </div>
          </SectionRevealItem>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
