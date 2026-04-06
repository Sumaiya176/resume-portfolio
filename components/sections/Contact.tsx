"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionReveal, SectionRevealItem } from "@/components/ui/SectionReveal";
import { site } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Email", href: `mailto:${site.email}`, value: site.email, copy: site.email },
  { label: "LinkedIn", href: site.linkedin, value: "Profile", copy: site.linkedin },
  { label: "GitHub", href: site.github, value: "Profile", copy: site.github },
];

export function Contact() {
  return (
    <SectionReveal id="contact" as="section" className="py-24 px-6" stagger={0.06}>
      <div className="mx-auto max-w-2xl">
        <SectionRevealItem>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Contact
          </h2>
          <div className="mt-4 h-px w-16 bg-[var(--color-gold)]" />
        </SectionRevealItem>
        <SectionRevealItem delay={1}>
          <p className="mt-6 text-[var(--text-secondary)]">
            Have a role in mind or want to collaborate? Reach out.
          </p>
        </SectionRevealItem>
        <SectionRevealItem delay={2}>
          <ul className="mt-10 space-y-4">
            {LINKS.map((link) => (
              <ContactRow key={link.label} {...link} />
            ))}
          </ul>
        </SectionRevealItem>
      </div>
    </SectionReveal>
  );
}

function ContactRow({
  label,
  href,
  value,
  copy,
}: {
  label: string;
  href: string;
  value: string;
  copy: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -12 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
      }}
      className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-elevated)]/50 px-5 py-4"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
          {label}
        </p>
        <a
          href={href}
          target={label === "Email" ? undefined : "_blank"}
          rel={label === "Email" ? undefined : "noopener noreferrer"}
          className="mt-1 font-medium text-[var(--text-primary)] hover:text-[var(--color-gold)]"
        >
          {value}
        </a>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          "text-[var(--text-secondary)] hover:bg-white/5 hover:text-[var(--color-gold)]",
          copied && "text-[var(--color-gold)]"
        )}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </motion.li>
  );
}
