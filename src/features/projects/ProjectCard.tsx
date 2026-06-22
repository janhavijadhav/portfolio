"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { ProjectItem } from "@/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TagList } from "@/components/ui/TagChip";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { TermBar } from "@/components/ui/TermBar";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ProjectCardProps {
  project: ProjectItem;
  compact?: boolean;
  large?: boolean;
}

export function ProjectCard({ project, compact = false, large = false }: ProjectCardProps) {
  const slug = project.slug;
  const cardRef = useRef<HTMLElement>(null);
  const classes = [
    "project-card tilt-card",
    compact && "project-card-compact",
    large && "project-card-feature",
  ]
    .filter(Boolean)
    .join(" ");

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    el.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  return (
    <Card
      ref={cardRef}
      as="article"
      className={classes}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <TermBar path={`~/projects/${slug ?? "untitled"}.ts`} />
      {large ? <span className="feature-badge">Featured build</span> : null}
      {project.category ? (
        <div className="project-meta-row">
          <span className="project-category">{project.category}</span>
        </div>
      ) : null}
      <h3>{project.title}</h3>
      {project.summary ? (
        <p className="project-summary">{project.summary}</p>
      ) : null}
      {project.whyItMatters ? (
        <p className="project-why">
          <strong>Why it matters:</strong> {project.whyItMatters}
        </p>
      ) : null}
      <TagList items={project.technologies} />
      <div className="card-actions">
        {slug ? (
          <Button href={`/projects/${slug}`} variant="primary">
            View Details
          </Button>
        ) : null}
        {project.githubUrl ? (
          <Button href={project.githubUrl} variant="secondary" external>
            GitHub
          </Button>
        ) : null}
        {project.liveDemoUrl ? (
          <Button href={project.liveDemoUrl} variant="secondary" external>
            Live Demo
          </Button>
        ) : null}
      </div>
    </Card>
  );
}

interface ProjectsSectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  projects: ProjectItem[];
  showViewAll?: boolean;
}

export function ProjectsSection({
  eyebrow,
  title = "Featured Projects",
  description,
  projects,
  showViewAll = true,
}: ProjectsSectionProps) {
  return (
    <section className="section" id="projects">
      <div className="container">
        <AnimateIn>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </AnimateIn>

        <motion.div
          className="project-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.slug ?? project.title}
              variants={staggerItem}
              className={index === 0 ? "project-grid-feature" : undefined}
            >
              <ProjectCard project={project} large={index === 0} />
            </motion.div>
          ))}
        </motion.div>

        {showViewAll ? (
          <AnimateIn className="section-action-row">
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </AnimateIn>
        ) : null}
      </div>
    </section>
  );
}
