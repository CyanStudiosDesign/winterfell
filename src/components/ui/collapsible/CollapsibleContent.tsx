"use client";

import { useCollapsible } from "./Collapsible";

type Props = {
  children: React.ReactNode;
  alwaysVisible?: boolean;
};

export function CollapsibleContent({ children, alwaysVisible = false }: Props) {
  const { isOpen } = useCollapsible();

  if (!alwaysVisible && !isOpen) return null;

  return <div>{children}</div>;
}
