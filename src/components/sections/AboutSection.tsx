"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Candidate } from "@/types";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagChip";
import { getImageUrl } from "@/sanity/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

interface AboutSectionProps {
  candidate: Candidate;
}

export function AboutSection({ candidate }: AboutSectionProps) {
  const about = candidate.about;
  const imageUrl = getImageUrl(candidate.profileImage, 560, 560) ?? "/janhavi.jpg";

  return (
    <section className="section" id="about">
      <div className="container">
        <Card className="about-card">
          <div className="about-grid">
            <motion.div
              className="about-photo-wrap"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt={candidate.fullName}
                  width={280}
                  height={280}
                  className="about-photo"
                />
              ) : (
                <div className="about-photo-placeholder" aria-hidden>
                  <span style={{ fontSize: "3.5rem", letterSpacing: "-0.02em" }}>
                    JJ
                  </span>
                </div>
              )}
            </motion.div>

            <motion.div
              className="about-copy"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              {about?.eyebrow ? <p className="eyebrow">{about.eyebrow}</p> : null}
              {about?.title ? <h2>{about.title}</h2> : null}
              {about?.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <TagList items={about?.tags} />
            </motion.div>
          </div>
        </Card>
      </div>
    </section>
  );
}
