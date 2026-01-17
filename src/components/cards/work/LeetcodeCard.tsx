import { LeetcodeIcon } from "@/components/icons/leetcode";
import { SocialGalleryCard } from "../base/SocialGalleryCard";
import { CodeIcon } from "lucide-react";

export const LeetcodeCard = () => {
  return (
    <SocialGalleryCard
      icon={<LeetcodeIcon />}
      platform="LeetCode"
      username="mrluisfeer"
      url="https://leetcode.com/u/mrluisfeer/"
      variant={"compact"}
      buttonClassName="bg-[#1da09c] hover:bg-[#157f7a]"
      actionIcon={<CodeIcon />}
    />
  );
};
