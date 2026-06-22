import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ProjectDetailView } from "@/features/projects/ProjectDetailView";
import { getFeaturedCandidate } from "@/lib/candidate";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const candidate = await getFeaturedCandidate();
  return (
    candidate?.projects
      ?.filter((project) => project.slug)
      .map((project) => ({ slug: project.slug })) ?? []
  );
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const candidate = await getFeaturedCandidate();
  const project = candidate?.projects?.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | ${candidate?.fullName ?? "Portfolio"}`,
    description: project.detailSummary ?? project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const candidate = await getFeaturedCandidate();

  if (!candidate) {
    return null;
  }

  const project = candidate.projects?.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <AppShell candidate={candidate}>
      <ProjectDetailView project={project} />
    </AppShell>
  );
}
