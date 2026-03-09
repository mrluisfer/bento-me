import type { ReactNode } from "react";

export const CardsContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-6 flex flex-1 flex-wrap items-start gap-4 sm:mb-8 sm:gap-5 lg:mb-10 lg:gap-6 xl:gap-7">
      {children}
    </div>
  );
};
