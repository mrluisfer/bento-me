import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import { ImageOverlay } from "./ImageGrid";
import { imageVariants } from "./SocialGalleryCard.variants";

type ImageHover = VariantProps<typeof imageVariants>["hover"];

interface SingleImageProps {
  src: string;
  platform: string;
  hover?: ImageHover;
  showOverlay?: boolean;
  className?: string;
}

export function SingleImage({
  src,
  platform,
  hover = "scale",
  showOverlay = false,
  className,
}: SingleImageProps) {
  return (
    <div className="group/image relative overflow-hidden rounded-2xl shrink-0 h-full ml-4">
      <img
        src={src}
        alt={`${platform} preview`}
        className={cn(
          imageVariants({ hover, rounded: "xl" }),
          "h-full w-auto max-w-48",
          className
        )}
        loading="lazy"
      />
      {showOverlay && <ImageOverlay />}
    </div>
  );
}
