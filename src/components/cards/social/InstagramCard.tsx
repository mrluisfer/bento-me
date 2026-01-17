import { InstagramIcon } from "../../icons/instagram";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

const instagramImages = [
  "/images/instagram/instagram1.webp",
  "/images/instagram/instagram2.webp",
  "/images/instagram/instagram3.webp",
  "/images/instagram/instagram4.webp",
];

export default function InstagramCard() {
  return (
    <SocialGalleryCard
      icon={<InstagramIcon />}
      platform="Instagram"
      username="@mrluisfer_"
      url="https://www.instagram.com/mrluisfer_"
      images={instagramImages}
      followerCount={65}
      subtitle="instagram.com/mrluisfer_"
      buttonClassName="hover:opacity-90 hover:bg-[#2875CA] bg-[#4093EF]"
      cardClassName="max-w-[400px]"
    />
  );
}
