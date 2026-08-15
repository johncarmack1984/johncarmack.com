import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Contribution = {
  project: string;
  repo: string;
  // Live GitHub search of my merged PRs on this repo -- evergreen receipts, no
  // counts to go stale.
  mergedUrl: string;
  summary: string;
};

const search = (repo: string) =>
  `https://github.com/${repo}/pulls?q=is%3Apr+author%3Ajohncarmack1984+is%3Amerged`;

const contributions: Contribution[] = [
  {
    project: "maplibre-gl-js",
    repo: "maplibre/maplibre-gl-js",
    mergedUrl: search("maplibre/maplibre-gl-js"),
    summary:
      "Rebuilt the benchmark suite from scratch, resolving a two-year-old open issue, then landed all three Phase 1 graphics modernization milestones — integer vertex attributes, bitwise unpacking, and texelFetch for elevation.",
  },
  {
    project: "martin",
    repo: "maplibre/martin",
    mergedUrl: search("maplibre/martin"),
    summary:
      "Test harness modernization — splitting monolithic e2e tests into focused Rust modules, plus mbtiles and Postgres source discovery ports.",
  },
  {
    project: "maplibre-native-rs",
    repo: "maplibre/maplibre-native-rs",
    mergedUrl: search("maplibre/maplibre-native-rs"),
    summary:
      "Added AddressSanitizer and LeakSanitizer CI, and fixed the ambient cache to respect the configured maximum size.",
  },
  {
    project: "specta",
    repo: "specta-rs/specta",
    mergedUrl: search("specta-rs/specta"),
    summary:
      "Merged work toward 2.0: the OpenAPI paths layer, OAS 3.1 by default, and a bigint remapper the maintainer now uses in his own serde_json tests.",
  },
  {
    project: "biome",
    repo: "biomejs/biome",
    mergedUrl: search("biomejs/biome"),
    summary:
      "Sharpening the useSortedClasses lint rule for Tailwind class order, including how same-utility values sort.",
  },
];

function ContributionCard({ project, repo, mergedUrl, summary }: Contribution) {
  return (
    <Card key={repo} className="rounded-md">
      <CardHeader>
        <a aria-label={`My merged pull requests on ${repo}`} href={mergedUrl}>
          <CardTitle className="font-semibold text-base">{project}</CardTitle>
        </a>
        <a
          aria-label={`${repo} on GitHub`}
          className="inline-flex w-fit items-center gap-1.5 text-muted-foreground text-xs transition-colors hover:text-foreground"
          href={`https://github.com/${repo}`}
        >
          <GitHubLogoIcon className="size-3.5" />
          {repo}
        </a>
      </CardHeader>
      <CardContent className="text-sm">{summary}</CardContent>
    </Card>
  );
}

export default function OpenSource() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="open-source">
      <div className="container px-4 md:px-6">
        <h2 className="font-bold text-3xl tracking-tighter sm:text-4xl md:text-5xl">
          Open source
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Merged into other people's codebases. Each title links to the pull
          requests on GitHub.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {contributions.map(ContributionCard)}
        </div>
      </div>
    </section>
  );
}
