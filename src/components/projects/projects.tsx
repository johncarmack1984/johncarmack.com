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
import PythonIcon from "@/components/ui/icons/python";
import ReactIcon from "@/components/ui/icons/react";
import Rust from "@/components/ui/icons/rust";
import SmartphoneIcon from "@/components/ui/icons/smartphone";
import StripeIcon from "@/components/ui/icons/stripe";
import TailwindIcon from "@/components/ui/icons/tailwind";
import TauriIcon from "@/components/ui/icons/tauri";
import TerraformIcon from "@/components/ui/icons/terraform";
import TypeScriptIcon from "@/components/ui/icons/typescript";
import ViteIcon from "@/components/ui/icons/vite";
import WebIcon from "@/components/ui/icons/web";
import WebGlIcon from "@/components/ui/icons/webgl";

import Project, { type Tool } from "./project";
import acceptPayments from "@/assets/img/accept-payments.webp";
import deckWindLayer from "@/assets/img/deck-wind-layer.webp";
import deepFreeze from "@/assets/img/deep-freeze.webp";
import geoDesktopBench from "@/assets/img/geo-desktop-bench.webp";
import glslint from "@/assets/img/glslint.webp";
import lux from "@/assets/img/lux.webp";
import manifest from "@/assets/img/manifest.webp";
import promptward from "@/assets/img/promptward.webp";
import sheaf from "@/assets/img/sheaf.webp";
import stormdeck from "@/assets/img/stormdeck.webp";
import tauriTypedIpc from "@/assets/img/tauri-typed-ipc.webp";
import typedGeojson from "@/assets/img/typed-geojson.webp";
import vegify from "@/assets/img/vegify.webp";

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
  stripe: { Icon: StripeIcon, name: "Stripe" },
  tauri: { Icon: TauriIcon, name: "Tauri" },
  terraform: { Icon: TerraformIcon, name: "Terraform" },
  python: { Icon: PythonIcon, name: "Python" },
} satisfies Record<string, Tool>;

// Where the project runs (shown in the card footer).
const P = {
  web: { Icon: WebIcon, name: "Web" },
  macos: { Icon: AppleIcon, name: "macOS" },
  ios: { Icon: SmartphoneIcon, name: "iOS" },
  cli: { Icon: CommandPromptIcon, name: "CLI" },
  library: { Icon: CodeIcon, name: "Library" },
} satisfies Record<string, Tool>;

// Projects are grouped by focus area so the specialties read at a glance. This
// order sets which section leads; change a project's `group` to move its card.
const groupOrder = [
  "LLM / AI",
  "Geospatial & GPU",
  "Apps",
  "Infrastructure & tooling",
] as const;

type Group = (typeof groupOrder)[number];

