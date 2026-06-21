import { createClient, type QueryParams } from "next-sanity";
import {
  apiVersion,
  dataset,
  isSanityConfigured,
  projectId,
} from "./env";

export { apiVersion, dataset, isSanityConfigured, projectId };

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: projectId!,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
      stega: {
        enabled: process.env.NODE_ENV === "development",
        studioUrl: "/studio",
      },
    })
  : null;

export async function sanityFetch<T>({
  query,
  params = {},
  revalidate = 60,
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
}): Promise<T | null> {
  if (!sanityClient) {
    return null;
  }

  return sanityClient.fetch<T>(query, params, {
    next: revalidate === false ? { revalidate: 0 } : { revalidate },
  });
}
