import type { Candidate } from "@/types";
import { candidate as staticCandidate } from "@/lib/data";

/**
 * Portfolio content is hardcoded in src/lib/data.ts rather than fetched
 * from Sanity, so this is a personal site with no CMS dependency.
 */
export async function getFeaturedCandidate(): Promise<Candidate | null> {
  return staticCandidate;
}

export async function getCandidateBySlug(slug: string): Promise<Candidate | null> {
  return staticCandidate.slug === slug ? staticCandidate : null;
}
