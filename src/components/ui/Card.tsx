import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "aside" | "div";
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return <Tag className={cn("card", className)}>{children}</Tag>;
}
