import { Card } from "./ui/card";

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          <Card className="rounded-md p-4">
            <h3 className="font-semibold">JavaScript</h3>
          </Card>
          <Card className="rounded-md p-4">
            <h3 className="font-semibold">React</h3>
          </Card>
          <Card className="rounded-md p-4">
            <h3 className="font-semibold">Node.js</h3>
          </Card>
          <Card className="rounded-md p-4">
            <h3 className="font-semibold">Python</h3>
          </Card>
          <Card className="rounded-md p-4">
            <h3 className="font-semibold">Django</h3>
          </Card>
          <Card className="rounded-md p-4">
            <h3 className="font-semibold">PostgreSQL</h3>
          </Card>
        </div>
      </div>
    </section>
  );
}
