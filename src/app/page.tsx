import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { PortfolioHome } from "@/features/portfolio/PortfolioHome";
import { getFeaturedCandidate } from "@/lib/candidate";

export async function generateMetadata(): Promise<Metadata> {
  const candidate = await getFeaturedCandidate();

  if (!candidate) {
    return {
      title: "Portfolio",
      description: "Professional portfolio",
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
  const candidate = await getFeaturedCandidate();

  if (!candidate) {
    return null;
  }

  return (
    <AppShell candidate={candidate}>
      <PortfolioHome candidate={candidate} />
    </AppShell>
  );
}
