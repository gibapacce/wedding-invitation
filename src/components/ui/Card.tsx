import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated";
}

export function Card({
  variant = "default",
  className,
  ...props
}: CardProps) {
  const variantStyle =
    variant === "elevated"
      ? "shadow-lg shadow-black/10"
      : "shadow-md shadow-black/5";

  return (
    <div
      className={cn(
        "bg-surface rounded-lg p-6 transition-all duration-200",
        variantStyle,
        className
      )}
      {...props}
    />
  );
}
