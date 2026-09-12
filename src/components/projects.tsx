"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FolderGit2, Layers, Smartphone } from "lucide-react";
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
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          icon={FolderGit2}
        />

        <div className="mb-16 flex flex-wrap gap-2">
          {["All", ...allProjectTags].map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`relative rounded-full border px-4 py-1.5 text-sm transition-colors ${
                filter === tag
                  ? "border-[var(--accent)] text-[var(--accent-foreground)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {filter === tag && (
                <motion.span
                  layoutId="project-filter-pill"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-[var(--accent)]"
                />
              )}
              <span className="relative">{tag}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="flex flex-col gap-20 sm:gap-24">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                layout
                key={project.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.4 }}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative mx-auto max-w-sm">
                    <div
                      className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-30 blur-3xl"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 20%, var(--accent), transparent 65%)",
                      }}
                    />
                    <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-xl shadow-black/5">
                      <div className="mx-auto w-44 rounded-[1.6rem] border-[6px] border-[var(--foreground)]/[0.08] bg-[var(--background)] p-3">
                        <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[var(--border)]" />
                        <div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--surface-2)] to-[var(--background)] text-4xl italic text-[var(--border)]" style={{ fontFamily: "var(--font-serif)" }}>
                          {project.name[0]}
                        </div>
                        <div className="mt-3 space-y-2">
                          <div className="h-2 w-4/5 rounded-full bg-[var(--surface-2)]" />
                          <div className="h-2 w-3/5 rounded-full bg-[var(--surface-2)]" />
                        </div>
                        <div className="mt-4 h-8 rounded-lg bg-[var(--accent)]/85" />
                      </div>
                    </div>

                    <span className="absolute -left-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--accent)] shadow-lg shadow-black/5">
                      <Smartphone className="h-4 w-4" />
                    </span>
                    <span className="absolute -bottom-4 -right-4 flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--background)] px-3 py-1.5 text-xs font-medium shadow-lg shadow-black/5">
                      <Layers className="h-3.5 w-3.5 text-[var(--accent)]" />
                      {project.tags[0]}
                    </span>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-xs font-mono uppercase tracking-wide text-[var(--accent)]">
                    {project.company}
                  </p>
                  <h3
                    className="mt-2 text-2xl sm:text-3xl tracking-tight"
                    style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                  >
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-[var(--muted)]">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--surface-2)] px-3 py-1.5 text-xs font-medium text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
