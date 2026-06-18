"use client";

import { createContext, useContext, useState } from "react";

interface DrawerContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
  isDragging: boolean;
  setIsDragging: (dragging: boolean) => void;
  currentY: number;
  setCurrentY: (y: number) => void;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("Drawer components must be used inside Drawer");
  }
  return context;
}

export function DrawerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [currentY, setCurrentY] = useState(0);

  return (
    <DrawerContext.Provider
      value={{
        open,
        setOpen,
        isDragging,
        setIsDragging,
        currentY,
        setCurrentY,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}
