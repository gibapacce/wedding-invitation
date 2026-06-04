import { cn } from "@/lib/utils";
import React from "react";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  const orientationStyle =
    orientation === "horizontal"
      ? "w-full h-[1px]"
      : "h-full w-[1px]";

  return (
    <hr
      className={cn(
        "bg-secondary border-none",
        orientationStyle,
        className
      )}
      {...props}
    />
  );
}
