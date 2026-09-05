"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--border)] py-24">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="relative border-l border-[var(--border)] pl-8 sm:pl-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute -left-[41px] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[49px]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <span className="absolute h-4 w-4 rounded-full bg-[var(--accent)] opacity-20 animate-ping" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <span className="font-mono text-xs text-[var(--accent)]">
                  {exp.period} · {exp.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{exp.role}</p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--muted)]"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--muted)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
