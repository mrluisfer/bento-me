import { YoutubeIcon } from "@/components/icons/youtube";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const YoutubeCard = () => {
  return (
    <SocialGalleryCard
      icon={<YoutubeIcon />}
      platform="YouTube"
      username="mrluisfeer"
      url="https://youtube.com/mrluisfeer"
      variant={"compact"}
      {...socialCardPresets.youtube}
    />
  );
};
