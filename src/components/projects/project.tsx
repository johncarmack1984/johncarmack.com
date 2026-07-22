import type { Key } from "react";

import type { SkillIcon } from "@/components/skills/skill";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import appStoreBadge from "@/assets/app-store-badge.svg";

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
  appStore?: string;
  platforms: Tool[];
  skills: Tool[];
  // Prepped but not yet shown; filtered out before render (see projects.tsx).
  hidden?: boolean;
};

function Project({
  title,
  description,
  image,
  href,
  appStore,
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
        <CardTitle className="mt-4 font-semibold text-base">{title}</CardTitle>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">
          {skills.map(ProjectSkill)}
        </div>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>

      <CardFooter className="flex items-center gap-2">
        <CardDescription className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          {platforms.map(ProjectSkill)}
        </CardDescription>
        {appStore && (
          <a
            aria-label={`${title} on the App Store`}
            className="ml-auto shrink-0"
            href={appStore}
          >
            <img
              alt="Download on the App Store"
              loading="lazy"
              className="h-10 w-auto"
              src={appStoreBadge}
            />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}

export default Project;
