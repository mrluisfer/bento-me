import type {
  ButtonVariants,
  CardVariants,
  GridVariants,
  ImageVariants,
} from "@/components/cards/base/SocialGalleryCard";
import type { AnimationVariant } from "@/components/ui/text-animate";
import type { SocialMediaPlatform } from "@/constants/socialMediaPresets";

export type CardIconKey =
  | "instagram"
  | "twitter"
  | "spotify"
  | "github"
  | "linkedin"
  | "twitch"
  | "figma"
  | "leetcode"
  | "portfolio"
  | "youtube"
  | "at-sign"
  | "audio-waveform"
  | "code"
  | "figma-lucide"
  | "git-branch-plus"
  | "plus"
  | "user";

export type ProfileIconKey = "mail" | "map" | "quote" | "portfolio";

export interface ProfileDetail {
  id: string;
  text: string;
  icon: ProfileIconKey;
  href?: string;
  animation?: AnimationVariant;
  delay?: number;
}

export interface ProfileContent {
  avatar: {
    src: string;
    alt: string;
    fallback: string;
  };
  name: string;
  websiteUrl: string;
  description: string;
  details: ProfileDetail[];
}

export interface GithubCalendarRightContent {
  type: "github-calendar";
  username: string;
  blockSize?: number;
  blockMargin?: number;
  blockRadius?: number;
  colorScheme?: "light" | "dark";
  limit?: number;
  maxWidth?: string;
}

export type CardRightContent = GithubCalendarRightContent;

export interface LinkCardSocialStyle {
  preset?: SocialMediaPlatform;
  variant?: CardVariants["variant"];
  hover?: CardVariants["hover"];
  buttonPlatform?: ButtonVariants["platform"];
  buttonClassName?: string;
  cardClassName?: string;
  rightContentClassName?: string;
}

export interface LinkCardBaseStyle {
  size?: CardVariants["variant"];
  className?: string;
}

export interface LinkCardItem {
  id: string;
  type: "link";
  platform: string;
  username: string;
  url: string;
  icon: CardIconKey;
  title?: string;
  subtitle?: string;
  actionLabel?: string;
  actionIcon?: CardIconKey;
  followerCount?: number | string;
  hideAction?: boolean;
  images?: string[];
  singleImageMode?: boolean;
  gridLayout?: GridVariants["layout"];
  imageSize?: ImageVariants["size"];
  imageHover?: ImageVariants["hover"];
  maxImages?: number;
  imagePositions?: string[];
  showImageOverlay?: boolean;
  imageClassName?: string;
  rightContent?: CardRightContent;
  socialStyle?: LinkCardSocialStyle;
  baseStyle?: LinkCardBaseStyle;
}

export interface YoutubeEmbedCardItem {
  id: string;
  type: "youtube-embed";
  url: string;
  className?: string;
}

export type AppCardItem = LinkCardItem | YoutubeEmbedCardItem;

export interface CardSection {
  id: string;
  label: string;
  rows: AppCardItem[][];
}

export interface AppContent {
  profile: ProfileContent;
  sections: CardSection[];
}

