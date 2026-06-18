import { cn } from "@/lib/utils";
import React from "react";

export function Textarea() {
  return (
    <div className="w-full max-w-full sm:max-w-md md:max-w-3xl mx-auto flex flex-col gap-4">
      <textarea
        className={cn(
          "w-full min-h-8 md:min-h-100px max-h-300px md:max-h-500px resize-y border border-border bg-canvas rounded-md px-3 py-2 text-base md:text-sm placeholder:text-fg-muted focus-visible:outline-none focus-visible:shadow-lg disabled:cursor-not-allowed disabled:opacity-50",
        )}
        placeholder="Type your message here..."
      />

      <textarea
        disabled
        className={cn(
          "w-full min-h-8 md:min-h-100px max-h-300px md:max-h-500px resize-y border border-border bg-canvas rounded-md px-3 py-2 text-base md:text-sm placeholder:text-fg-muted focus-visible:outline-none focus-visible:shadow-lg disabled:cursor-not-allowed disabled:opacity-50",
        )}
        placeholder="Type your message here..."
      />
    </div>
  );
}
