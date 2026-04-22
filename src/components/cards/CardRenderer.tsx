import { FigmaIcon } from "@/components/icons/figma";
import { GitHubIcon } from "@/components/icons/github";
import { InstagramIcon } from "@/components/icons/instagram";
import { LeetcodeIcon } from "@/components/icons/leetcode";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { PortfolioIcon } from "@/components/icons/portfolio";
import { SpotifyIcon } from "@/components/icons/spotify";
import { TwitchIcon } from "@/components/icons/twitch";
import { TwitterIcon } from "@/components/icons/twitter";
import { YoutubeIcon } from "@/components/icons/youtube";
import { cn } from "@/lib/utils";
import {
  socialCardPresets,
  type SocialMediaPreset,
} from "@/constants/socialMediaPresets";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { AppCardItem, CardIconKey, LinkCardItem } from "@/data/appContent";
import {
  AtSignIcon,
  AudioWaveformIcon,
  CodeIcon,
  FigmaIcon as LucideFigmaIcon,
  GitBranchPlusIcon,
  PlusIcon,
  UserIcon,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";
import { ImageGrid } from "./base/ImageGrid";
import { SingleImage } from "./base/SingleImage";
import { SocialGalleryCard } from "./base/SocialGalleryCard";
import { maxImagesByLayout } from "./base/SocialGalleryCard.variants";
import { formatFollowerCount, getValidImages } from "./base/SocialGalleryCard.utils";
import { YoutubeEmbedCard } from "./base/YoutubeEmbedCard";

const cardSizeClasses = {
  default: "w-full max-w-[390px] min-h-[190px]",
  compact: "w-full max-w-[200px] min-h-[190px] md:w-[190px]",
  large: "w-full max-w-[450px] min-h-52",
} as const;

const iconFactory: Record<CardIconKey, () => ReactNode> = {
  instagram: () => <InstagramIcon />,
  twitter: () => <TwitterIcon />,
  spotify: () => <SpotifyIcon />,
  github: () => <GitHubIcon />,
  linkedin: () => <LinkedinIcon />,
  twitch: () => <TwitchIcon />,
  figma: () => <FigmaIcon />,
  leetcode: () => <LeetcodeIcon />,
  portfolio: () => <PortfolioIcon />,
  youtube: () => <YoutubeIcon />,
  "at-sign": () => <AtSignIcon className="size-4" />,
  "audio-waveform": () => <AudioWaveformIcon className="size-4" />,
  code: () => <CodeIcon className="size-4" />,
  "figma-lucide": () => <LucideFigmaIcon className="size-4" />,
  "git-branch-plus": () => <GitBranchPlusIcon className="size-4" />,
  plus: () => <PlusIcon className="size-4" />,
  user: () => <UserIcon className="size-4" />,
};

function resolveIcon(icon?: CardIconKey): ReactNode | undefined {
  if (!icon) return undefined;
  return iconFactory[icon]?.();
}

function buildRightContent(card: LinkCardItem): ReactNode | undefined {
  if (!card.rightContent) return undefined;

  if (card.rightContent.type === "github-calendar") {
    const {
      username,
      blockSize = 13.5,
      blockMargin = 5,
      blockRadius = 2,
      colorScheme = "light",
      limit = 60,
      maxWidth = "200px",
    } = card.rightContent;

    return (
      <GitHubCalendar
        username={username}
        blockSize={blockSize}
        blockMargin={blockMargin}
        blockRadius={blockRadius}
        fontSize={0}
        colorScheme={colorScheme}
        showColorLegend={false}
        transformData={(data) => data.slice(-limit)}
        style={{ maxWidth, height: "inherit" }}
      />
    );
  }

  return undefined;
}

function BaseFallbackCard({
  card,
  icon,
  actionIcon,
  rightContent,
  entryDelay = 0,
}: {
  card: LinkCardItem;
  icon: ReactNode;
  actionIcon?: ReactNode;
  rightContent?: ReactNode;
  entryDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const validImages = getValidImages(card.images ?? []);
  const isSingleImage = card.singleImageMode || validImages.length === 1;
  const layout = card.gridLayout ?? "2x2";
  const maxImages = card.maxImages ?? maxImagesByLayout[layout];
  const displayImages = validImages.slice(0, isSingleImage ? 1 : maxImages);
  const sizeClass = cardSizeClasses[card.baseStyle?.size ?? "default"];
  const showAction = !card.hideAction;
  const actionLabel = card.actionLabel ?? "Open";

  const renderMedia = () => {
    if (rightContent) {
      return (
        <div className="ml-4 flex h-full shrink-0 items-center justify-center overflow-hidden">
          {rightContent}
        </div>
      );
    }

    if (displayImages.length === 0) return null;

    return isSingleImage ? (
      <SingleImage
        src={displayImages[0]}
        platform={card.platform}
        hover={card.imageHover}
        showOverlay={card.showImageOverlay}
        className={card.imageClassName}
      />
    ) : (
      <ImageGrid
        images={displayImages}
        platform={card.platform}
        layout={card.gridLayout}
        imageSize={card.imageSize}
        imageHover={card.imageHover}
        showOverlay={card.showImageOverlay}
        imageClassName={card.imageClassName}
        imagePositions={card.imagePositions}
      />
    );
  };

  return (
    <motion.a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${card.platform} — ${card.username} (se abre en una pestaña nueva)`}
      className="group/card inline-block rounded-4xl focus-visible:outline-none"
      initial={!prefersReducedMotion ? { opacity: 0, y: 14 } : undefined}
      animate={
        !prefersReducedMotion
          ? {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.32,
                ease: [0.22, 1, 0.36, 1],
                delay: entryDelay,
              },
            }
          : undefined
      }
      whileHover={
        !prefersReducedMotion
          ? {
              y: -4,
              scale: 1.01,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 24,
                mass: 0.6,
              },
            }
          : undefined
      }
      whileTap={
        !prefersReducedMotion
          ? {
              scale: 0.995,
              transition: { duration: 0.16, ease: "easeOut" },
            }
          : undefined
      }
    >
      <article
        className={cn(
          "flex h-full items-start justify-between gap-4 rounded-4xl border border-border/60 bg-background/60 p-4 transition-[box-shadow,background-color,border-color] duration-300 ease-out hover:bg-muted/20 hover:shadow-sm motion-reduce:transition-none",
          sizeClass,
          card.baseStyle?.className,
        )}
      >
        <div className="flex h-full min-w-0 flex-1 flex-col">
          <div className="size-10 shrink-0">{icon}</div>
          <div className="mt-3 space-y-1">
            {card.title && (
              <p className="text-small leading-tight font-semibold text-foreground">
                {card.title}
              </p>
            )}
            <p className="text-small truncate font-medium text-muted-foreground">
              {card.username}
            </p>
            {card.subtitle && (
              <p className="text-caption line-clamp-2 text-muted-foreground/85">
                {card.subtitle}
              </p>
            )}
          </div>
          {showAction && (
            <div className="mt-auto pt-3">
              <span className="text-caption inline-flex items-center gap-1 text-muted-foreground">
                {actionIcon}
                {actionLabel}
                {card.followerCount !== undefined && (
                  <span className="opacity-90">
                    {formatFollowerCount(card.followerCount)}
                  </span>
                )}
              </span>
            </div>
          )}
        </div>
        {renderMedia()}
      </article>
    </motion.a>
  );
}

function LinkCardRenderer({
  card,
  entryDelay = 0,
}: {
  card: LinkCardItem;
  entryDelay?: number;
}) {
  const icon = resolveIcon(card.icon);
  if (!icon) return null;

  const actionIcon = resolveIcon(card.actionIcon);
  const rightContent = buildRightContent(card);
  const preset: SocialMediaPreset | undefined = card.socialStyle?.preset
    ? socialCardPresets[card.socialStyle.preset]
    : undefined;

  if (!card.socialStyle) {
    return (
      <BaseFallbackCard
        card={card}
        icon={icon}
        actionIcon={actionIcon}
        rightContent={rightContent}
        entryDelay={entryDelay}
      />
    );
  }

  return (
    <SocialGalleryCard
      icon={icon}
      platform={card.platform}
      username={card.username}
      url={card.url}
      title={card.title}
      subtitle={card.subtitle ?? preset?.subtitle}
      images={card.images}
      rightContent={rightContent}
      rightContentClassName={cn(
        card.socialStyle.rightContentClassName,
        preset?.rightContentClassName,
      )}
      actionLabel={card.actionLabel ?? preset?.actionLabel}
      actionIcon={actionIcon}
      followerCount={card.followerCount}
      hideAction={card.hideAction ?? preset?.hideAction}
      buttonPlatform={card.socialStyle.buttonPlatform}
      buttonClassName={cn(preset?.buttonClassName, card.socialStyle.buttonClassName)}
      variant={card.socialStyle.variant}
      hover={card.socialStyle.hover}
      gridLayout={card.gridLayout}
      imageSize={card.imageSize}
      imageHover={card.imageHover}
      maxImages={card.maxImages}
      imagePositions={card.imagePositions}
      showImageOverlay={card.showImageOverlay}
      singleImageMode={card.singleImageMode}
      imageClassName={card.imageClassName}
      cardClassName={cn(preset?.cardClassName, card.socialStyle.cardClassName)}
      entryDelay={entryDelay}
    />
  );
}

export function CardRenderer({
  card,
  entryDelay = 0,
}: {
  card: AppCardItem;
  entryDelay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (card.type === "youtube-embed") {
    return (
      <motion.div
        className="inline-flex rounded-4xl"
        initial={!prefersReducedMotion ? { opacity: 0, y: 14 } : undefined}
        whileInView={
          !prefersReducedMotion
            ? {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.38,
                  ease: [0.22, 1, 0.36, 1],
                  delay: entryDelay,
                },
              }
            : undefined
        }
        viewport={{ once: true, margin: "-40px" }}
        whileHover={
          !prefersReducedMotion
            ? {
                y: -4,
                scale: 1.01,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  mass: 0.6,
                },
              }
            : undefined
        }
        whileTap={
          !prefersReducedMotion
            ? {
                scale: 0.995,
                transition: { duration: 0.16, ease: "easeOut" },
              }
            : undefined
        }
      >
        <YoutubeEmbedCard url={card.url} className={card.className} />
      </motion.div>
    );
  }

  return <LinkCardRenderer card={card} entryDelay={entryDelay} />;
}
