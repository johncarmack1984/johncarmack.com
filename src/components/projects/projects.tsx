import deckWindLayer from "@/assets/img/deck-wind-layer.webp";
import deepFreeze from "@/assets/img/deep-freeze.webp";
import lux from "@/assets/img/lux.webp";
import manifest from "@/assets/img/manifest.webp";
import stormdeck from "@/assets/img/stormdeck.webp";
import tauriTypedIpc from "@/assets/img/tauri-typed-ipc.webp";
import typedGeojson from "@/assets/img/typed-geojson.webp";

import AppleIcon from "@/components/ui/icons/apple";
import AwsIcon from "@/components/ui/icons/aws";
import CodeIcon from "@/components/ui/icons/code";
import CommandPromptIcon from "@/components/ui/icons/command";
import DeckGlIcon from "@/components/ui/icons/deckgl";
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
import Project from "./project";

const projects = [
  {
    title: "Stormdeck",
    description: "Live weather on a deck.gl map, served from the AWS free tier.",
    image: stormdeck,
    href: "https://stormdeck.live",
    platforms: [WebIcon],
    skills: [
      Rust,
      TypeScriptIcon,
      ReactIcon,
      TailwindIcon,
      ViteIcon,
      DeckGlIcon,
      MapLibreIcon,
      WebGlIcon,
      AwsIcon,
    ],
  },
  {
    title: "deck-wind-layer",
    description: "A deck.gl v9 wind-particle layer, advected on the GPU.",
    image: deckWindLayer,
    href: "https://github.com/johncarmack1984/deck-wind-layer",
    platforms: [WebIcon],
    skills: [TypeScriptIcon, DeckGlIcon, WebGlIcon, ViteIcon],
  },
  {
    title: "Manifest",
    description: "Self-hosted AWS cost & inventory dashboard.",
    image: manifest,
    href: "https://github.com/johncarmack1984/manifest",
    platforms: [WebIcon],
    skills: [Rust, TypeScriptIcon, ReactIcon, TailwindIcon, ViteIcon, AwsIcon],
  },
  {
    title: "typed-geojson",
    description: "Strongly-typed GeoJSON for Rust.",
    image: typedGeojson,
    href: "https://github.com/johncarmack1984/typed-geojson",
    platforms: [CodeIcon],
    skills: [Rust, TypeScriptIcon],
  },
  {
    title: "tauri-typed-ipc",
    description: "Type-safe Tauri IPC from a single Rust trait.",
    image: tauriTypedIpc,
    href: "https://github.com/johncarmack1984/tauri-typed-ipc",
    platforms: [CodeIcon],
    skills: [Rust, TauriIcon, TypeScriptIcon, ViteIcon],
  },
  {
    title: "Lux",
    description: "A light controller for USB DMX devices.",
    image: lux,
    href: "https://github.com/johncarmack1984/lux",
    platforms: [AppleIcon],
    skills: [Rust, TypeScriptIcon, ReactIcon, NextJsIcon, TailwindIcon, TauriIcon],
  },
  {
    title: "Deep Freeze",
    description: "Migrate from DropBox Business to S3 Deep Archive.",
    image: deepFreeze,
    href: "https://github.com/johncarmack1984/deep-freeze",
    platforms: [CommandPromptIcon],
    skills: [Rust, AwsIcon, TerraformIcon],
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
