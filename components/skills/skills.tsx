import JavaScriptIcon from "@/components/ui/icons/javascript";
import NodeJsIcon from "@/components/ui/icons/node";
import PostgreSqlIcon from "@/components/ui/icons/postgresql";
import PythonIcon from "@/components/ui/icons/python";
import ReactIcon from "@/components/ui/icons/react";
import RustIcon from "@/components/ui/icons/rust";
import Skill from "./skill";

const skills = [
  { Icon: JavaScriptIcon, name: "JavaScript" },
  { Icon: ReactIcon, name: "React" },
  { Icon: NodeJsIcon, name: "Node.js" },
  { Icon: PythonIcon, name: "Python" },
  { Icon: PostgreSqlIcon, name: "PostgreSQL" },
  { Icon: RustIcon, name: "Rust" },
];

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(Skill)}
        </div>
      </div>
    </section>
  );
}
