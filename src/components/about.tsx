"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { profile, education, certifications, languages, interests } from "@/lib/data";

const stats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Companies", value: "3" },
  { label: "Platforms", value: "iOS & Android" },
];

function Stat({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/\d+/, "0"));
  const match = value.match(/^(\d+)(.*)$/);

  useEffect(() => {
    if (!inView || !match) return;
    const target = Number(match[1]);
    const suffix = match[2];
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value]);

  return (
    <div ref={ref} className="text-2xl sm:text-3xl font-semibold tracking-tight">
      {match ? display : value}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="border-b border-[var(--border)] py-24">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-[var(--muted)]">
              {profile.summary}
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <Stat value={s.value} />
                  <div className="mt-1 text-xs sm:text-sm text-[var(--muted)]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h3
                  className="mb-3 text-base italic text-[var(--muted)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Education
                </h3>
                <ul className="space-y-3">
                  {education.map((e) => (
                    <li key={e.school} className="text-sm">
                      <div className="font-medium">{e.degree}</div>
                      <div className="text-[var(--muted)]">{e.school}</div>
                      <div className="text-[var(--muted)] font-mono text-xs">
                        {e.period}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3
                  className="mb-3 text-base italic text-[var(--muted)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Certifications
                </h3>
                <ul className="space-y-2 text-sm text-[var(--muted)]">
                  {certifications.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>

                <h3
                  className="mb-3 mt-6 text-base italic text-[var(--muted)]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Languages
                </h3>
                <p className="text-sm text-[var(--muted)]">{languages.join(", ")}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h3
              className="text-base italic text-[var(--muted)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Quick facts
            </h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-[var(--border)] pb-3">
                <dt className="text-[var(--muted)]">Location</dt>
                <dd className="font-medium">{profile.location}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--border)] pb-3">
                <dt className="text-[var(--muted)]">Role</dt>
                <dd className="font-medium">{profile.role}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-[var(--border)] pb-3">
                <dt className="text-[var(--muted)]">Experience</dt>
                <dd className="font-medium">{profile.tagline}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-[var(--muted)]">Interests</dt>
                <dd className="font-medium text-right">{interests.join(", ")}</dd>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
