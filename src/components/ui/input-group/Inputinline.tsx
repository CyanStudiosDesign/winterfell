import { EyeOff } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export interface PasswordInputProps {
  className?: string;
  placeholder?: string;
}

export function Inputinline({
  className,
  placeholder = "Enter password",
}: PasswordInputProps) {
  return (
    <div className={cn("relative flex items-center w-full md:w-[350px]")}>
      <input
        type="password"
        placeholder={placeholder}
        className={cn(
          "w-full h-8 pl-4 pr-10 md:pr-12 bg-canvas border border-border rounded-md text-sm md:text-base outline-none focus:ring-2 focus:ring-ring focus:border-transparent placeholder:text-fg-subtle text-fg transition-all",
          className,
        )}
      />

      <EyeOff
        className={cn(
          "absolute right-3 md:right-4 h-4 w-4 md:h-5 md:w-5 text-fg-subtle pointer-events-none",
        )}
      />
    </div>
  );
}
