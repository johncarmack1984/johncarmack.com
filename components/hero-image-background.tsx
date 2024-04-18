"use client";

import Image from "next/image";
import useSunHidden from "@/hooks/useSunHidden";
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
        src={"/assets/img/day.webp"}
        width={1005}
        height={902}
        sizes="(max-width: 768px) 100vw, 33vw"
        alt={"Day Theme Backdrop"}
      />
      <Image
        className={cn(
          backgroundImageVariants({ variant: "dark", hidden: !sunHidden }),
        )}
        src={"/assets/img/night.webp"}
        width={1005}
        height={902}
        sizes="(max-width: 768px) 100vw, 33vw"
        alt={"Night Theme Backdrop"}
      />
    </>
  );
}

export default HeroImageBackground;
