import { cn } from "@/lib/utils";

type SelectItemProps = {
  children: React.ReactNode;
  onSelect?: (value: string) => void;
};

export function SelectItem({ children, onSelect }: SelectItemProps) {
  return (
    <div
      onClick={() => onSelect?.(children as string)}
      className={cn(
        "cursor-pointer",
        "px-4",
        "py-2",
        "text-sm",
        "text-fg",
        "transition-colors",
        "duration-fast",
        "hover:bg-subtle",
        "rounded-md",
      )}
    >
      {children}
    </div>
  );
}
