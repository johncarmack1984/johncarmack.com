import deepFreeze from "@/public/assets/img/deep-freeze.webp";
import lux from "@/public/assets/img/lux.webp";
import tohSkillBuilder from "@/public/assets/img/toh-skill-builder.webp";

import AppleIcon from "@/components/ui/icons/apple";
import CommandPromptIcon from "@/components/ui/icons/command";
import JavaScriptIcon from "../ui/icons/javascript";
import ReactIcon from "../ui/icons/react";
import Rust from "../ui/icons/rust";
import TerraformIcon from "../ui/icons/terraform";
import VueIcon from "../ui/icons/vue";
import WebIcon from "../ui/icons/web";
import Project from "./project";

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

export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(Project)}
        </div>
      </div>
    </section>
  );
}
