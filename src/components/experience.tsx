"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experiences } from "@/lib/data";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 30,
    mass: 0.5,
  });

  return (
    <section id="experience" className="border-b border-[var(--border)] py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          icon={Briefcase}
        />

        <div ref={ref} className="relative pl-8 sm:pl-10">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[var(--border)]" />
          <motion.div
            style={{ scaleY: lineHeight }}
            className="absolute left-0 top-0 bottom-0 w-px origin-top bg-[var(--accent)]"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-14 last:pb-0"
            >
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
                className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--accent)] sm:-left-[45px]"
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
                >
                  {exp.company}
                </h3>
                <span className="font-mono text-xs text-[var(--accent)]">
                  {exp.period} · {exp.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--muted)]">{exp.role}</p>

              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, bi) => (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.35, delay: i * 0.08 + bi * 0.05 }}
                    className="flex gap-2 text-sm leading-relaxed text-[var(--muted)]"
                  >
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-[var(--muted)]" />
                    {b}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
