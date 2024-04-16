"use client";

import { useTheme } from "next-themes";

export default function Hero() {
  const { resolvedTheme, setTheme } = useTheme();
  const src =
    resolvedTheme === "dark" ? "/assets/img/night.png" : "/assets/img/day.png";
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
          <div className="basis-1/3 transition">
            <img src={src} />
          </div>
        </div>
      </div>
    </section>
  );
}
