import React from "react";

import HeroImage from "@/components/hero-image";

function HeroText() {
  return (
    <div className="grid basis-2/3 gap-4 md:gap-6">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
        Hi. I'm John Carmack.
      </h1>
      <p className="text-muted-foreground text-lg">
        I'm a software engineer with 26 years of experience building exceptional
        digital experiences.
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32" id="hero">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse items-end gap-8 md:flex-row md:gap-1">
          <HeroText />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
