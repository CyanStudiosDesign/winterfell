"use client";

import { cn } from "@/lib/utils";

interface ContextMenuItemProps {
  children?: React.ReactNode;
  separator?: boolean;
  disabled?: boolean;
}

export function ContextMenuItem({
  children,
  separator,
  disabled,
}: ContextMenuItemProps) {
  if (separator) {
    return <div className="my-1 border-t border-border" />;
  }

  return (
    <button
      disabled={disabled}
      className={cn(
        "w-full rounded-md",
        "px-3 py-2 sm:px-4 sm:py-3",
        "text-left text-sm sm:text-base",
        "transition-colors",
        disabled
          ? "cursor-not-allowed bg-disabled text-fg-subtle"
          : "text-fg hover:bg-subtle",
      )}
    >
      {children}
    </button>
  );
}