// Exported for src/lib/structured-data.ts, which turns the visible cards into
// schema.org nodes at build time.
export const projects = [
  // Sheaf: prepped for launch. Delete `hidden: true` to flip it live.
  {
    title: "Sheaf",
    description:
      "Export an iMessage conversation to a keepsake PDF, all on your Mac.",
    image: sheaf,
    href: "https://github.com/johncarmack1984/message-to-pdf",
    platforms: [P.macos],
    skills: [T.rust, T.tauri, T.ts],
    group: "Apps",
    hidden: true,
  },
  {
    title: "promptward",
    description:
      "An LLM gateway that blocks prompt injection and proves the detection rate.",
    image: promptward,
    href: "https://github.com/johncarmack1984/promptward",
    platforms: [P.web],
    skills: [T.rust, T.ts, T.react, T.vite],
    group: "LLM / AI",
  },
  {
    title: "Stormdeck",
    description:
      "Live weather on a deck.gl map, served from the AWS free tier.",
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
    group: "Geospatial & GPU",
  },
  {
    title: "deck-wind-layer",
    description: "A deck.gl v9 wind-particle layer, advected on the GPU.",
    image: deckWindLayer,
    href: "https://github.com/johncarmack1984/deck-wind-layer",
    platforms: [P.web],
    skills: [T.ts, T.deckgl, T.webgl, T.lumagl, T.vite],
    group: "Geospatial & GPU",
  },
  {
    title: "glslint",
    description:
      "A GLSL checker for the deck.gl and luma.gl shaders stock tools can't parse.",
    image: glslint,
    href: "https://github.com/johncarmack1984/glslint",
    platforms: [P.cli, P.library],
    skills: [T.rust, T.ts, T.deckgl, T.lumagl],
    group: "Geospatial & GPU",
  },
  {
    title: "geo-desktop-bench",
    description: "Finding the fastest geospatial desktop stack.",
    image: geoDesktopBench,
    href: "https://geobench.johncarmack.com",
    platforms: [P.web],
    skills: [T.rust, T.ts, T.deckgl, T.maplibre, T.webgl, T.lumagl, T.tauri],
    group: "Geospatial & GPU",
  },
  {
    title: "typed-geojson",
    description: "Strongly-typed GeoJSON for Rust.",
    image: typedGeojson,
    href: "https://github.com/johncarmack1984/typed-geojson",
    platforms: [P.library],
    skills: [T.rust, T.ts],
    group: "Geospatial & GPU",
  },
  {
    title: "Lux",
    description:
      "A DMX lighting controller: multi-fixture engine, sACN streaming, cloud sync.",
    image: lux,
    href: "https://github.com/johncarmack1984/lux",
    appStore: "https://apps.apple.com/us/app/lux-for-dmx/id6788795353",
    platforms: [P.macos, P.ios],
    skills: [T.rust, T.axum, T.ts, T.react, T.tailwind, T.tauri, T.terraform],
    group: "Apps",
  },
  {
    title: "vegify.app",
    description:
      "Micronutrition tracking & recipe sharing for plant-based cooking.",
    image: vegify,
    href: "https://github.com/vegify/vegify.app",
    appStore: "https://apps.apple.com/us/app/vegify-app/id6787673614",
    platforms: [P.web, P.ios],
    skills: [T.rust, T.axum, T.ts, T.react, T.tailwind, T.vite, T.tauri],
    group: "Apps",
  },
  {
    title: "Manifest",
    description: "Self-hosted AWS cost & inventory dashboard.",
    image: manifest,
    href: "https://github.com/johncarmack1984/manifest",
    platforms: [P.web],
    skills: [T.rust, T.axum, T.ts, T.react, T.tailwind, T.vite, T.aws, T.cdk],
    group: "Infrastructure & tooling",
  },
  {
    title: "accept-payments",
    description: "A Rust payments & invoicing API on AWS Lambda.",
    image: acceptPayments,
    href: "https://github.com/johncarmack1984/accept-payments",
    platforms: [P.web],
    skills: [T.rust, T.axum, T.stripe, T.ts, T.react, T.aws],
    group: "Infrastructure & tooling",
  },
  {
    title: "tauri-typed-ipc",
    description: "Type-safe Tauri IPC from a single Rust trait.",
    image: tauriTypedIpc,
    href: "https://github.com/johncarmack1984/tauri-typed-ipc",
    platforms: [P.library],
    skills: [T.rust, T.tauri, T.ts, T.vite],
    group: "Infrastructure & tooling",
  },
  {
    title: "Deep Freeze",
    description: "Migrate from Dropbox Business to S3 Deep Archive.",
    image: deepFreeze,
    href: "https://github.com/johncarmack1984/deep-freeze",
    platforms: [P.cli],
    skills: [T.rust, T.aws, T.terraform],
    group: "Infrastructure & tooling",
  },
] satisfies Array<{
  title: string;
  description: string;
  image: string;
  href: string;
  appStore?: string;
  platforms: Tool[];
  skills: Tool[];
  group: Group;
  hidden?: boolean;
}>;

export default function Projects() {
  const visible = projects.filter((project) => !project.hidden);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
          Projects
        </h2>
        <div className="mt-8 flex flex-col gap-12">
          {groupOrder.map((group) => {
            const items = visible.filter((project) => project.group === group);
            if (items.length === 0) return null;
            return (
              <div key={group}>
                <h3 className="font-semibold text-muted-foreground text-sm uppercase tracking-wider">
                  {group}
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map(Project)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
