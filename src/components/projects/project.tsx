import { Fragment, type Key } from "react";

import { SkillIcon } from "@/components/skills/skill";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProjectSkill(Icon: SkillIcon, key: Key) {
  return (
    <Fragment key={key}>
      <Icon className="size-6 fill-current" />
    </Fragment>
  );
}

type ProjectProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  platforms: SkillIcon[];
  skills: SkillIcon[];
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
            className="aspect-video h-32 w-full rounded-md object-cover transition-transform duration-500 hover:scale-105"
            src={image}
            style={{
              objectFit: "cover",
              objectPosition: "0 0",
            }}
          />
        </a>
        <CardTitle className="mt-4 text-base font-semibold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2">{skills.map(ProjectSkill)}</div>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>

      <CardFooter className="flex gap-2">
        <CardDescription className="flex items-center gap-[6px]">
          {platforms.map(ProjectSkill)}
        </CardDescription>
      </CardFooter>
    </Card>
  );
}

export default Project;
