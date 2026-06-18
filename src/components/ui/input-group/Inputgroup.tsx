import { Search } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export interface SearchInputProps {
  className?: string;
  placeholder?: string;
}

export function Inputgroup({
  className,
  placeholder = "Search...",
}: SearchInputProps) {
  return (
    <div className={cn("relative flex items-center w-full md:w-[350px]")}>
      <Search
        className={cn(
          "absolute left-3 md:left-4 h-4 w-4 md:h-5 md:w-5 text-fg-subtle pointer-events-none",
        )}
      />

      <input
        type="text"
        placeholder={placeholder}
        className={cn(
          "w-full h-8 pl-10 md:pl-12 pr-4 bg-canvas border border-border rounded-md text-sm md:text-base outline-none focus:ring-2 focus:ring-ring focus:border-transparent placeholder:text-fg-subtle text-fg transition-all",
          className,
        )}
      />
    </div>
  );
}
