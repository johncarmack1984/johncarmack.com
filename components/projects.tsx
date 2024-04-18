import { Fragment, Key } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import deepFreeze from "@/public/assets/img/deep-freeze.webp";
import lux from "@/public/assets/img/lux.webp";
import tohSkillBuilder from "@/public/assets/img/toh-skill-builder.webp";
import { GlobeIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AppleIcon from "@/components/ui/icons/apple";
import CommandPromptIcon from "@/components/ui/icons/command";
import type { ProjectIcon } from "@/components/ui/icons/types";
import JavaScriptIcon from "./ui/icons/javascript";
import ReactIcon from "./ui/icons/react";
import Rust from "./ui/icons/rust";
import TerraformIcon from "./ui/icons/terraform";
import VueIcon from "./ui/icons/vue";
import WebIcon from "./ui/icons/web";

const projects = [
  {
    title: "Lux",
    description: "A light controller for USB DMX devices.",
    image: lux,
    href: "https://github.com/johncarmack1984/lux",
    platforms: [AppleIcon],
    skills: [Rust, ReactIcon],
  },
  {
    title: "Skill Builder",
    description: "Character skill builder for Fate-based TTRPGs.",
    image: tohSkillBuilder,
    href: "https://toh-skill-builder.netlify.app/",
    skills: [JavaScriptIcon, VueIcon],
    platforms: [WebIcon],
  },
  {
    title: "Deep Freeze",
    description: "Migrate from DropBox Business to S3 Deep Archive.",
    image: deepFreeze,
    href: "https://github.com/johncarmack1984/deep-freeze",
    skills: [Rust, TerraformIcon],
    platforms: [CommandPromptIcon],
  },
];

function Skill(Icon: ProjectIcon, key: Key) {
  return (
    <Fragment key={key}>
      <Icon className="size-6 fill-current" />
    </Fragment>
  );
}

function Platform(Icon: ProjectIcon, key: Key) {
  return (
    <Fragment key={key}>
      <Icon className="size-6 fill-current" />
    </Fragment>
  );
}

function Project({
  title,
  description,
  image,
  href,
  platforms,
  skills,
}: {
  title: string;
  description: string;
  image: StaticImageData;
  href: string;
  platforms: any[];
  skills: ProjectIcon[];
}) {
  return (
    <Card key={href} className="rounded-md">
      <CardHeader>
        <Link aria-label={title} href={href}>
          <Image
            alt={title}
            className="aspect-video h-32 w-full rounded-md object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            src={image}
            style={{
              objectFit: "cover",
              objectPosition: "0 0",
            }}
          />
        </Link>
        <CardTitle className="mt-4 text-base font-semibold">{title}</CardTitle>
        <div className="flex gap-2">{skills.map(Skill)}</div>
      </CardHeader>
      <CardContent className="text-sm">{description}</CardContent>

      <CardFooter className="flex gap-2">
        <CardDescription className="flex items-center gap-[6px]">
          {platforms.map(Platform)}
        </CardDescription>
      </CardFooter>
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
