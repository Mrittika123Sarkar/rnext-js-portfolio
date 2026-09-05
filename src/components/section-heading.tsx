"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 flex flex-col gap-2"
    >
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--accent)]">
        {eyebrow}
      </span>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
}
