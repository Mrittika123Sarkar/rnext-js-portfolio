"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { allProjectTags, projects } from "@/lib/data";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="border-b border-[var(--border)] py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Projects" title="Selected work" />

        <div className="mb-10 flex flex-wrap gap-2">
          {["All", ...allProjectTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === tag
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--accent)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                </div>
                <p className="mt-1 text-xs font-mono text-[var(--accent)]">
                  {project.company}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--surface-2)] px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
