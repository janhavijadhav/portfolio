"use client";

import { ScrambleText } from "./ScrambleText";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "section-header",
}: SectionHeaderProps) {
  return (
    <div className={className}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>
        <ScrambleText text={title} />
      </h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
