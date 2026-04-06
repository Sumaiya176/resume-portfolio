"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CursorSpotlight } from "@/components/effects/CursorSpotlight";

const ROLES = [
  "Fullstack Engineer.",
  "Problem Solver.",
  "MERN Developer.",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState(ROLES[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplay(ROLES[roleIndex]);
  }, [roleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <CursorSpotlight />

      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--bg-elevated)] px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-[var(--color-gold)]">
            {site.status}
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Hi, I&apos;m{" "}
          <span className="text-[var(--color-gold)]">{site.name}</span>
        </motion.h1>

        <motion.div
          className="mt-4 min-h-[2.5rem] font-display text-2xl font-medium text-[var(--text-secondary)] sm:text-3xl md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span className="inline-block min-w-[280px] text-left sm:min-w-[320px]">
            <TypingText key={display} text={display} />
          </span>
        </motion.div>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--text-secondary)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {site.tagline} I craft scalable web applications with clean code and
          thoughtful architecture. Based in {site.location}.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          <MagneticButton href="#projects" variant="primary">
            View Projects
          </MagneticButton>
          <MagneticButton href="#contact" variant="secondary">
            Contact Me
          </MagneticButton>
          <MagneticButton href={site.resumeUrl} variant="ghost">
            Download Resume
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="block h-8 w-px bg-[var(--border-subtle)]" />
      </motion.div>
    </section>
  );
}

function TypingText({ text }: { text: string }) {
  const [visible, setVisible] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setVisible(0);
    const len = text.length;
    const step = 80;
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setVisible(i);
      if (i >= len) {
        clearInterval(t);
        setShowCursor(false);
      }
    }, step);
    return () => clearInterval(t);
  }, [text]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <>
      {text.slice(0, visible)}
      <span
        className="inline-block w-0.5 bg-[var(--color-gold)] transition-opacity"
        style={{ opacity: showCursor ? 1 : 0 }}
      >
        |
      </span>
    </>
  );
}
