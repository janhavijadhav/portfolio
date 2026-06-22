"use client";

import dynamic from "next/dynamic";
import { Fragment, useEffect, useState } from "react";
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

function useTyping(text: string, delay = 40) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, delay);
    return () => clearInterval(t);
  }, [text, delay]);
  return displayed;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export function HeroSection({ candidate }: HeroSectionProps) {
  const hero = candidate.hero;
  const resumeUrl = RESUME_URL;
  const linkedinUrl =
    getSocialUrl(candidate.socialLinks, "linkedin") ?? candidate.contact?.linkedinUrl;
  const headline = hero?.headline ?? "";
  const typed = useTyping(headline, 35);

  return (
    <section className="hero-section" id="hero">
      {/* Full-bleed 3D canvas */}
      <div className="hero-canvas-bg" aria-hidden>
        <NeuralNetCanvas />
      </div>

      {/* Overlay gradients for readability */}
      <div className="hero-overlay" aria-hidden />

      {/* Content */}
      <div className="container hero-content-wrap">
        <motion.div className="hero-content" initial="hidden" animate="visible">
          <motion.div variants={fadeUp} custom={0}>
            <p className="terminal-prompt">
              <span className="terminal-user">janhavi@portfolio</span>
              <span className="terminal-sep">:~$</span>&nbsp;whoami
            </p>
          </motion.div>

          {/* Typed headline */}
          <div className="hero-headline-wrap">
            <h1 className="hero-headline-typed">
              {typed}
              <span className="type-cursor" aria-hidden>|</span>
            </h1>
          </div>

          {hero?.subheadline ? (
            <motion.p className="hero-copy" variants={fadeUp} custom={0.9}>
              {hero.subheadline}
            </motion.p>
          ) : null}

          <motion.div className="hero-actions" variants={fadeUp} custom={1.1}>
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
            <motion.div className="hero-badges" variants={fadeUp} custom={1.3}>
              {hero.highlights.map((tag, i) => (
                <motion.span
                  key={tag}
                  className="hero-badge"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.07, duration: 0.35 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          ) : null}
        </motion.div>

        {/* Agent pipeline band */}
        <motion.div
          className="pipeline-band hero-pipeline"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
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
                {index < AGENT_PIPELINE.length - 1 && (
                  <span className="agent-arrow" aria-hidden>→</span>
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <div className="scroll-cue-line" />
          <span>scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
