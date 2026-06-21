import {
  candidateBySlugQuery,
  featuredCandidateQuery,
  isSanityConfigured,
  sanityFetch,
  type Candidate,
} from "@/sanity";

export async function getFeaturedCandidate(): Promise<Candidate | null> {
  if (!isSanityConfigured) {
    return null;
  }

  const slug = process.env.NEXT_PUBLIC_CANDIDATE_SLUG;

  if (slug) {
    return sanityFetch<Candidate>({
      query: candidateBySlugQuery,
      params: { slug },
    });
  }

  return sanityFetch<Candidate>({
    query: featuredCandidateQuery,
  });
}

export async function getCandidateBySlug(slug: string): Promise<Candidate | null> {
  if (!isSanityConfigured) {
    return null;
  }

  return sanityFetch<Candidate>({
    query: candidateBySlugQuery,
    params: { slug },
  });
}
