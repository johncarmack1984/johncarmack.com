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
    project: "specta",
    repo: "specta-rs/specta",
    mergedUrl: search("specta-rs/specta"),
    summary:
      "Merged work toward 2.0: the OpenAPI paths layer, OAS 3.1 by default, and a bigint remapper the maintainer now uses in his own serde_json tests.",
  },
  {
    project: "covector",
    repo: "jbolda/covector",
    mergedUrl: search("jbolda/covector"),
    summary:
      "Cargo workspace-dependency support, plus follow-on work on workspace-root version bumps.",
  },
  {
    project: "biome",
    repo: "biomejs/biome",
    mergedUrl: search("biomejs/biome"),
    summary:
      "Sharpening the useSortedClasses lint rule for Tailwind class order, including how same-utility values sort.",
  },
  {
    project: "koed",
    repo: "koed-labs/koed",
    mergedUrl: search("koed-labs/koed"),
    summary:
      "A macOS test-reliability fix and a Claude Code integration guide.",
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
