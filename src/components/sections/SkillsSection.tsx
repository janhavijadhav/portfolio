"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/types";
import { Card } from "@/components/ui/Card";
import { TagList } from "@/components/ui/TagChip";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { TermBar } from "@/components/ui/TermBar";
import { slugify } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface SkillsSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  skills: SkillGroup[];
}

export function SkillsSection({
  eyebrow,
  title = "Skills",
  description,
  skills,
}: SkillsSectionProps) {
  return (
    <section className="section" id="skills">
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
          {skills.map((group) => (
            <motion.div key={group.title} variants={staggerItem}>
              <Card className="skill-group">
                <TermBar path={`~/skills/${slugify(group.title)}.json`} />
                <h3>{group.title}</h3>
                <TagList
                  items={group.skills}
                  variant="neutral"
                  className="skill-items"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
