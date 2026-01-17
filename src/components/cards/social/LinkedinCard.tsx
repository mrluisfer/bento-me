import { LinkedinIcon } from "@/components/icons/linkedin";
import { SocialGalleryCard } from "../base/SocialGalleryCard";
import { UserIcon } from "lucide-react";

export const LinkedinCard = () => {
  return (
    <SocialGalleryCard
      icon={<LinkedinIcon />}
      platform="LinkedIn"
      username="mrluisfer"
      url="https://linkedin.com/in/mrluisfer/"
      singleImageMode
      images={["/images/linkedin-ss.webp"]}
      buttonClassName="bg-[#0A66C2] hover:bg-[#004182]"
      actionLabel="Connect"
      subtitle="linkedin.com/in/mrluisfer"
      actionIcon={<UserIcon />}
      followerCount={469}
    />
  );
};
