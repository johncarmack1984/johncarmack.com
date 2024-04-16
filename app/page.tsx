import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen flex-col">
      <main className="flex-1 [scroll-behavior:smooth] will-change-scroll">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
