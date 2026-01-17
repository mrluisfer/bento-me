import { GitHubIcon } from "@/components/icons/github";
import { GitHubCalendar } from "react-github-calendar";
import { SocialGalleryCard } from "../base/SocialGalleryCard";
import { GitBranchPlusIcon } from "lucide-react";

export const GithubCard = () => {
  return (
    <div>
      <SocialGalleryCard
        icon={<GitHubIcon />}
        platform="GitHub"
        username="mrluisfer"
        url="https://github.com/mrluisfer"
        rightContent={
          <GitHubCalendar
            username="mrluisfer"
            blockSize={13.5}
            blockMargin={5}
            blockRadius={2}
            fontSize={0}
            colorScheme="light"
            showColorLegend={false}
            transformData={(data) => data.slice(-60)}
            style={{ maxWidth: "200px", height: "inherit" }}
          />
        }
        buttonClassName="bg-[#24292F] hover:bg-[#1B1F23]"
        actionLabel="Follow"
        followerCount={88}
        actionIcon={<GitBranchPlusIcon />}
      />
    </div>
  );
};