const luisContent: AppContent = {
  profile: {
    avatar: {
      src: "/profile.webp",
      alt: "Selfie de Luis Alvarez modificada con I.A.",
      fallback: "LA",
    },
    name: "Luis Alvarez",
    websiteUrl: "https://mrluisfer.vercel.app/",
    description:
      "Frontend engineer specialized in building modern web applications.",
    details: [
      {
        id: "location",
        text: "Based in Mexico.",
        icon: "map",
        animation: "slideLeft",
        delay: 0.15,
      },
      {
        id: "quote",
        text: "A ship in harbor is safe, but that is not what ships are built for.",
        icon: "quote",
        animation: "slideRight",
        delay: 0.25,
      },
      {
        id: "email",
        text: "mrluisfeer@gmail.com",
        icon: "mail",
        href: "mailto:mrluisfeer@gmail.com",
        animation: "blurIn",
        delay: 0.35,
      },
      {
        id: "website",
        text: "mrluisfer.vercel.app",
        icon: "portfolio",
        href: "https://mrluisfer.vercel.app/",
        animation: "blurIn",
        delay: 0.45,
      },
    ],
  },
  sections: [
    {
      id: "social",
      label: "social",
      rows: [
        [
          {
            id: "instagram",
            type: "link",
            platform: "Instagram",
            username: "@mrluisfer_",
            url: "https://www.instagram.com/mrluisfer_",
            icon: "instagram",
            subtitle: "instagram.com/mrluisfer_",
            images: [
              "/images/instagram/instagram1.webp",
              "/images/instagram/instagram2.webp",
              "/images/instagram/instagram3.webp",
              "/images/instagram/instagram4.webp",
            ],
            followerCount: 65,
            socialStyle: {
              buttonPlatform: "instagram",
              buttonClassName:
                "hover:opacity-90 hover:bg-[#2875CA] bg-[#4093EF]",
              cardClassName: "max-w-[400px]",
            },
          },
          {
            id: "twitter",
            type: "link",
            platform: "Twitter",
            username: "@mrluisfer_",
            url: "https://twitter.com/_mrluisfer",
            icon: "twitter",
            actionIcon: "at-sign",
            socialStyle: {
              variant: "compact",
              buttonPlatform: "twitter",
              buttonClassName: "bg-[#1DA1F2] hover:bg-[#0C8BD9]",
              cardClassName: "bg-[#F5FAFE] hover:bg-[#F0F7FD]",
            },
          },
          {
            id: "spotify",
            type: "link",
            platform: "Spotify",
            username: "Deja que la musica hable cuando las palabras no bastan",
            url: "https://open.spotify.com/playlist/49spccWMHTuffh4NQiR4RN",
            icon: "spotify",
            subtitle:
              "Sumergete y deja que cada nota te recuerde que aun en la tormenta, existe belleza.",
            images: ["/images/spotify/playlist1.webp"],
            singleImageMode: true,
            actionLabel: "Listen",
            actionIcon: "audio-waveform",
            followerCount: "1,580 songs",
            socialStyle: {
              buttonPlatform: "spotify",
              buttonClassName: "bg-[#1ED760] hover:bg-[#1aa34a]",
              cardClassName: "bg-[#EDFCF3] hover:bg-[#E7F9EE]",
            },
          },
          {
            id: "github",
            type: "link",
            platform: "GitHub",
            username: "mrluisfer",
            url: "https://github.com/mrluisfer",
            icon: "github",
            actionLabel: "Follow",
            actionIcon: "git-branch-plus",
            followerCount: 88,
            rightContent: {
              type: "github-calendar",
              username: "mrluisfer",
              blockSize: 13.5,
              blockMargin: 5,
              blockRadius: 2,
              colorScheme: "light",
              limit: 60,
              maxWidth: "200px",
            },
            socialStyle: {
              buttonPlatform: "github",
              buttonClassName: "bg-[#24292F] hover:bg-[#1B1F23]",
            },
          },
        ],
        [
          {
            id: "linkedin",
            type: "link",
            platform: "LinkedIn",
            username: "mrluisfer",
            url: "https://linkedin.com/in/mrluisfer/",
            icon: "linkedin",
            subtitle: "linkedin.com/in/mrluisfer",
            images: ["/images/linkedin-ss.webp"],
            singleImageMode: true,
            actionLabel: "Connect",
            actionIcon: "user",
            followerCount: 469,
            socialStyle: {
              buttonPlatform: "linkedin",
              buttonClassName: "bg-[#0A66C2] hover:bg-[#004182]",
            },
          },
          {
            id: "twitch",
            type: "link",
            platform: "Twitch",
            username: "mrluisfer",
            url: "https://www.twitch.tv/mrluisfer_",
            icon: "twitch",
            socialStyle: {
              preset: "twitch",
              variant: "compact",
            },
          },
        ],
      ],
    },
    {
      id: "work",
      label: "work",
      rows: [
        [
          {
            id: "portfolio",
            type: "link",
            platform: "portfolio",
            username: "Luis Alvarez",
            url: "https://mrluisfer.vercel.app/",
            icon: "portfolio",
            images: ["/images/portfolio-ss.webp"],
            singleImageMode: true,
            socialStyle: {
              preset: "portfolio",
            },
          },
          {
            id: "figma",
            type: "link",
            platform: "Figma",
            username: "mrluisfeer",
            url: "https://www.figma.com/@mrluisfeer",
            icon: "figma",
            actionIcon: "figma-lucide",
            socialStyle: {
              variant: "compact",
              buttonClassName: "bg-[#252525] hover:bg-[#131313]",
            },
          },
          {
            id: "leetcode",
            type: "link",
            platform: "LeetCode",
            username: "mrluisfeer",
            url: "https://leetcode.com/u/mrluisfeer/",
            icon: "leetcode",
            actionIcon: "code",
            socialStyle: {
              variant: "compact",
              buttonClassName: "bg-[#1da09c] hover:bg-[#157f7a]",
            },
          },
          {
            id: "youtube",
            type: "youtube-embed",
            url: "https://www.youtube.com/embed/rR4n-0KYeKQ?si=yj4HPuCgKZz3OKLr&amp;controls=0",
          },
        ],
      ],
    },
  ],
};

export const usersContent: Record<string, AppContent> = {
  mrluisfer: luisContent,
};

export const defaultUserId = "mrluisfer";

export const appContent = usersContent[defaultUserId];
