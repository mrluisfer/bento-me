import { FigmaIcon } from "@/components/icons/figma";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const FigmaCard = () => {
  return (
    <SocialGalleryCard
      icon={<FigmaIcon />}
      platform="Figma"
      username="mrluisfeer"
      url="https://www.figma.com/@mrluisfeer"
      variant={"compact"}
      {...socialCardPresets.figma}
    />
  );
};
