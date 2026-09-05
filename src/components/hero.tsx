"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const stack = ["React Native", "TypeScript", "ReactJS", "REST APIs", "Firebase", "Git"];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[var(--border)]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--foreground) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-96 w-96 rounded-full blur-[120px]"
        style={{ background: "var(--accent)", opacity: 0.35 }}
      />

      <div className="container-x grid gap-12 py-24 sm:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm text-[var(--accent)]"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]} 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            {profile.role}
            <br />
            <span className="text-[var(--muted)]">{profile.tagline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-[var(--muted)]"
          >
            I build scalable, high-performance mobile applications with React
            Native, TypeScript, and modern architecture — from UI to API
            integration to production debugging.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-foreground)] hover:opacity-90 transition-opacity"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-medium hover:bg-[var(--surface)] transition-colors"
            >
              Download Resume
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface)] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl shadow-black/5">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-[var(--muted)]">
                profile.ts
              </span>
            </div>
            <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-[var(--muted)]">const</span>{" "}
                <span className="text-[var(--accent)]">developer</span> = {"{"}
                {"\n"}  name: <span className="text-emerald-500">&quot;Mrittika Sarkar&quot;</span>,{"\n"}
                {"  "}experience: <span className="text-orange-400">4</span>,{"\n"}
                {"  "}role: <span className="text-emerald-500">&quot;React Native Developer&quot;</span>,{"\n"}
                {"  "}location: <span className="text-emerald-500">&quot;Kolkata, India&quot;</span>,{"\n"}
                {"}"};
              </code>
            </pre>

            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                  className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-xs font-mono"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
