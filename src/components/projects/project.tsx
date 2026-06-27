import { type Key } from "react";

import { SkillIcon } from "@/components/skills/skill";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type Tool = { Icon: SkillIcon; name: string };

function ProjectSkill({ Icon, name }: Tool, key: Key) {
  return (
    <span key={key} className="inline-flex items-center gap-1.5 text-xs">
      <Icon className="size-4 fill-current" />
      <span className="text-muted-foreground">{name}</span>
    </span>
  );
}

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  platforms: Tool[];
  skills: Tool[];
};

function Project({
  title,
  description,
  image,
  href,
  platforms,
  skills,
}: ProjectProps) {
  return (
    <Card key={href} className="rounded-md">
      <CardHeader>
        <a aria-label={title} href={href}>
          <img
            alt={title}
            loading="lazy"
            className="aspect-video h-32 w-full rounded-md object-cover transition-transform duration-500 hover:scale-105"
            src={image}
            style={{
              objectFit: "cover",
              objectPosition: "0 0",
            }}
          />
        </a>
        <CardTitle className="mt-4 text-base font-semibold">{title}</CardTitle>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
          {skills.map(ProjectSkill)}
        </div>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>

      <CardFooter className="flex gap-2">
        <CardDescription className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {platforms.map(ProjectSkill)}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default Project;
