"use client";

import type { SkillGroup } from "@/types";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SkillConstellation } from "@/features/skills/SkillConstellation";

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
        <p className="constellation-hint">Hover a cluster to explore skills</p>
        <SkillConstellation />
      </div>
    </section>
  );
}
