"use client";

import { motion } from "framer-motion";
import type { EducationItem } from "@/types";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface EducationSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  education: EducationItem[];
}

export function EducationSection({
  eyebrow,
  title = "Education",
  description,
  education,
}: EducationSectionProps) {
  return (
    <section className="section section-soft" id="education">
      <div className="container">
        <AnimateIn>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </AnimateIn>

        <motion.div
          className="education-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {education.map((item) => (
            <motion.div
              key={`${item.institution}-${item.degree}`}
              variants={staggerItem}
            >
              <Card as="article" className="education-card">
                <h3>{item.institution}</h3>
                <p>{item.degree}</p>
                <span className="role-duration">{item.duration}</span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
