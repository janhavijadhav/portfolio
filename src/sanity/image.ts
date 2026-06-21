import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@/types";
import { sanityClient } from "@/sanity";

const builder = sanityClient
  ? createImageUrlBuilder(sanityClient)
  : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder) {
    throw new Error("Sanity client is not configured");
  }

  return builder.image(source);
}

export function getImageUrl(
  source: SanityImageSource | undefined,
  width = 560,
  height = 560,
): string | undefined {
  if (!source || !builder) {
    return undefined;
  }

  return builder.image(source).width(width).height(height).fit("crop").url();
}

export function getFileUrl(
  assetRef: string | undefined,
): string | undefined {
  if (!assetRef || !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return undefined;
  }

  const [, id, extension] = assetRef.match(/^file-(.+)-(\w+)$/) ?? [];
  if (!id || !extension) {
    return undefined;
  }

  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production"}/${id}.${extension}`;
}
