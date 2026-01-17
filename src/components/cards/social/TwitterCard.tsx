import { TwitterIcon } from "@/components/icons/twitter";
import { AtSignIcon } from "lucide-react";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const TwitterCard = () => {
  return (
    <SocialGalleryCard
      icon={<TwitterIcon />}
      platform="Twitter"
      username="@mrluisfer_"
      url="https://twitter.com/_mrluisfer"
      variant="compact"
      actionIcon={<AtSignIcon />}
      buttonClassName="bg-[#1DA1F2] hover:bg-[#0C8BD9]"
      cardClassName="bg-[#F5FAFE] hover:bg-[#F0F7FD]"
    />
  );
};
