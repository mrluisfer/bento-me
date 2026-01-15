import { GitHubIcon } from "@/components/icons/github";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { GitHubCalendar } from "react-github-calendar";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

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
        {...socialCardPresets.github}
      />
    </div>
  );
};
