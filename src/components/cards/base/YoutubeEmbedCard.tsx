import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface YoutubeEmbedCardProps {
  url: string;
  className?: string;
}

export const YoutubeEmbedCard = ({ url, className }: YoutubeEmbedCardProps) => {
  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-4xl p-0 border-0 aspect-video w-97.5",
        className
      )}
    >
      <iframe
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 w-full h-full rounded-4xl"
      />
    </Card>
  );
};
