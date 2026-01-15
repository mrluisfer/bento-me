import type { ReactNode } from "react";

export function TextSeparator({ children }: { children: ReactNode }) {
  return (
    <div className="block p-2 sm:p-3 lg:p-4" role="heading" aria-level={2}>
      <p className="text-lg sm:text-xl leading-6 sm:leading-7 font-semibold capitalize">
        {children}
      </p>
    </div>
  );
}
