import { Card } from "./ui/card";

const skills = [
  { name: "JavaScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Django" },
  { name: "PostgreSQL" },
  { name: "Rust" },
];

function Skill({ name }: { name: string }) {
  return (
    <Card key={name} className="rounded-md p-4">
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
