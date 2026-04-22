export function SkipLink({
  targetId = "main-content",
  label = "Saltar al contenido principal",
}: {
  targetId?: string;
  label?: string;
}) {
  return (
    <a
      href={`#${targetId}`}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:inline-flex focus:items-center focus:gap-2 focus:rounded-full focus:border focus:border-foreground/20 focus:bg-foreground focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
    >
      {label}
    </a>
  );
}
