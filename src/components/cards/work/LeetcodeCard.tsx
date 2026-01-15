import { LeetcodeIcon } from "@/components/icons/leetcode";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const LeetcodeCard = () => {
  return (
    <SocialGalleryCard
      icon={<LeetcodeIcon />}
      platform="LeetCode"
      username="mrluisfeer"
      url="https://leetcode.com/u/mrluisfeer/"
      variant={"compact"}
      {...socialCardPresets.leetcode}
    />
  );
};
