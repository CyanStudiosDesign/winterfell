"use client";

import { ChevronsUpDown } from "lucide-react";
import { useCollapsible } from "./Collapsible";

export function CollapsibleTrigger() {
  const { isOpen, setIsOpen } = useCollapsible();

  return (
    <button
      onClick={() => setIsOpen((prev) => !prev)}
      className="w-10 h-10 rounded-lg border border-border bg-canvas flex items-center justify-center hover:bg-surface/80 active:scale-95 transition"
    >
      <ChevronsUpDown
        className={`h-4 w-4 text-gray-500 transition-transform ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}
