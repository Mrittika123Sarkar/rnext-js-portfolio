"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
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

export function Hero() {
  return (
    <section id="hero" className="border-b border-[var(--border)]">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-x py-20 sm:py-28"
      >
        <motion.p variants={rise} className="mb-5 text-sm text-[var(--muted)]">
          {profile.location} · {profile.tagline}
        </motion.p>

        <h1
          className="max-w-3xl text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1] tracking-tight"
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
      </motion.div>
    </section>
  );
}
