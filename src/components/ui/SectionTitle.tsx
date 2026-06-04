import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: "h1" | "h2" | "h3";
  subtitle?: string;
}

export function SectionTitle({
  level = "h2",
  subtitle,
  className,
  children,
  ...props
}: SectionTitleProps) {
  const HeadingTag = level;
  const titleStyle =
    level === "h1"
      ? "text-4xl"
      : level === "h2"
        ? "text-3xl"
        : "text-2xl";

  return (
    <div className={cn("text-center mb-8", className)}>
      <HeadingTag
        className={cn(
          titleStyle,
          "font-serif font-semibold text-text leading-tight"
        )}
        {...props}
      >
        {children}
      </HeadingTag>
      {subtitle && (
        <p className="mt-4 text-lg text-muted font-body">
          {subtitle}
        </p>
      )}
    </div>
  );
}
