import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: "article" | "aside" | "div";
}

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ children, className, as: Tag = "div", ...rest }, ref) => {
    return (
      <Tag ref={ref as React.Ref<HTMLDivElement>} className={cn("card", className)} {...rest}>
        {children}
      </Tag>
    );
  },
);
Card.displayName = "Card";
