"use client";

import { createContext, useContext, useState } from "react";

type CollapsibleContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CollapsibleContext = createContext<CollapsibleContextType | null>(null);

export function useCollapsible() {
  const ctx = useContext(CollapsibleContext);
  if (!ctx) {
    throw new Error("useCollapsible must be used inside Collapsible");
  }
  return ctx;
}

export function Collapsible({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapsibleContext.Provider value={{ isOpen, setIsOpen }}>
      <div>{children}</div>
    </CollapsibleContext.Provider>
  );
}
