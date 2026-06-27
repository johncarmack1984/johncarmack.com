import { cva } from "class-variance-authority";

import day from "@/assets/img/day.webp";
import night from "@/assets/img/night.webp";
import useSunHidden from "@/hooks/useSunHidden";
import { cn } from "@/lib/utils";

const backgroundImageVariants = cva(
  [
    "-z-10",
    "absolute",
    "top-0",
    "h-auto",
    "w-full",
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
      <img
        className={cn(
          backgroundImageVariants({ variant: "light", hidden: sunHidden }),
        )}
        src={day}
        alt="Day Theme Backdrop"
        loading="lazy"
        fetchPriority="low"
      />
      <img
        className={cn(
          backgroundImageVariants({ variant: "dark", hidden: !sunHidden }),
        )}
        src={night}
        alt="Night Theme Backdrop"
        loading="lazy"
        fetchPriority="low"
      />
    </>
  );
}

export default HeroImageBackground;
