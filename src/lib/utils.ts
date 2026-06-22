export function sortByOrder<T extends { order?: number }>(items: T[] = []): T[] {
  return [...items].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getSocialUrl(
  links: { platform: string; url: string }[] | undefined,
  platform: string,
): string | undefined {
  return links?.find(
    (link) => link.platform.toLowerCase() === platform.toLowerCase(),
  )?.url;
}

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
