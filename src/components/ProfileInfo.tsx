import { cn } from "@/lib/utils";
import { MailIcon, MapIcon, SailboatIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { TextAnimate, type AnimationVariant } from "./ui/text-animate";

function Subtitle({
  children,
  className,
  icon,
  animation = "blurInUp",
  delay = 0,
  duration = 0.45,
  by = "word",
}: {
  children: ReactNode | string;
  className?: string;
  icon?: ReactNode;
  animation?: string;
  delay?: number;
  duration?: number;
  by?: "text" | "word" | "character" | "line";
}) {
  return (
    <p
      className={cn(
        "text-sm sm:text-md mt-4 sm:mt-6 lg:mt-8 text-muted-foreground inline-flex items-start gap-2 justify-start md:max-w-70 xl:max-w-87",
        className
      )}
    >
      <div className="size-4 mr-2 shrink-0" aria-hidden="true">
        {icon}
      </div>
      <TextAnimate
        as={"span"}
        animation={animation as AnimationVariant}
        by={by}
        delay={delay}
        duration={duration}
        once
      >
        {children as string}
      </TextAnimate>
    </p>
  );
}

export const ProfileInfo = () => {
  return (
    <header className="pt-4 sm:pt-8 lg:pt-16 lg:sticky lg:top-16 lg:self-start lg:h-fit mb-8 lg:mb-0">
      <Avatar className="size-24 sm:size-32 lg:size-46 mt-2 sm:mt-4 mx-auto lg:mx-0">
        <AvatarImage
          src="/profile.webp"
          alt="Selfie de Luis Alvarez modificada con I.A."
        />
        <AvatarFallback>LA</AvatarFallback>
      </Avatar>
      <div className="mt-4 sm:mt-6 lg:mt-8 ml-0 sm:ml-2">
        <a
          href="https://mrluisfer.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 rounded"
        >
          <TextAnimate
            animation="scaleUp"
            by="word"
            duration={0.7}
            delay={0.05}
            once
            as={"h1"}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 sm:mt-8 lg:mt-12 text-center lg:text-left"
          >
            Luis Alvarez
          </TextAnimate>
        </a>
        <TextAnimate
          animation="slideUp"
          by="word"
          duration={0.6}
          delay={0.12}
          once
          className="text-base sm:text-lg lg:text-xl mt-2 sm:mt-3 text-muted-foreground max-w-prose md:max-w-75 xl:max-w-none text-center lg:text-left mx-auto lg:mx-0"
        >
          Frontend engineer specialized in building modern web applications.
        </TextAnimate>
        <div
          className={
            "md:flex gap-4 md:justify-center lg:justify-start lg:flex-wrap lg:flex-col lg:gap-0"
          }
        >
          <Subtitle icon={<MapIcon />} animation="slideLeft" delay={0.15}>
            Based in Mexico.
          </Subtitle>
          <Subtitle icon={<SailboatIcon />} animation="slideRight" delay={0.25}>
            A ship in harbor is safe, but that is not what ships are built for.
          </Subtitle>
          <a href="mailto:mrluisfeer@gmail.com">
            <Subtitle
              className="hover:text-blue-600 focus-within:text-blue-600 transition-colors hover:underline focus-within:underline"
              icon={<MailIcon />}
              animation="blurIn"
              delay={0.35}
            >
              mrluisfeer@gmail.com
            </Subtitle>
          </a>
        </div>
      </div>
    </header>
  );
};
