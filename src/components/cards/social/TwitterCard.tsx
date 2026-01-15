import { TwitterIcon } from "@/components/icons/twitter";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { AtSignIcon } from "lucide-react";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const TwitterCard = () => {
  return (
    <SocialGalleryCard
      icon={<TwitterIcon />}
      platform="Twitter"
      username="@mrluisfer_"
      url="https://twitter.com/mrluisfer_"
      variant="compact"
      actionIcon={<AtSignIcon />}
      {...socialCardPresets.twitter}
    />
  );
};
