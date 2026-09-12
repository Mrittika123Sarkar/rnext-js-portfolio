"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex flex-col items-start gap-4"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--accent)]">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {eyebrow}
      </span>
      <h2
        className="text-3xl sm:text-4xl tracking-tight"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-[var(--muted)] leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
