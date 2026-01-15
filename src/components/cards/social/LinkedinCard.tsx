import { LinkedinIcon } from "@/components/icons/linkedin";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const LinkedinCard = () => {
  return (
    <SocialGalleryCard
      icon={<LinkedinIcon />}
      platform="LinkedIn"
      username="mrluisfer"
      url="http://linkedin.com/in/mrluisfer/"
      singleImageMode
      images={["/images/linkedin-ss.webp"]}
      {...socialCardPresets.linkedin}
    />
  );
};
