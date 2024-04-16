import { Card } from "./ui/card";
import JavaScriptIcon from "./ui/icons/javascript";
import NodeJsIcon from "./ui/icons/node";
import PostgreSqlIcon from "./ui/icons/postgresql";
import PythonIcon from "./ui/icons/python";
import ReactIcon from "./ui/icons/react";
import RustIcon from "./ui/icons/rust";
import { ProjectIcon } from "./ui/icons/types";

const skills = [
  { Icon: JavaScriptIcon, name: "JavaScript" },
  { Icon: ReactIcon, name: "React" },
  { Icon: NodeJsIcon, name: "Node.js" },
  { Icon: PythonIcon, name: "Python" },
  { Icon: PostgreSqlIcon, name: "PostgreSQL" },
  { Icon: RustIcon, name: "Rust" },
];

function Skill({ Icon, name }: { Icon: ProjectIcon; name: string }) {
  return (
    <Card key={name} className="flex items-center gap-4 rounded-md p-4">
      <Icon className="inline size-12 fill-current" />
      <h3 className="font-semibold">{name}</h3>
    </Card>
  );
}

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(Skill)}
        </div>
      </div>
    </section>
  );
}
