import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PortfolioHome } from "@/features/portfolio/PortfolioHome";
import { getFeaturedCandidate } from "@/lib/candidate";
import { isSanityConfigured } from "@/sanity";
import { EmptyState } from "@/components/ui/EmptyState";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const candidate = await getFeaturedCandidate();

  if (!candidate) {
    return {
      title: "Portfolio",
      description: "Professional portfolio powered by Sanity CMS",
    };
  }

  return {
    title:
      candidate.seo?.metaTitle ??
      `${candidate.fullName} | ${candidate.professionalTitle ?? "Portfolio"}`,
    description:
      candidate.seo?.metaDescription ??
      candidate.shortBio ??
      candidate.hero?.subheadline,
    keywords: candidate.seo?.keywords,
  };
}

export default async function HomePage() {
  if (!isSanityConfigured) {
    return <EmptyState reason="missing-env" />;
  }

  const candidate = await getFeaturedCandidate();

  if (!candidate) {
    return <EmptyState reason="no-candidate" />;
  }

  return (
    <AppShell candidate={candidate}>
      <PortfolioHome candidate={candidate} />
    </AppShell>
  );
}
