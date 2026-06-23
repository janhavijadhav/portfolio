"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ExperienceItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagChip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { TermBar } from "@/components/ui/TermBar";
import { slugify } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card as="article" className="experience-card">
      <TermBar path={`~/experience/${slugify(experience.company)}.log`} />
      <div className="role-heading">
        <div>
          <h3>{experience.title}</h3>
          <p>{experience.company}</p>
        </div>
        <span className="role-duration">{experience.duration}</span>
      </div>
      {experience.description ? (
        <p className="role-description">{experience.description}</p>
      ) : null}
      {experience.highlights?.length ? (
        <ul className="bullet-list">
          {experience.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <TagList items={experience.technologies} variant="neutral" className="skill-items" />
    </Card>
  );
}

interface ExperienceSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  experience: ExperienceItem[];
}

export function ExperienceSection({
  eyebrow,
  title = "Experience",
  description,
  experience,
}: ExperienceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section section-soft" id="experience" ref={sectionRef}>
      <div className="container">
        <AnimateIn>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </AnimateIn>

        <div className="timeline-wrapper">
          {/* Animated vertical track */}
          <div className="timeline-track" aria-hidden>
            <motion.div
              className="timeline-track-fill"
              style={{ scaleY: lineScaleY }}
            />
          </div>

          <motion.div
            className="timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {experience.map((item) => (
              <motion.div
                key={`${item.title}-${item.company}`}
                variants={staggerItem}
                className="timeline-item"
              >
                <ExperienceCard experience={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
