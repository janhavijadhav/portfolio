"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import type { Candidate } from "@/types";
import { Button } from "@/components/ui/Button";
import { TagList } from "@/components/ui/TagChip";
import { getSocialUrl } from "@/lib/utils";
import { RESUME_URL } from "@/lib/data";
import { slideInLeft, fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface HeroSectionProps {
  candidate: Candidate;
}

const AGENT_PIPELINE = [
  { label: "Planning", color: "#8b5cf6" },
  { label: "RAG", color: "#22d3ee" },
  { label: "Research", color: "#8b5cf6" },
  { label: "Synthesis", color: "#22d3ee" },
];

export function HeroSection({ candidate }: HeroSectionProps) {
  const hero = candidate.hero;
  const resumeUrl = RESUME_URL;
  const githubUrl = getSocialUrl(candidate.socialLinks, "github");
  const linkedinUrl = getSocialUrl(candidate.socialLinks, "linkedin")
    ?? candidate.contact?.linkedinUrl;

  return (
    <section className="hero-section section">
      <div className="container hero-stack">
        <motion.div initial="hidden" animate="visible" variants={slideInLeft}>
          <p className="terminal-prompt">
            <span className="terminal-user">janhavi@portfolio</span>
            <span className="terminal-sep">:~$</span> whoami
          </p>
          <h1 className="hero-headline">{hero?.headline}</h1>
          {hero?.subheadline ? (
            <p className="hero-copy">{hero.subheadline}</p>
          ) : null}

          <div className="hero-actions">
            <Button href="/projects" variant="primary">
              View Projects
            </Button>
            {resumeUrl ? (
              <Button href={resumeUrl} variant="secondary" external>
                Download Resume
              </Button>
            ) : null}
            {githubUrl ? (
              <Button href={githubUrl} variant="ghost" external>
                GitHub
              </Button>
            ) : null}
            {linkedinUrl ? (
              <Button href={linkedinUrl} variant="ghost" external>
                LinkedIn
              </Button>
            ) : null}
          </div>

          <TagList items={hero?.highlights} />
        </motion.div>

        <motion.div
          className="pipeline-band"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <p className="mini-label">How I build agentic systems — FinSight pipeline</p>
          <div className="agent-flow">
            {AGENT_PIPELINE.map((step, index) => (
              <Fragment key={step.label}>
                <span
                  className="agent-node"
                  style={{ "--node-color": step.color } as React.CSSProperties}
                >
                  {step.label}
                </span>
                {index < AGENT_PIPELINE.length - 1 ? (
                  <span className="agent-arrow" aria-hidden>
                    →
                  </span>
                ) : null}
              </Fragment>
            ))}
          </div>
        </motion.div>

        {hero?.snapshotItems?.length ? (
          <motion.div
            className="stat-row"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            transition={{ delayChildren: 0.35 }}
          >
            {hero.snapshotItems.map((item) => (
              <motion.div className="stat-chip" key={item} variants={staggerItem}>
                <span className="stat-chip-marker" aria-hidden />
                <p>{item}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
