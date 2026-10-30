import HeroImage from "@/components/hero/image";

// Exported for src/lib/llms-txt.ts, which publishes the same words at /llms.txt.
export const heroIntro =
  "I'm a software engineer, mostly in Rust and TypeScript. By day, Lead Content Distribution Engineer at Disney. My own time goes to MapLibre, where I'm a voting member and most of my PRs land in the Martin tile server, MapLibre GL JS, and MapLibre Native. Before Disney: primary author of a safety-critical aviation desktop application, lone architect of a real-time analytics platform.";

function HeroText() {
  return (
    <div className="grid basis-2/3 gap-4 md:gap-6">
      <h1 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
        Hi. I'm John Carmack.
      </h1>
      <p className="text-lg text-muted-foreground">{heroIntro}</p>
      <p className="text-lg text-muted-foreground">
        Not the Doom guy. Different guy.
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
