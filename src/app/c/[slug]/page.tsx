import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { PortfolioHome } from "@/features/portfolio/PortfolioHome";
import { getCandidateBySlug } from "@/lib/candidate";

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
