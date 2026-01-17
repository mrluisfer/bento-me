import { FigmaIcon } from "@/components/icons/figma";
import { SocialGalleryCard } from "../base/SocialGalleryCard";
import { FigmaIcon as FigmaIconLucide } from "lucide-react";

export const FigmaCard = () => {
  return (
    <SocialGalleryCard
      icon={<FigmaIcon />}
      platform="Figma"
      username="mrluisfeer"
      url="https://www.figma.com/@mrluisfeer"
      variant={"compact"}
      buttonClassName="bg-[#252525] hover:bg-[#131313]"
      actionIcon={<FigmaIconLucide />}
    />
  );
};
