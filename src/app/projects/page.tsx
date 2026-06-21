import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { getFeaturedCandidate } from "@/lib/candidate";
import { isSanityConfigured } from "@/sanity";
import { sortByOrder } from "@/lib/utils";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const candidate = await getFeaturedCandidate();

  return {
    title: candidate
      ? `Projects | ${candidate.fullName}`
      : "Projects | Portfolio",
    description:
      candidate?.projectsSection?.description ??
      "Selected work across machine learning, LLM systems, experimentation, and data workflows.",
  };
}

export default async function ProjectsPage() {
  if (!isSanityConfigured) {
    return <EmptyState reason="missing-env" />;
  }

  const candidate = await getFeaturedCandidate();

  if (!candidate) {
    return <EmptyState reason="no-candidate" />;
  }

  const projects = sortByOrder(candidate.projects ?? []);

  return (
    <AppShell candidate={candidate}>
      <section className="section page-offset">
        <div className="container">
          <SectionHeader
            eyebrow="Projects"
            title="Selected Work"
            description="A curated set of work across machine learning, LLM systems, experimentation, and data workflows."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug ?? project.title} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
