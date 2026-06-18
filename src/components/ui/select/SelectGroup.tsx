"use client";

import { cn } from "@/lib/utils";
import React from "react";

type SelectGroupProps = {
  title: string;
  children: React.ReactNode;
  onSelect?: (value: string) => void;
  showDivider?: boolean;
};

export function SelectGroup({
  title,
  children,
  onSelect,
  showDivider = true,
}: SelectGroupProps) {
  return (
    <div
      className={cn("px-4", "py-2", { "border border-border": showDivider })}
    >
      <p className={cn("text-sm font-medium text-fg-muted")}>{title}</p>
      <div className={cn("mt-1")}>
        {React.Children.map(children, (child: any) =>
          React.cloneElement(child, {
            onSelect,
          }),
        )}
      </div>
    </div>
  );
}
