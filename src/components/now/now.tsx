// A slim "what I'm doing right now" strip under the hero. Static text (no
// animation) so it adds nothing to CLS and gives a 30-second scanner something
// current to ask about. Update the shipped list as things land.
export default function Now() {
  return (
    <section className="w-full pt-8 md:pt-10" id="now">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 rounded-md border p-4 text-sm sm:flex-row sm:items-baseline sm:gap-4">
          <span className="inline-flex shrink-0 items-center gap-2 font-semibold text-primary text-xs uppercase tracking-wider">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-primary"
            />
            Now
          </span>
          <p className="text-muted-foreground">
            Building production LLM systems. Shipped this month: glslint 0.3.1,
            14 merged specta PRs, and Lux on the App Store.
          </p>
        </div>
      </div>
    </section>
  );
}
