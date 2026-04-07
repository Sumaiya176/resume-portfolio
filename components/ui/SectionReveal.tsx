"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number]},
  }),
};

type Props = {
  children: React.ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
  stagger?: number;
};

export function SectionReveal({
  children,
  className,
  as: Comp = "section",
  id,
  stagger = 0,
}: Props) {
  const MotionComp = Comp === "section" ? motion.section : motion.div;
  return (
    <MotionComp
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: stagger },
        },
      }}
    >
      {children}
    </MotionComp>
  );
}

export function SectionRevealItem({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={defaultVariants}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}
