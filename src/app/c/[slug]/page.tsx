import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { PortfolioHome } from "@/features/portfolio/PortfolioHome";
import { EmptyState } from "@/components/ui/EmptyState";
import { getCandidateBySlug } from "@/lib/candidate";
import { isSanityConfigured } from "@/sanity";

export const revalidate = 60;

interface CandidatePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CandidatePageProps): Promise<Metadata> {
  const { slug } = await params;
  const candidate = await getCandidateBySlug(slug);

  if (!candidate) {
    return { title: "Candidate Not Found" };
  }

  return {
    title:
      candidate.seo?.metaTitle ??
      `${candidate.fullName} | ${candidate.professionalTitle ?? "Portfolio"}`,
    description: candidate.seo?.metaDescription ?? candidate.shortBio,
  };
}

export default async function CandidatePage({ params }: CandidatePageProps) {
  if (!isSanityConfigured) {
    return <EmptyState reason="missing-env" />;
  }

  const { slug } = await params;
  const candidate = await getCandidateBySlug(slug);

  if (!candidate) {
    notFound();
  }

  return (
    <AppShell candidate={candidate}>
      <PortfolioHome candidate={candidate} />
    </AppShell>
  );
}
