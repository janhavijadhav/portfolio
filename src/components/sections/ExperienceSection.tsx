"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagChip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card as="article" className="experience-card">
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
  return (
    <section className="section section-soft" id="experience">
      <div className="container">
        <AnimateIn>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </AnimateIn>

        <motion.div
          className="stack-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {experience.map((item) => (
            <motion.div key={`${item.title}-${item.company}`} variants={staggerItem}>
              <ExperienceCard experience={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
