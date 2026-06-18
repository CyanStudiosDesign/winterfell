import React from "react";

type ScrollAreaProps = {
  title?: string;
  items: string[];
  height?: string;
};

export default function ScrollArea({
  title,
  items,
  height = "300px",
}: ScrollAreaProps) {
  return (
    <div
      style={{ height }}
      className="w-60 flex flex-col overflow-y-auto overflow-x-hidden rounded-lg border border-border bg-surface p-4">
      {title && (
        <h2
          className="
            mb-3
            text-base
            font-medium
            text-fg
          "
        >
          {title}
        </h2>
      )}

      {items.map((item) => (
        <div
          key={item}
          className="border-b border-border py-3 text-sm text-fg-muted transition-colors duration-base">
          {item}
        </div>
      ))}
    </div>
  );
}