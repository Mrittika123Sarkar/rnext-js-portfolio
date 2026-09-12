"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GitBranch,
  Layers,
  type LucideIcon,
  Server,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

const categoryIcons: Record<string, LucideIcon> = {
  "Mobile Development": Smartphone,
  Frontend: Code2,
  "APIs & Integration": Server,
  "Tools & Version Control": GitBranch,
  Engineering: Layers,
};

export function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--border)] py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="Tech Stack" icon={Code2} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = categoryIcons[group.category] ?? Layers;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
              >
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--surface-2)] text-[var(--accent)]">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
