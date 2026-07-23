import AwsIcon from "@/components/ui/icons/aws";
import D3Icon from "@/components/ui/icons/d3";
import DeckGlIcon from "@/components/ui/icons/deckgl";
import GitHubActionsIcon from "@/components/ui/icons/github-actions";
import JavaScriptIcon from "@/components/ui/icons/javascript";
import KubernetesIcon from "@/components/ui/icons/kubernetes";
import MapLibreIcon from "@/components/ui/icons/maplibre";
import NextJsIcon from "@/components/ui/icons/nextjs";
import NodeJsIcon from "@/components/ui/icons/node";
import PostgreSqlIcon from "@/components/ui/icons/postgresql";
import PythonIcon from "@/components/ui/icons/python";
import ReactIcon from "@/components/ui/icons/react";
import RustIcon from "@/components/ui/icons/rust";
import SnowflakeIcon from "@/components/ui/icons/snowflake";
import TailwindIcon from "@/components/ui/icons/tailwind";
import TauriIcon from "@/components/ui/icons/tauri";
import TerraformIcon from "@/components/ui/icons/terraform";
import TypeScriptIcon from "@/components/ui/icons/typescript";
import ViteIcon from "@/components/ui/icons/vite";
import WebGlIcon from "@/components/ui/icons/webgl";

import type { SkillIcon } from "./skill";

type Skill = { Icon: SkillIcon; name: string };

// Grouped so the specialties read at a glance: languages and the GPU/geospatial
// stack lead, then the supporting frontend, data, and cloud tooling.
const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Languages",
    skills: [
      { Icon: RustIcon, name: "Rust" },
      { Icon: TypeScriptIcon, name: "TypeScript" },
      { Icon: JavaScriptIcon, name: "JavaScript" },
      { Icon: PythonIcon, name: "Python" },
    ],
  },
  {
    label: "GPU & geospatial",
    skills: [
      { Icon: DeckGlIcon, name: "deck.gl" },
      { Icon: WebGlIcon, name: "WebGL" },
      { Icon: MapLibreIcon, name: "MapLibre" },
      { Icon: D3Icon, name: "D3.js" },
    ],
  },
  {
    label: "Frontend & apps",
    skills: [
      { Icon: ReactIcon, name: "React" },
      { Icon: NextJsIcon, name: "Next.js" },
      { Icon: ViteIcon, name: "Vite" },
      { Icon: TailwindIcon, name: "Tailwind CSS" },
      { Icon: NodeJsIcon, name: "Node.js" },
      { Icon: TauriIcon, name: "Tauri" },
    ],
  },
  {
    label: "Data",
    skills: [
      { Icon: PostgreSqlIcon, name: "PostgreSQL" },
      { Icon: SnowflakeIcon, name: "Snowflake" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { Icon: AwsIcon, name: "AWS" },
      { Icon: TerraformIcon, name: "Terraform" },
      { Icon: KubernetesIcon, name: "Kubernetes" },
      { Icon: GitHubActionsIcon, name: "GitHub Actions" },
    ],
  },
];

function SkillItem({ Icon, name }: Skill) {
  return (
    <span className="inline-flex items-center gap-2 text-sm">
      <Icon className="size-5 fill-current" />
      {name}
    </span>
  );
}

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
          Skills
        </h2>
        <div className="mt-8 flex flex-col divide-y divide-border">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:gap-8"
            >
              <h3 className="shrink-0 font-semibold text-muted-foreground text-sm uppercase tracking-wider sm:w-44 sm:pt-0.5">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-x-6 gap-y-3">
                {group.skills.map((skill) => (
                  <SkillItem key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
