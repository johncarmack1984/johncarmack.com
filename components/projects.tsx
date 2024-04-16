import Link from "next/link";

import { Card } from "./ui/card";

const projects = [
  {
    title: "Lux",
    description: "A light controller for USB DMX devices.",
    image: "/assets/img/lux.png",
    href: "https://github.com/johncarmack1984/lux",
  },
  {
    title: "Skill Builder",
    description: "Character skill builder for Fate-based TTRPGs.",
    image: "/assets/img/toh-skill-builder.png",
    href: "https://toh-skill-builder.netlify.app/",
  },
  {
    title: "Deep Freeze",
    description: "Migrate from DropBox Business to S3 Deep Archive.",
    image: "/assets/img/deep-freeze.png",
    href: "https://github.com/johncarmack1984/deep-freeze",
  },
];

function Project({
  title,
  description,
  image,
  href,
}: {
  title: string;
  description: string;
  image: string;
  href: string;
}) {
  return (
    <Card key={href} className="rounded-md p-4">
      <Link className="overflow-clip" href={href}>
        <img
          alt={title}
          className="aspect-video h-32 w-full rounded-md object-cover transition-transform duration-500 hover:scale-105"
          height="200"
          src={image}
          style={{
            objectFit: "cover",
            objectPosition: "0 0",
          }}
          width="200"
        />
      </Link>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="text-sm">{description}</p>
    </Card>
  );
}

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(Project)}
        </div>
      </div>
    </section>
  );
}
