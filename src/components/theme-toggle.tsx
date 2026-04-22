import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function useHasMounted() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useHasMounted();
  const isDark = mounted && resolvedTheme === "dark";
  const nextLabel = isDark ? "Activar modo claro" : "Activar modo oscuro";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={nextLabel}
      aria-pressed={isDark}
      title={nextLabel}
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground/80 shadow-sm backdrop-blur-md transition-[background-color,color,border-color,transform] hover:-translate-y-px hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <SunIcon
        className={cn(
          "size-[1.15rem] transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
          mounted && isDark
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100",
        )}
        aria-hidden="true"
      />
      <MoonIcon
        className={cn(
          "absolute size-[1.15rem] transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
          mounted && isDark
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0",
        )}
        aria-hidden="true"
      />
      <span className="sr-only">{nextLabel}</span>
    </button>
  );
}
