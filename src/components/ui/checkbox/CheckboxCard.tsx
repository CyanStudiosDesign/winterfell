"use client";
import { cn } from "@/lib/utils";
import { createContext, useState } from "react";

export const CheckboxCardContext = createContext<{
  checked: boolean;
  onChange: (v: boolean) => void;
} | null>(null);

interface CheckboxCardProps {
  children: React.ReactNode;
}

export function CheckboxCard({ children }: CheckboxCardProps) {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxCardContext.Provider value={{ checked, onChange: setChecked }}>
      <div
        className={cn(
          "flex flex-col  p-2 rounded-lg border transition-all duration-200",
          checked
            ? "bg-primary/10 border-primary text-foreground"
            : "bg-surface border-border hover:bg-muted",
        )}
      >
        {children}
      </div>
    </CheckboxCardContext.Provider>
  );
}
