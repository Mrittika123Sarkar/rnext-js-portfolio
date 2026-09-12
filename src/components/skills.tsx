"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--border)] py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="Tech Stack" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h3
                className="mb-4 text-base italic text-[var(--muted)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--surface-2)] px-3 py-1.5 text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
