"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface CheckboxLabelProps {
  children: React.ReactNode;
}
export function CheckboxLabel({ children }: CheckboxLabelProps) {
  return (
    <div
      className={cn(
        " flex  gap-2 items-center  sm:text-medium text-fg font-medium w-full  text-base ",
      )}
    >
      {children}
    </div>
  );
}
