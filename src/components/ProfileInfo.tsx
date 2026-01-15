import { cn } from "@/lib/utils";
import { MailIcon, MapIcon, SailboatIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

function Subtitle({
  children,
  className,
  icon,
}: {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}) {
  return (
    <p
      className={cn(
        "text-sm sm:text-md mt-4 sm:mt-6 lg:mt-8 text-muted-foreground inline-flex items-start gap-2 justify-start max-w-87",
        className
      )}
    >
      <div className="size-4 mr-2 shrink-0" aria-hidden="true">
        {icon}
      </div>
      {children}
    </p>
  );
}

export const ProfileInfo = () => {
  return (
    <header className="pt-4 sm:pt-8 lg:pt-16 lg:sticky lg:top-16 self-start mb-8 lg:mb-0">
      <Avatar className="size-24 sm:size-32 lg:size-46 mt-2 sm:mt-4">
        <AvatarImage
          src="/profile.webp"
          alt="Selfie de Luis Alvarez modificada con I.A."
        />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>
      <div className="mt-4 sm:mt-6 lg:mt-8 ml-0 sm:ml-2">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-8 lg:mt-12">
          Luis Alvarez
        </h1>
        <p className="text-base sm:text-lg lg:text-xl mt-2 sm:mt-3 text-muted-foreground max-w-prose">
          Frontend engineer specialized in building modern web applications.
        </p>
        <Subtitle icon={<MapIcon />}>Based in Mexico.</Subtitle>
        <Subtitle icon={<SailboatIcon />}>
          A ship in harbor is safe, but that is not what ships are built for.
        </Subtitle>
        <Subtitle
          className="hover:text-blue-600 focus-within:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 focus-within:border-blue-600"
          icon={<MailIcon />}
        >
          <a
            href="mailto:mrluisfeer@gmail.com"
            className="focus:outline-none focus-visible:outline-2 focus-visible:outline-blue-600 rounded"
          >
            mrluisfeer@gmail.com
          </a>
        </Subtitle>
      </div>
    </header>
  );
};
