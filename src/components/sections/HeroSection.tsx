"use client";

import { motion } from "framer-motion";
import type { Candidate } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagChip";
import { getFileUrl } from "@/sanity/image";
import { getSocialUrl } from "@/lib/utils";
import { slideInLeft, slideInRight } from "@/lib/animations";

interface HeroSectionProps {
  candidate: Candidate;
}

export function HeroSection({ candidate }: HeroSectionProps) {
  const hero = candidate.hero;
  const resumeUrl = candidate.resume?.asset?._ref
    ? getFileUrl(candidate.resume.asset._ref)
    : undefined;
  const githubUrl = getSocialUrl(candidate.socialLinks, "github");
  const linkedinUrl = getSocialUrl(candidate.socialLinks, "linkedin")
    ?? candidate.contact?.linkedinUrl;

  return (
    <section className="hero-section section">
      <div className="container hero-grid">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInLeft}
        >
          <h1>{hero?.headline}</h1>
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
          initial="hidden"
          animate="visible"
          variants={slideInRight}
          transition={{ delay: 0.1 }}
        >
          <Card as="aside" className="hero-aside hero-aside-tint">
            {hero?.snapshotLabel ? (
              <p className="mini-label">{hero.snapshotLabel}</p>
            ) : null}
            {hero?.snapshotTitle ? <h2>{hero.snapshotTitle}</h2> : null}
            {hero?.snapshotItems?.length ? (
              <ul className="snapshot-list">
                {hero.snapshotItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
