import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-scroll scroll-smooth will-change-scroll">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
