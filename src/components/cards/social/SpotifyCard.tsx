import { SpotifyIcon } from "@/components/icons/spotify";
import { socialCardPresets } from "@/constants/socialMediaPresets";
import { SocialGalleryCard } from "../base/SocialGalleryCard";

export const SpotifyCard = () => {
  return (
    <SocialGalleryCard
      icon={<SpotifyIcon />}
      platform="Spotify"
      username="mrluisfeer"
      url="https://open.spotify.com/user/mrluisfeer"
      images={[
        "https://images.unsplash.com/photo-1524650359799-842906ca1c06?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ]}
      {...socialCardPresets.spotify}
    />
  );
};
