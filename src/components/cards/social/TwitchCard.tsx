import { TwitchIcon } from "@/components/icons/twitch";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const TwitchCard = () => {
  return (
    <SocialGalleryCard
      icon={<TwitchIcon />}
      platform="Twitch"
      username="mrluisfer"
      url="https://www.twitch.tv/mrluisfer"
      variant="compact"
      {...socialCardPresets.twitch}
    />
  );
};
