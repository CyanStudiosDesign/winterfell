"use client";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useContext, useState } from "react";
import { CheckboxCardContext } from "./CheckboxCard";

interface CheckboxIndicatorProps {
  disabled?: boolean;
}

export function CheckboxIndicator({
  disabled = false,
}: CheckboxIndicatorProps) {
  const [internalChecked, setInternalChecked] = useState(false);

  const { checked, onChange } = useContext(CheckboxCardContext) ?? {
    checked: internalChecked,
    onChange: setInternalChecked,
  };

  return (
    <div
      onClick={() => !disabled && onChange(!checked)}
      className={cn(
        "flex shrink-0 h-4 w-4 sm:h-6 sm:w-6 items-center justify-center border-2 border-border rounded-md transition-all",
        disabled ? "opacity-50 cursor-not-allowed bg-muted" : "cursor-pointer",
        checked && !disabled && "bg-primary border-primary text-fg-inverse",
        !checked && "bg-surface",
      )}
    >
      {checked && !disabled && <Check className={cn("h-4 w-4")} />}
    </div>
  );
}
