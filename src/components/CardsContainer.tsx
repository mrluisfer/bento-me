import type { ReactNode } from "react";

export const CardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-start gap-4 sm:gap-6 lg:gap-12 flex-wrap flex-1 mb-6 sm:mb-8 lg:mb-12">
      {children}
    </div>
  );
};
