import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TextSeparatorProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function TextSeparator({ children, id, className }: TextSeparatorProps) {
  return (
    <div className={cn("block p-2 sm:p-3 lg:p-4", className)}>
      <h2
        id={id}
        className="text-title leading-tight font-semibold tracking-tight capitalize"
      >
        {children}
      </h2>
    </div>
  );
}
