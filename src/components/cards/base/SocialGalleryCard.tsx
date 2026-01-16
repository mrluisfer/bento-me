// components/cards/social/SocialGalleryCard.tsx
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { Card, CardContent } from "../../ui/card";
import { CardInfo } from "./CardInfo";
import { ImageGrid } from "./ImageGrid";
import { SingleImage } from "./SingleImage";
import { getValidImages } from "./SocialGalleryCard.utils";
import {
  buttonVariants,
  cardVariants,
  gridVariants,
  imageVariants,
  maxImagesByLayout,
} from "./SocialGalleryCard.variants";

export type CardVariants = VariantProps<typeof cardVariants>;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
export type GridVariants = VariantProps<typeof gridVariants>;
export type ImageVariants = VariantProps<typeof imageVariants>;

export interface SocialGalleryCardProps extends CardVariants {
  // Required
  icon: ReactNode;
  platform: string;
  username: string;
  url: string;

  // Content
  images?: string[];
  title?: string;
  subtitle?: string;

  /**
   * Contenido personalizado para el lado derecho.
   * Cuando se proporciona, reemplaza las imágenes.
   */
  rightContent?: ReactNode;

  /**
   * Clases adicionales para el contenedor del contenido derecho.
   * Útil para ajustar el tamaño, padding, etc.
   */
  rightContentClassName?: string;

  // Action button
  actionLabel?: string;
  actionIcon?: ReactNode;
  followerCount?: number | string;
  hideAction?: boolean;
  buttonPlatform?: ButtonVariants["platform"];
  buttonClassName?: string;

  // Images config
  gridLayout?: GridVariants["layout"];
  imageSize?: ImageVariants["size"];
  imageHover?: ImageVariants["hover"];
  maxImages?: number;
  imagePositions?: string[];
  showImageOverlay?: boolean;
  singleImageMode?: boolean;
  imageClassName?: string;

  // Card styles
  cardClassName?: string;
}

export function SocialGalleryCard({
  // Card variants
  variant = "default",
  hover = "subtle",

  // Required props
  icon,
  platform,
  username,
  url,

  // Content
  images = [],
  title,
  subtitle,
  rightContent,
  rightContentClassName,

  // Action button
  actionLabel = "Follow",
  actionIcon,
  followerCount,
  hideAction = false,
  buttonPlatform = "default",
  buttonClassName,

  // Images config
  gridLayout = "2x2",
  imageSize = "md",
  imageHover = "scale",
  maxImages,
  imagePositions,
  showImageOverlay = false,
  singleImageMode = false,
  imageClassName,

  // Card styles
  cardClassName,
}: SocialGalleryCardProps) {
  const validImages = getValidImages(images);
  const isSingleImage = singleImageMode || validImages.length === 1;
  const effectiveMaxImages =
    maxImages ?? maxImagesByLayout[gridLayout ?? "2x2"];
  const displayImages = validImages.slice(
    0,
    isSingleImage ? 1 : effectiveMaxImages
  );

  // Determinar qué renderizar en el lado derecho
  const renderRightContent = () => {
    // Si hay contenido personalizado, usarlo
    if (rightContent) {
      return (
        <div
          className={cn(
            "shrink-0 h-full flex items-center justify-center ml-4 overflow-hidden",
            rightContentClassName
          )}
        >
          {rightContent}
        </div>
      );
    }

    // Si no hay imágenes, no renderizar nada
    if (validImages.length === 0) return null;

    // Renderizar imagen única o grid
    return isSingleImage ? (
      <SingleImage
        src={displayImages[0]}
        platform={platform}
        hover={imageHover}
        showOverlay={showImageOverlay}
        className={imageClassName}
      />
    ) : (
      <ImageGrid
        images={displayImages}
        platform={platform}
        layout={gridLayout}
        imageSize={imageSize}
        imageHover={imageHover}
        showOverlay={showImageOverlay}
        imageClassName={imageClassName}
        imagePositions={imagePositions}
      />
    );
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${username} on ${platform}`}
      className="inline-block rounded-4xl"
    >
      <Card
        className={cn(
          cardVariants({ variant, hover }),
          "hover:brightness-99.5 transition-all shrink basis-0",
          cardClassName
        )}
      >
        <CardContent className="flex items-start justify-between h-full">
          <CardInfo
            icon={icon}
            username={username}
            title={title}
            subtitle={subtitle}
            hideAction={hideAction}
            actionLabel={actionLabel}
            actionIcon={actionIcon}
            followerCount={followerCount}
            buttonPlatform={buttonPlatform}
            buttonClassName={buttonClassName}
          />

          {renderRightContent()}
        </CardContent>
      </Card>
    </a>
  );
}
