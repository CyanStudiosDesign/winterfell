"use client";

import { DrawerProvider } from "./DrawerContext";

interface DrawerProps {
  children: React.ReactNode;
}

export function Drawer({ children }: DrawerProps) {
  return <DrawerProvider>{children}</DrawerProvider>;
}
