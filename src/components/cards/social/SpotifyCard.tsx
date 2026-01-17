import { SpotifyIcon } from "@/components/icons/spotify";
import { SocialGalleryCard } from "../base/SocialGalleryCard";
import { AudioWaveformIcon } from "lucide-react";

export const SpotifyCard = () => {
  return (
    <SocialGalleryCard
      icon={<SpotifyIcon />}
      platform="Spotify"
      username="Deja que la música hable cuando las palabras no bastan"
      url="https://open.spotify.com/playlist/49spccWMHTuffh4NQiR4RN"
      images={["/images/spotify/playlist1.webp"]}
      buttonClassName="bg-[#1ED760] hover:bg-[#1aa34a]"
      actionLabel="Listen"
      cardClassName="bg-[#EDFCF3] hover:bg-[#E7F9EE]"
      actionIcon={<AudioWaveformIcon />}
      subtitle="Sumérgete y deja que cada nota te recuerde que aún en la tormenta, existe belleza."
      singleImageMode
      followerCount={"1,580 songs"}
    />
  );
};
