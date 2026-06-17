import deckWindLayer from "@/assets/img/deck-wind-layer.webp";
import deepFreeze from "@/assets/img/deep-freeze.webp";
import lux from "@/assets/img/lux.webp";
import manifest from "@/assets/img/manifest.webp";
import stormdeck from "@/assets/img/stormdeck.webp";
import tauriTypedIpc from "@/assets/img/tauri-typed-ipc.webp";
import typedGeojson from "@/assets/img/typed-geojson.webp";

import AppleIcon from "@/components/ui/icons/apple";
import AwsIcon from "@/components/ui/icons/aws";
import AxumIcon from "@/components/ui/icons/axum";
import CdkIcon from "@/components/ui/icons/cdk";
import CodeIcon from "@/components/ui/icons/code";
import CommandPromptIcon from "@/components/ui/icons/command";
import DeckGlIcon from "@/components/ui/icons/deckgl";
import LumaGlIcon from "@/components/ui/icons/lumagl";
import MapLibreIcon from "@/components/ui/icons/maplibre";
import NextJsIcon from "@/components/ui/icons/nextjs";
import ReactIcon from "@/components/ui/icons/react";
import Rust from "@/components/ui/icons/rust";
import TailwindIcon from "@/components/ui/icons/tailwind";
import TauriIcon from "@/components/ui/icons/tauri";
import TerraformIcon from "@/components/ui/icons/terraform";
import TypeScriptIcon from "@/components/ui/icons/typescript";
import ViteIcon from "@/components/ui/icons/vite";
import WebGlIcon from "@/components/ui/icons/webgl";
import WebIcon from "@/components/ui/icons/web";
import Project, { type Tool } from "./project";

// Each tool is an icon + label, defined once and reused across the cards.
const T = {
  rust: { Icon: Rust, name: "Rust" },
  ts: { Icon: TypeScriptIcon, name: "TypeScript" },
  react: { Icon: ReactIcon, name: "React" },
  next: { Icon: NextJsIcon, name: "Next.js" },
  tailwind: { Icon: TailwindIcon, name: "Tailwind" },
  vite: { Icon: ViteIcon, name: "Vite" },
  deckgl: { Icon: DeckGlIcon, name: "deck.gl" },
  maplibre: { Icon: MapLibreIcon, name: "MapLibre" },
  webgl: { Icon: WebGlIcon, name: "WebGL" },
  lumagl: { Icon: LumaGlIcon, name: "luma.gl" },
  aws: { Icon: AwsIcon, name: "AWS" },
  cdk: { Icon: CdkIcon, name: "CDK" },
  axum: { Icon: AxumIcon, name: "Axum" },
  tauri: { Icon: TauriIcon, name: "Tauri" },
  terraform: { Icon: TerraformIcon, name: "Terraform" },
} satisfies Record<string, Tool>;

// Where the project runs (shown in the card footer).
const P = {
  web: { Icon: WebIcon, name: "Web" },
  macos: { Icon: AppleIcon, name: "macOS" },
  cli: { Icon: CommandPromptIcon, name: "CLI" },
  library: { Icon: CodeIcon, name: "Library" },
} satisfies Record<string, Tool>;

const projects = [
  {
    title: "Stormdeck",
    description: "Live weather on a deck.gl map, served from the AWS free tier.",
    image: stormdeck,
    href: "https://stormdeck.live",
    platforms: [P.web],
    skills: [
      T.rust,
      T.ts,
      T.react,
      T.tailwind,
      T.vite,
      T.deckgl,
      T.maplibre,
      T.webgl,
      T.lumagl,
      T.aws,
      T.cdk,
    ],
  },
  {
    title: "deck-wind-layer",
    description: "A deck.gl v9 wind-particle layer, advected on the GPU.",
    image: deckWindLayer,
    href: "https://github.com/johncarmack1984/deck-wind-layer",
    platforms: [P.web],
    skills: [T.ts, T.deckgl, T.webgl, T.lumagl, T.vite],
  },
  {
    title: "Manifest",
    description: "Self-hosted AWS cost & inventory dashboard.",
    image: manifest,
    href: "https://github.com/johncarmack1984/manifest",
    platforms: [P.web],
    skills: [T.rust, T.axum, T.ts, T.react, T.tailwind, T.vite, T.aws, T.cdk],
  },
  {
    title: "typed-geojson",
    description: "Strongly-typed GeoJSON for Rust.",
    image: typedGeojson,
    href: "https://github.com/johncarmack1984/typed-geojson",
    platforms: [P.library],
    skills: [T.rust, T.ts],
  },
  {
    title: "tauri-typed-ipc",
    description: "Type-safe Tauri IPC from a single Rust trait.",
    image: tauriTypedIpc,
    href: "https://github.com/johncarmack1984/tauri-typed-ipc",
    platforms: [P.library],
    skills: [T.rust, T.tauri, T.ts, T.vite],
  },
  {
    title: "Lux",
    description: "A light controller for USB DMX devices.",
    image: lux,
    href: "https://github.com/johncarmack1984/lux",
    platforms: [P.macos],
    skills: [T.rust, T.axum, T.ts, T.react, T.next, T.tailwind, T.tauri, T.terraform],
  },
  {
    title: "Deep Freeze",
    description: "Migrate from DropBox Business to S3 Deep Archive.",
    image: deepFreeze,
    href: "https://github.com/johncarmack1984/deep-freeze",
    platforms: [P.cli],
    skills: [T.rust, T.aws, T.terraform],
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
