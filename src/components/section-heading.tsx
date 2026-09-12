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
      <span className="text-sm italic text-[var(--accent)]" style={{ fontFamily: "var(--font-serif)" }}>
        {eyebrow}
      </span>
      <h2
        className="text-3xl sm:text-4xl tracking-tight"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
      >
        {title}
      </h2>
    </motion.div>
  );
}
