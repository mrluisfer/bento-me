import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-4xl overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "w-full max-w-[390px] h-[175px]",
        compact: "w-full max-w-[200px] h-[175px] md:size-[175px]",
        large: "w-full max-w-[450px] h-52",
      },
      hover: {
        none: "",
        subtle: "hover:bg-[#FBFBFB]",
        scale: "hover:scale-[1.02]",
        lift: "hover:-translate-y-1 hover:shadow-lg",
        brightness: "hover:brightness-105",
      },
    },
    defaultVariants: {
      variant: "default",
      hover: "subtle",
    },
  }
);

export const imageVariants = cva("object-cover transition-all duration-300", {
  variants: {
    size: {
      xs: "size-10",
      sm: "size-12",
      md: "size-15",
      lg: "size-18",
    },
    rounded: {
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
      xl: "rounded-2xl",
    },
    hover: {
      none: "",
      scale: "group-hover/image:scale-110",
      brightness: "group-hover/image:brightness-110",
      blur: "group-hover/image:blur-[2px]",
      grayscale: "grayscale group-hover/image:grayscale-0",
      rotate: "group-hover/image:rotate-3",
    },
  },
  defaultVariants: {
    size: "md",
    rounded: "md",
    hover: "scale",
  },
});

export const buttonVariants = cva(
  "text-white max-w-fit gap-1.5 transition-all",
  {
    variants: {
      platform: {
        default: "bg-[#4093EF] hover:bg-[#2875CA]",
        instagram:
          "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
        behance: "bg-[#1769FF] hover:bg-[#0D5FE8]",
        dribbble: "bg-[#EA4C89] hover:bg-[#D4417A]",
        github: "bg-[#24292F] hover:bg-[#1B1F23]",
        twitter: "bg-[#1DA1F2] hover:bg-[#0C8BD9]",
        linkedin: "bg-[#0A66C2] hover:bg-[#004182]",
        youtube: "bg-[#FF0000] hover:bg-[#CC0000]",
        spotify: "bg-[#1DB954] hover:bg-[#1aa34a]",
        reddit: "bg-[#FF4500] hover:bg-[#cc3700]",
        tiktok: "bg-[#000000] hover:bg-[#1a1a1a]",
      },
    },
    defaultVariants: {
      platform: "default",
    },
  }
);

export const gridVariants = cva("grid gap-2 shrink-0", {
  variants: {
    layout: {
      "2x2": "grid-cols-2 grid-rows-2",
      "3x2": "grid-cols-3 grid-rows-2",
      "2x3": "grid-cols-2 grid-rows-3",
      "4x1": "grid-cols-4 grid-rows-1",
      "1x4": "grid-cols-1 grid-rows-4",
      auto: "grid-cols-2",
    },
  },
  defaultVariants: {
    layout: "2x2",
  },
});

export const maxImagesByLayout = {
  "2x2": 4,
  "3x2": 6,
  "2x3": 6,
  "4x1": 4,
  "1x4": 4,
  auto: 4,
} as const;
