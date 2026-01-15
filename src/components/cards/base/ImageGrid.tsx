import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { gridVariants, imageVariants } from "./SocialGalleryCard.variants";

export type GridLayout = VariantProps<typeof gridVariants>["layout"];
export type ImageSize = VariantProps<typeof imageVariants>["size"];
export type ImageHover = VariantProps<typeof imageVariants>["hover"];

interface ImageGridProps {
  images: string[];
  platform: string;
  layout?: GridLayout;
  imageSize?: ImageSize;
  imageHover?: ImageHover;
  showOverlay?: boolean;
  imageClassName?: string;
  imagePositions?: string[];
}

export function ImageGrid({
  images,
  platform,
  layout = "2x2",
  imageSize = "md",
  imageHover = "scale",
  showOverlay = false,
  imageClassName,
  imagePositions,
}: ImageGridProps) {
  if (images.length === 0) return null;

  return (
    <div className={cn(gridVariants({ layout }), "ml-6")}>
      {images.map((src, index) => (
        <div
          key={`${platform}-image-${index}`}
          className={cn(
            "group/image relative overflow-hidden rounded-lg",
            imagePositions?.[index] ?? "size-15"
          )}
        >
          <img
            src={src}
            alt={`${platform} post ${index + 1}`}
            className={cn(
              imageVariants({
                size: imagePositions?.[index] ? undefined : imageSize,
                hover: imageHover,
                rounded: "md",
              }),
              "w-full h-full",
              imageClassName
            )}
            loading="lazy"
          />
          {showOverlay && <ImageOverlay />}
        </div>
      ))}
    </div>
  );
}

export function ImageOverlay() {
  return (
    <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 rounded-lg" />
  );
}
