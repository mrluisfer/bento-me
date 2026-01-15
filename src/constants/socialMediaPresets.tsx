import type { SocialGalleryCardProps } from "@/components/cards/base/SocialGalleryCard";
import { AudioWaveformIcon, GitPullRequestCreateArrowIcon } from "lucide-react";

/**
 * Preset configuration for social media cards.
 * Extends from SocialGalleryCardProps excluding required fields.
 * All properties are optional and override the defaults in SocialGalleryCard.
 */
export type SocialMediaPreset = Partial<
  Omit<SocialGalleryCardProps, "icon" | "platform" | "username" | "url">
>;

export const socialCardPresets = {
  instagram: {
    buttonClassName: "hover:opacity-90 hover:bg-[#2875CA] bg-[#4093EF]",
    cardClassName: "max-w-[400px]",
  },
  behance: {
    buttonClassName: "bg-[#1769FF] hover:bg-[#0D5FE8]",
  },
  dribbble: {
    buttonClassName: "bg-[#EA4C89] hover:bg-[#D4417A]",
  },
  github: {
    buttonClassName: "bg-[#24292F] hover:bg-[#1B1F23]",
    actionLabel: "Follow",
  },
  twitter: {
    buttonClassName: "bg-[#1DA1F2] hover:bg-[#0C8BD9]",
    cardClassName: "bg-[#F5FAFE] hover:bg-[#F0F7FD]",
  },
  linkedin: {
    buttonClassName: "bg-[#0A66C2] hover:bg-[#004182]",
    actionLabel: "Connect",
    subtitle: "linkedin.com",
  },
  youtube: {
    buttonClassName: "bg-[#FF0000] hover:bg-[#CC0000]",
    actionLabel: "Subscribe",
  },
  tiktok: {
    buttonClassName: "bg-[#000000] hover:bg-[#1a1a1a]",
  },
  pinterest: {
    buttonClassName: "bg-[#E60023] hover:bg-[#ad081b]",
    actionLabel: "Save",
  },
  spotify: {
    buttonClassName: "bg-[#1ED760] hover:bg-[#1aa34a]",
    actionLabel: "Listen",
    cardClassName: "bg-[#EDFCF3] hover:bg-[#E7F9EE]",
    actionIcon: <AudioWaveformIcon />,
  },
  portfolio: {
    hideAction: true,
    subtitle: "mrluisfer.vercel.app",
    cardClassName: "bg-[#f7faff] hover:bg-[#eef3ff]",
  },
  figma: {
    buttonClassName: "bg-[#252525] hover:bg-[#131313]",
  },
  leetcode: {
    buttonClassName: "bg-[#1da09c] hover:bg-[#157f7a]",
    actionIcon: <GitPullRequestCreateArrowIcon />,
  },
  twitch: {
    buttonClassName: "bg-[#9146FF] hover:bg-[#772ce8]",
    cardClassName: "bg-[#F6F2FF] hover:bg-[#EFE5FF]",
  },
} as const satisfies Record<string, SocialMediaPreset>;

export type SocialMediaPlatform = keyof typeof socialCardPresets;
