import Contact from "@/components/contact";
import Hero from "@/components/hero/hero";
import SiteNav from "@/components/nav/nav";
import OpenSource from "@/components/opensource/opensource";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { TailwindIndicator } from "@/components/tailwind-indicator";

export default function App() {
  return (
    <>
      <div className="relative mx-auto flex min-h-screen flex-col items-start justify-start bg-background text-foreground transition-colors">
        <SiteNav />
        <div className="mx-auto flex min-h-screen flex-col">
          <main className="flex-1 overflow-y-scroll scroll-smooth">
            <Hero />
            <Skills />
            <Projects />
            <OpenSource />
            <Contact />
          </main>
        </div>
      </div>

      <TailwindIndicator />
    </>
  );
}
