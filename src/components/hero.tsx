"use client";

import { motion } from "framer-motion";
import { ArrowRight, Layers, Mail, Rocket, Server } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const chip = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section id="hero" className="overflow-hidden border-b border-[var(--border)]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div>
          <motion.p variants={rise} className="mb-5 text-sm text-[var(--muted)]">
            {profile.location} · {profile.tagline}
          </motion.p>

          <h1
            className="max-w-xl text-4xl sm:text-5xl leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--font-serif)", fontWeight: 500 }}
          >
            <motion.span variants={rise} className="inline-block">
              Hi, I&apos;m {profile.name.split(" ")[0]} — I build the
            </motion.span>{" "}
            <motion.span
              variants={rise}
              className="inline-block italic text-[var(--accent)]"
            >
              React Native
            </motion.span>{" "}
            <motion.span variants={rise} className="inline-block">
              apps you probably didn&apos;t notice were working well.
            </motion.span>
          </h1>

          <motion.p
            variants={rise}
            className="mt-6 max-w-xl text-base sm:text-lg text-[var(--muted)] leading-relaxed"
          >
            That&apos;s kind of the point. No crashes, no jank, no &quot;why is
            this button unresponsive&quot; tickets. Right now I&apos;m at
            Pronti; before that, Grey Matter Technology and Webskitters.
          </motion.p>

          <motion.div
            variants={rise}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--accent-foreground)] transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/10"
            >
              See what I&apos;ve shipped
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-3 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
            >
              Download résumé
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:text-[var(--foreground)] hover:bg-[var(--surface)]"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={rise} className="relative mt-6 lg:mt-0">
          <div
            className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-40 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, var(--accent), transparent 60%)",
            }}
          />

          <div className="relative mx-auto w-fit rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-xl shadow-black/5">
            <div className="mx-auto w-44 rounded-[1.6rem] border-[6px] border-[var(--foreground)]/[0.08] bg-[var(--background)] p-3">
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-[var(--border)]" />
              <div className="h-24 rounded-lg bg-gradient-to-br from-[var(--surface-2)] to-[var(--background)]" />
              <div className="mt-3 space-y-2">
                <div className="h-2 w-4/5 rounded-full bg-[var(--surface-2)]" />
                <div className="h-2 w-3/5 rounded-full bg-[var(--surface-2)]" />
              </div>
              <div className="mt-4 h-8 rounded-lg bg-[var(--accent)]/85" />
            </div>
          </div>

          <motion.div
            variants={chip}
            className="absolute -left-8 top-6 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs font-medium shadow-lg shadow-black/5"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-2)] text-[var(--accent)]">
              <Layers className="h-3.5 w-3.5" />
            </span>
            iOS &amp; Android
          </motion.div>

          <motion.div
            variants={chip}
            className="absolute -right-6 top-1/2 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs font-medium shadow-lg shadow-black/5"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-2)] text-[var(--accent)]">
              <Server className="h-3.5 w-3.5" />
            </span>
            REST APIs
          </motion.div>

          <motion.div
            variants={chip}
            className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-xs font-medium shadow-lg shadow-black/5"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--surface-2)] text-[var(--accent)]">
              <Rocket className="h-3.5 w-3.5" />
            </span>
            4 years shipping
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
