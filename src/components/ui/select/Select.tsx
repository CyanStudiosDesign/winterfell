"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

import React, { useState, useRef, useEffect } from "react";

interface SelectProps {
  title: string;
  children: React.ReactNode;
}

export function Select({ title, children }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(title);
  const selectRef = useRef<HTMLDivElement>(null);

  function handleSelect(value: string) {
    setSelected(value);
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className=" relative flex w-full max-w-sm flex-col gap-2"
    >
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "focus-ring-visible",
          "flex h-10 w-full items-center justify-between",
          "rounded-md",
          "border-border",
          "bg-surface",
          "px-4",
          "text-sm",
          "font-medium",
          "text-fg",
          "shadow-sm",
          "transition-all",
          "duration-fast",
          "ease-out",
          "hover:bg-subtle",
          "min-h-11",
        )}
      >
        <span className="truncate">{selected}</span>

        <ChevronDown
          size={18}
          className={cn(
            "shrink-0",
            "text-fg-muted",
            "transition-transform",
            "duration-base",
            { "rotate-180": open },
          )}
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute top-full mt-2 z-dropdown",
            "w-full max-h-60 overflow-auto",
            "rounded-md",
            "border-border",
            "bg-surface",
            "shadow-md",
          )}
        >
          {React.Children.map(children, (child: any) => {
            return React.cloneElement(child, {
              onSelect: handleSelect,
            });
          })}
        </div>
      )}
    </div>
  );
}
