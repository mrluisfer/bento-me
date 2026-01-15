import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { PlusIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../../ui/button";
import { formatFollowerCount } from "./SocialGalleryCard.utils";
import { buttonVariants } from "./SocialGalleryCard.variants";

type ButtonPlatform = VariantProps<typeof buttonVariants>["platform"];

interface CardInfoProps {
  icon: ReactNode;
  username: string;
  title?: string;
  subtitle?: string;
  // Action button
  hideAction?: boolean;
  actionLabel?: string;
  actionIcon?: ReactNode;
  followerCount?: number | string;
  buttonPlatform?: ButtonPlatform;
  buttonClassName?: string;
}

export function CardInfo({
  icon,
  username,
  title,
  subtitle,
  hideAction = false,
  actionLabel = "Follow",
  actionIcon = <PlusIcon className="size-4" />,
  followerCount,
  buttonPlatform = "default",
  buttonClassName,
}: CardInfoProps) {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Platform Icon */}
      <div className="size-10 flex items-center justify-center shrink-0">
        {icon}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col mt-3">
        {title && (
          <p className="text-base font-semibold text-foreground leading-tight">
            {title}
          </p>
        )}

        <p
          className={cn(
            "text-sm font-medium truncate text-muted-foreground",
            title && "mt-1"
          )}
        >
          {username}
        </p>

        {subtitle && (
          <p className="text-xs text-muted-foreground/70 mt-0.5">{subtitle}</p>
        )}
      </div>

      {/* Action Button */}
      {!hideAction && (
        <Button
          className={cn(
            buttonVariants({ platform: buttonPlatform }),
            buttonClassName
          )}
          size="sm"
          asChild
        >
          <span>
            {actionIcon}
            {actionLabel}
            {followerCount !== undefined && (
              <span className="ml-0.5 opacity-90">
                {formatFollowerCount(followerCount)}
              </span>
            )}
          </span>
        </Button>
      )}
    </div>
  );
}
