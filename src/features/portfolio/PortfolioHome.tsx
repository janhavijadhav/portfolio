import type { Candidate } from "@/types";
import { sortByOrder } from "@/lib/utils";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/features/projects/ProjectCard";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ResearchSection } from "@/components/sections/ResearchSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";

interface PortfolioHomeProps {
  candidate: Candidate;
}

export function PortfolioHome({ candidate }: PortfolioHomeProps) {
  const featuredProjects = sortByOrder(
    candidate.projects?.filter((project) => project.featured !== false) ?? [],
  );
  const experience = sortByOrder(candidate.experience ?? []);
  const skills = sortByOrder(candidate.skills ?? []);
  const education = sortByOrder(candidate.education ?? []);
  const research = sortByOrder(candidate.research ?? []);
  const certifications = candidate.certifications ?? [];

  return (
    <>
      <HeroSection candidate={candidate} />
      {featuredProjects.length ? (
        <ProjectsSection
          eyebrow={candidate.projectsSection?.eyebrow ?? "Selected Work"}
          title={candidate.projectsSection?.title ?? "Featured Projects"}
          description={
            candidate.projectsSection?.description ??
            "A curated set of projects across machine learning, AI systems, and data workflow engineering."
          }
          projects={featuredProjects}
        />
      ) : null}
      {experience.length ? (
        <ExperienceSection
          eyebrow={candidate.experienceSection?.eyebrow ?? "Work"}
          title={candidate.experienceSection?.title ?? "Experience"}
          description={candidate.experienceSection?.description}
          experience={experience}
        />
      ) : null}
      {skills.length ? (
        <SkillsSection
          eyebrow={candidate.skillsSection?.eyebrow ?? "Capabilities"}
          title={candidate.skillsSection?.title ?? "Skills"}
          description={candidate.skillsSection?.description}
          skills={skills}
        />
      ) : null}
      {education.length ? (
        <EducationSection
          eyebrow={candidate.educationSection?.eyebrow ?? "Academic Background"}
          title={candidate.educationSection?.title ?? "Education"}
          description={candidate.educationSection?.description}
          education={education}
        />
      ) : null}
      {research.length ? (
        <ResearchSection
          eyebrow={candidate.researchSection?.eyebrow ?? "Research & Publications"}
          title={candidate.researchSection?.title ?? "Selected Research"}
          description={candidate.researchSection?.description}
          research={research}
        />
      ) : null}
      <CertificationsSection certifications={certifications} />
      <AboutSection candidate={candidate} />
      <ContactSection candidate={candidate} />
    </>
  );
}
