"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

type ResizableProps = {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  defaultLeftWidth?: number;
  minLeftWidth?: number;
  maxLeftWidth?: number;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
  dividerClassName?: string;
  direction?: "horizontal" | "vertical";
};

export default function Resizable({
  leftPanel,
  rightPanel,
  defaultLeftWidth = 50,
  minLeftWidth = 2,
  maxLeftWidth = 98,
  className,
  leftClassName,
  rightClassName,
  dividerClassName,
  direction = "horizontal",
}: ResizableProps) {
  const [leftWidth, setLeftWidth] = useState(defaultLeftWidth);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const containerSize = direction === "horizontal" ? rect.width : rect.height;

    const mousePosition =
      direction === "horizontal"
        ? event.clientX - rect.left
        : event.clientY - rect.top;

    const newLeftWidth = (mousePosition / containerSize) * 100;

    const clampedWidth = Math.min(
      Math.max(newLeftWidth, minLeftWidth),
      maxLeftWidth,
    );
    setLeftWidth(clampedWidth);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={cn(
        "flex h-full w-full",
        direction === "vertical" && "flex-col",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className={cn("h-full", leftClassName)}
        style={
          direction === "horizontal"
            ? { width: `${leftWidth}%` }
            : { height: `${leftWidth}%` }
        }
      >
        {leftPanel}
      </div>

      <div
        className={cn(
          direction === "horizontal"
            ? "h-full w-1 cursor-col-resize"
            : "h-1 w-full cursor-row-resize",
          "bg-border hover:bg-fg-muted transition-colors",
          dividerClassName,
        )}
        onMouseDown={() => setIsDragging(true)}
      />

      <div
        className={cn("h-full", rightClassName)}
        style={
          direction === "horizontal"
            ? { width: `${100 - leftWidth}%` }
            : { height: `${100 - leftWidth}%` }
        }
      >
        {rightPanel}
      </div>
    </div>
  );
}
