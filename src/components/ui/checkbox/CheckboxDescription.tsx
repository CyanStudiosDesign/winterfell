import { cn } from "@/lib/utils";
import React from "react";

interface CheckboxDescriptionProps {
  children: React.ReactNode;
}
export function CheckboxDescription({ children }: CheckboxDescriptionProps) {
  return (
    <div
      className={cn(
        "text-sm  text-fg px-6 leading-none sm:px-8 mt-0 pt-0 sm:py-1 w-full",
      )}
    >
      {children}
    </div>
  );
}
