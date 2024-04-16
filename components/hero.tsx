export default function Hero() {
  return (
    <section className="w-full pt-12 md:pt-24 lg:pt-32" id="hero">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 md:gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Hello. I'm John Carmack.
            </h1>
            <p className="text-muted-foreground text-lg">
              I'm a software engineer specializing in building (and occasionally
              designing) exceptional digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
