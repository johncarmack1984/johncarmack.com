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
import Skill from "./skill";

const skills = [
  { Icon: RustIcon, name: "Rust" },
  { Icon: TypeScriptIcon, name: "TypeScript" },
  { Icon: JavaScriptIcon, name: "JavaScript" },
  { Icon: ReactIcon, name: "React" },
  { Icon: TailwindIcon, name: "Tailwind CSS" },
  { Icon: NextJsIcon, name: "Next.js" },
  { Icon: ViteIcon, name: "Vite" },
  { Icon: NodeJsIcon, name: "Node.js" },
  { Icon: TauriIcon, name: "Tauri" },
  { Icon: MapLibreIcon, name: "MapLibre" },
  { Icon: DeckGlIcon, name: "deck.gl" },
  { Icon: WebGlIcon, name: "WebGL" },
  { Icon: D3Icon, name: "D3.js" },
  { Icon: PythonIcon, name: "Python" },
  { Icon: PostgreSqlIcon, name: "PostgreSQL" },
  { Icon: SnowflakeIcon, name: "Snowflake" },
  { Icon: AwsIcon, name: "AWS" },
  { Icon: TerraformIcon, name: "Terraform" },
  { Icon: KubernetesIcon, name: "Kubernetes" },
  { Icon: GitHubActionsIcon, name: "GitHub Actions" },
];

export default function Skills() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="skills">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map(Skill)}
        </div>
      </div>
    </section>
  );
}
