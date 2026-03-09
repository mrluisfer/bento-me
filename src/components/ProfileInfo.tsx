import type { ProfileContent, ProfileIconKey } from "@/data/appContent";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import {
  BriefcaseBusiness,
  MailIcon,
  MapIcon,
  SailboatIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
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
    <div
      className={cn(
        "text-small mt-4 sm:mt-6 lg:mt-8 text-muted-foreground inline-flex items-start gap-2 justify-center text-center mx-auto xl:mx-0 xl:justify-start xl:text-left md:max-w-70 xl:max-w-87",
        className,
      )}
    >
      {icon && (
        <span className="size-4 mr-2 shrink-0 inline-flex" aria-hidden="true">
          {icon}
        </span>
      )}
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
    </div>
  );
}

const profileIconMap: Record<ProfileIconKey, ReactNode> = {
  map: <MapIcon />,
  quote: <SailboatIcon />,
  mail: <MailIcon />,
  portfolio: <BriefcaseBusiness />,
};

export const ProfileInfo = ({ profile }: { profile: ProfileContent }) => {
  const [avatarState, setAvatarState] = useState<"loading" | "loaded" | "error">(
    "loading",
  );

  return (
    <header className="pt-2 sm:pt-5 xl:pt-10 xl:sticky xl:top-10 xl:self-start xl:h-fit mb-8 xl:mb-0">
      <Avatar className="size-24 sm:size-32 lg:size-46 mt-2 sm:mt-4 mx-auto xl:mx-0 overflow-hidden">
        <motion.div
          className="size-full"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{
            opacity: avatarState === "loaded" ? 1 : 0,
            scale: avatarState === "loaded" ? 1 : 1.04,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <AvatarImage
            src={profile.avatar.src}
            alt={profile.avatar.alt}
            onLoad={() => setAvatarState("loaded")}
            onError={() => setAvatarState("error")}
          />
        </motion.div>

        <AnimatePresence>
          {avatarState !== "loaded" && (
            <motion.div
              key={`avatar-fallback-${avatarState}`}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.94, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <AvatarFallback className="size-full">
                {profile.avatar.fallback}
              </AvatarFallback>
            </motion.div>
          )}
        </AnimatePresence>
      </Avatar>
      <div className="mt-4 sm:mt-6 lg:mt-8 ml-0 xl:ml-2">
        <a
          href={profile.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 rounded w-fit mx-auto xl:mx-0 block"
        >
          <TextAnimate
            animation="scaleUp"
            by="word"
            duration={0.7}
            delay={0.05}
            once
            as={"h1"}
            className="text-title font-bold mt-4 text-center xl:text-left"
          >
            {profile.name}
          </TextAnimate>
        </a>
        <div className="mt-2 sm:mt-3 flex flex-wrap justify-center xl:justify-start">
          <TextAnimate
            animation="slideUp"
            by="word"
            duration={0.6}
            delay={0.12}
            once
            className="text-body text-muted-foreground text-center xl:text-left mx-auto xl:mx-0 max-w-[22ch] sm:max-w-[30ch] md:max-w-[34ch] lg:max-w-[38ch] xl:max-w-80"
          >
            {profile.description}
          </TextAnimate>
        </div>
        <div
          className={
            "flex flex-col items-center md:flex-row md:flex-wrap md:justify-center md:gap-4 xl:items-start xl:justify-start xl:flex-nowrap xl:flex-col xl:gap-0"
          }
        >
          {profile.details.map((detail) => {
            if (detail.href) {
              return (
                <a
                  key={detail.id}
                  href={detail.href}
                  className="w-fit mx-auto xl:mx-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Subtitle
                    className="hover:text-blue-600 focus-within:text-blue-600 transition-colors hover:underline focus-within:underline"
                    icon={profileIconMap[detail.icon]}
                    animation={detail.animation}
                    delay={detail.delay}
                  >
                    {detail.text}
                  </Subtitle>
                </a>
              );
            }

            return (
              <Subtitle
                key={detail.id}
                icon={profileIconMap[detail.icon]}
                animation={detail.animation}
                delay={detail.delay}
              >
                {detail.text}
              </Subtitle>
            );
          })}
        </div>
      </div>
    </header>
  );
};
