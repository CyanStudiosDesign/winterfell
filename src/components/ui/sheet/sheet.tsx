"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type SheetProps = {
  children: React.ReactNode;
  className?: string;
};

export const Sheet = ({ children, className }: SheetProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="bg-primary text-fg-inverse px-4 py-2 rounded-md"
      >
        Open Sheet
      </button>

      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-200",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-full sm:w-96 bg-surface border-l border-border shadow-md p-4 transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
          className,
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="ml-auto flex text-fg-muted hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};
