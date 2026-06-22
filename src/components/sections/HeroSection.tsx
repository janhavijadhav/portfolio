"use client";

import dynamic from "next/dynamic";
import { Fragment } from "react";
import { motion } from "framer-motion";
import type { Candidate } from "@/types";
import { Button } from "@/components/ui/Button";
import { getSocialUrl } from "@/lib/utils";
import { RESUME_URL } from "@/lib/data";

const NeuralNetCanvas = dynamic(
  () => import("@/components/three/NeuralNetCanvas").then((m) => m.NeuralNetCanvas),
  { ssr: false },
);

interface HeroSectionProps {
  candidate: Candidate;
}

const AGENT_PIPELINE = [
  { label: "Planning", color: "#a855f7" },
  { label: "RAG", color: "#22d3ee" },
  { label: "Research", color: "#a855f7" },
  { label: "Synthesis", color: "#22d3ee" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export function HeroSection({ candidate }: HeroSectionProps) {
  const hero = candidate.hero;
  const resumeUrl = RESUME_URL;
  const linkedinUrl =
    getSocialUrl(candidate.socialLinks, "linkedin") ?? candidate.contact?.linkedinUrl;

  return (
    <section className="hero-section section">
      <div className="container">
        <div className="hero-layout">
          {/* ── Left: content ── */}
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <motion.div variants={item}>
              <p className="terminal-prompt">
                <span className="terminal-user">janhavi@portfolio</span>
                <span className="terminal-sep">:~$</span>&nbsp;whoami
              </p>
            </motion.div>

            <motion.h1 variants={item}>{hero?.headline}</motion.h1>

            {hero?.subheadline ? (
              <motion.p className="hero-copy" variants={item}>
                {hero.subheadline}
              </motion.p>
            ) : null}

            <motion.div className="hero-actions" variants={item}>
              <Button href="/projects" variant="primary">
                View Projects
              </Button>
              {resumeUrl ? (
                <Button href={resumeUrl} variant="secondary" external>
                  Download Resume
                </Button>
              ) : null}
              {linkedinUrl ? (
                <Button href={linkedinUrl} variant="ghost" external>
                  LinkedIn
                </Button>
              ) : null}
            </motion.div>

            {hero?.highlights?.length ? (
              <motion.div className="hero-badges" variants={item}>
                {hero.highlights.map((tag) => (
                  <span key={tag} className="hero-badge">
                    {tag}
                  </span>
                ))}
              </motion.div>
            ) : null}

            {/* Pipeline band */}
            <motion.div className="pipeline-band" variants={item} style={{ marginTop: "2rem" }}>
              <div className="pipeline-top-line" />
              <p className="mini-label" style={{ margin: 0 }}>
                FinSight multi-agent pipeline
              </p>
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

            {/* Snapshot stats */}
            {hero?.snapshotItems?.length ? (
              <motion.div className="stat-row" variants={container}>
                {hero.snapshotItems.map((stat, i) => (
                  <motion.div key={stat} className="stat-chip" variants={item}>
                    <span
                      className="stat-chip-marker"
                      style={{
                        background: i % 2 === 0 ? "var(--accent)" : "var(--accent-2)",
                        boxShadow: `0 0 8px ${i % 2 === 0 ? "var(--accent)" : "var(--accent-2)"}`,
                      }}
                    />
                    <p>{stat}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : null}
          </motion.div>

          {/* ── Right: 3D canvas ── */}
          <motion.div
            className="hero-canvas-wrap"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <NeuralNetCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
