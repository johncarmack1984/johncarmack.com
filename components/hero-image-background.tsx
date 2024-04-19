"use client";

import Image from "next/image";
import useSunHidden from "@/hooks/useSunHidden";
import day from "@/public/assets/img/day.webp";
import night from "@/public/assets/img/night.webp";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backgroundImageVariants = cva(
  [
    "-z-10",
    "absolute",
    "top-0",
    "transition-opacity",
    "transition-transform",
    "origin-bottom",
    "duration-300",
  ],
  {
    variants: {
      variant: {
        light: [],
        dark: [],
      },
      hidden: {
        true: ["opacity-0", "scale-50"],
        false: ["opacity-100"],
      },
    },
    compoundVariants: [
      {
        variant: "light",
        hidden: true,
        className: ["-rotate-180"],
      },
      {
        variant: "dark",
        hidden: true,
        className: ["rotate-180"],
      },
    ],
  },
);

function HeroImageBackground() {
  const { sunHidden } = useSunHidden();
  return (
    <>
      <Image
        className={cn(
          backgroundImageVariants({ variant: "light", hidden: sunHidden }),
        )}
        src={day}
        sizes="(max-width: 768px) 100vw, 25vw"
        alt="Day Theme Backdrop"
      />
      <Image
        className={cn(
          backgroundImageVariants({ variant: "dark", hidden: !sunHidden }),
        )}
        src={night}
        sizes="(max-width: 768px) 100vw, 25vw"
        alt="Night Theme Backdrop"
      />
    </>
  );
}

export default HeroImageBackground;
