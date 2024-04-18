"use client";

import React from "react";
import Image from "next/image";
import useSunHidden from "@/hooks/useSunHidden";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const imageVariants = cva(
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

export default function Hero() {
  const { sunHidden } = useSunHidden();
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32" id="hero">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse items-end gap-8 md:flex-row md:gap-0">
          <div className="grid basis-2/3 gap-4 md:gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Hello. I'm John Carmack.
              </h1>
              <p className="text-muted-foreground text-lg">
                I'm a software engineer, specializing in building (and
                occasionally designing) exceptional digital experiences.
              </p>
            </div>
          </div>
          <div className="relative basis-1/3 overflow-clip transition">
            <Image
              className={cn(
                imageVariants({ variant: "light", hidden: sunHidden }),
              )}
              src={"/assets/img/day.webp"}
              width={1005}
              height={902}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={"Day Theme Backdrop"}
            />
            <Image
              className={cn(
                imageVariants({ variant: "dark", hidden: !sunHidden }),
              )}
              src={"/assets/img/night.webp"}
              width={1005}
              height={902}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={"Night Theme Backdrop"}
            />
            <Image
              className={cn("")}
              src={"/assets/img/john.webp"}
              width={1005}
              height={902}
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={"John Carmack"}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
