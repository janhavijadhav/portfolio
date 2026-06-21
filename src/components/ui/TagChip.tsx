interface TagChipProps {
  label: string;
  variant?: "accent" | "neutral";
}

export function TagChip({ label, variant = "accent" }: TagChipProps) {
  return (
    <span className={variant === "neutral" ? "skill-pill" : "tag-chip"}>
      {label}
    </span>
  );
}

interface TagListProps {
  items?: string[];
  variant?: "accent" | "neutral";
  className?: string;
}

export function TagList({
  items = [],
  variant = "accent",
  className = "tag-list",
}: TagListProps) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={className}>
      {items.map((item) => (
        <TagChip key={item} label={item} variant={variant} />
      ))}
    </div>
  );
}
