"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useDrawer } from "./DrawerContext";

interface DrawerContentProps {
  children: React.ReactNode;
}

export function DrawerContent({ children }: DrawerContentProps) {
  const { open, setOpen, isDragging, setIsDragging, currentY, setCurrentY } =
    useDrawer();

  const [mounted, setMounted] = useState(false);
  const [startY, setStartY] = useState(0);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      const timeout = setTimeout(() => {
        setMounted(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [open]);

  // Drag Handlers
  const handleStart = (clientY: number) => {
    setIsDragging(true);
    setStartY(clientY);
  };

  const handleMove = (clientY: number) => {
    if (!isDragging) return;
    const deltaY = clientY - startY;
    if (deltaY > 0) {
      setCurrentY(deltaY);
    }
  };

  const handleEnd = () => {
    if (currentY > 100) {
      setOpen(false);
    }
    setIsDragging(false);
    setCurrentY(0);
  };

  if (!mounted && !open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-modal flex items-end">
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "absolute inset-0 bg-inverse/50 backdrop-blur-sm",
          "transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <div
        ref={drawerRef}
        className={cn(
          "relative w-full max-h-[85vh] rounded-t-3xl border-t border-border bg-surface shadow-lg flex flex-col",
          !isDragging && "transition-transform duration-300 ease-out",
        )}
        style={{
          transform: !open
            ? "translateY(100%)"
            : isDragging
              ? `translateY(${currentY}px)`
              : "translateY(0px)",
          transition: isDragging
            ? "none"
            : "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className="flex justify-center py-4 cursor-grab active:cursor-grabbing select-none"
          // Mouse Events
          onMouseDown={(e) => handleStart(e.clientY)}
          onMouseMove={(e) => handleMove(e.clientY)}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          // Touch Events
          onTouchStart={(e) => handleStart(e.touches[0].clientY)}
          onTouchMove={(e) => handleMove(e.touches[0].clientY)}
          onTouchEnd={handleEnd}
        >
          <div className="h-1.5 w-16 rounded-full bg-subtle" />
        </div>

        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
}
