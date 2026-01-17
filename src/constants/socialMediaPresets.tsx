import type { SocialGalleryCardProps } from "@/components/cards/base/SocialGalleryCard";

/**
 * Preset configuration for social media cards.
 * Extends from SocialGalleryCardProps excluding required fields.
 * All properties are optional and override the defaults in SocialGalleryCard.
 */
export type SocialMediaPreset = Partial<
  Omit<SocialGalleryCardProps, "icon" | "platform" | "username" | "url">
>;

export const socialCardPresets = {
  behance: {
    buttonClassName: "bg-[#1769FF] hover:bg-[#0D5FE8]",
  },
  dribbble: {
    buttonClassName: "bg-[#EA4C89] hover:bg-[#D4417A]",
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
  portfolio: {
    hideAction: true,
    subtitle: "mrluisfer.vercel.app",
    cardClassName: "bg-[#f7faff] hover:bg-[#eef3ff]",
  },
  twitch: {
    buttonClassName: "bg-[#9146FF] hover:bg-[#772ce8]",
    cardClassName: "bg-[#F6F2FF] hover:bg-[#EFE5FF]",
  },
} as const satisfies Record<string, SocialMediaPreset>;

export type SocialMediaPlatform = keyof typeof socialCardPresets;
