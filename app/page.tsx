import Contact from "@/components/contact";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-scroll scroll-smooth">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
