import { PortfolioIcon } from "@/components/icons/portfolio";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const PortfolioCard = () => {
  return (
    <div>
      <SocialGalleryCard
        icon={<PortfolioIcon />}
        platform="portfolio"
        username="Luis Alvarez"
        url="https://mrluisfer.vercel.app/"
        singleImageMode
        images={["/images/portfolio-ss.webp"]}
        {...socialCardPresets.portfolio}
      />
    </div>
  );
};
