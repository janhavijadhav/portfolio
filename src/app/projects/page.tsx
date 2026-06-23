import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ProjectCard } from "@/features/projects/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedCandidate } from "@/lib/candidate";
import { sortByOrder } from "@/lib/utils";

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
  const candidate = await getFeaturedCandidate();

  if (!candidate) {
    return null;
  }

  const projects = sortByOrder(candidate.projects ?? []);

  return (
    <AppShell candidate={candidate}>
      <section className="section page-offset">
        <div className="container">
          <Link href="/" className="back-link">
            ← Back to Home
          </Link>
          <SectionHeader
            eyebrow="Projects"
            title="All Projects"
            description="End-to-end builds spanning agentic AI, cloud data engineering, ML/NLP pipelines, streaming systems, and computer vision."
          />
          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug ?? project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
