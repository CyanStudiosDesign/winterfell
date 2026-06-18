"use client";

import { cn } from "@/lib/utils";

interface ContextMenuContentProps {
  children: React.ReactNode;
  x?: number;
  y?: number;
}

export function ContextMenuContent({
  children,
  x = 0,
  y = 0,
}: ContextMenuContentProps) {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        left: x,
        top: y,
      }}
      className={cn(
        "fixed z-50",
        "w-[90vw]",
        "max-w-xs",
        "rounded-lg",
        "border border-border",
        "bg-canvas",
        "p-1",
        "shadow-md",
      )}
    >
      {children}
    </div>
  );
}
