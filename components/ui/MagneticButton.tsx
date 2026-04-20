"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MAGNETIC_STRENGTH = 0.35;

type Props = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  download?: string;
};

export function MagneticButton({
  href,
  onClick,
  children,
  className,
  variant = "primary",
  download,
}: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * MAGNETIC_STRENGTH;
    const y = (e.clientY - rect.top - rect.height / 2) * MAGNETIC_STRENGTH;
    setPosition({ x, y });
  };

  const handleLeave = () => setPosition({ x: 0, y: 0 });

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";
  const variants = {
    primary:
      "bg-[var(--color-gold)] text-[var(--bg-primary)] hover:bg-[var(--color-gold-light)]",
    secondary:
      "border border-[var(--border-accent)] text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10",
    ghost:
      "text-[var(--text-secondary)] hover:text-[var(--color-gold)] hover:bg-white/5",
  };

  const style = { x: position.x, y: position.y };

  const content = (
    <motion.span
      style={style}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        className={cn(base, variants[variant], className)}
        download={download}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {content}
    </button>
  );
}
