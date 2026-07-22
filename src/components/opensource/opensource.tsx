import { GitHubLogoIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Pr = { n: number; state: "merged" | "open" };

type Contribution = {
  project: string;
  repo: string;
  // Live GitHub search of my merged PRs on this repo -- the receipts.
  mergedUrl: string;
  merged: number;
  open?: number;
  summary: string;
  prs: Pr[];
};

const search = (repo: string) =>
  `https://github.com/${repo}/pulls?q=is%3Apr+author%3Ajohncarmack1984+is%3Amerged`;

const contributions: Contribution[] = [
  {
    project: "specta",
    repo: "specta-rs/specta",
    mergedUrl: search("specta-rs/specta"),
    merged: 14,
    summary:
      "14 PRs merged toward 2.0: the OpenAPI paths layer, OAS 3.1 by default, and a bigint remapper the maintainer now uses in his own serde_json tests.",
    prs: [
      { n: 562, state: "merged" },
      { n: 560, state: "merged" },
      { n: 548, state: "merged" },
      { n: 547, state: "merged" },
      { n: 546, state: "merged" },
      { n: 508, state: "merged" },
    ],
  },
  {
    project: "covector",
    repo: "jbolda/covector",
    mergedUrl: search("jbolda/covector"),
    merged: 1,
    open: 1,
    summary:
      "Cargo workspace-dependency support, merged. A follow-up on workspace-root version bumps is in review.",
    prs: [
      { n: 397, state: "merged" },
      { n: 400, state: "open" },
    ],
  },
  {
    project: "biome",
    repo: "biomejs/biome",
    mergedUrl: search("biomejs/biome"),
    merged: 2,
    open: 1,
    summary:
      "Sharpened the useSortedClasses lint rule for Tailwind class order. A follow-up ordering same-utility values is open.",
    prs: [
      { n: 10880, state: "merged" },
      { n: 10872, state: "merged" },
      { n: 11016, state: "open" },
    ],
  },
  {
    project: "koed",
    repo: "koed-labs/koed",
    mergedUrl: search("koed-labs/koed"),
    merged: 2,
    summary:
      "A macOS test-reliability fix and a Claude Code integration guide, both merged.",
    prs: [
      { n: 313, state: "merged" },
      { n: 314, state: "merged" },
    ],
  },
];

function CountBadge({ merged, open }: { merged: number; open?: number }) {
  return (
    <span className="shrink-0 text-muted-foreground text-xs">
      {merged} merged
      {open ? ` · ${open} open` : ""}
    </span>
  );
}

function PrChip({ repo, pr }: { repo: string; pr: Pr }) {
  const merged = pr.state === "merged";
  return (
    <a
      key={pr.n}
      aria-label={`${repo} pull request #${pr.n} (${pr.state})`}
      className={
        merged
          ? "rounded-md border px-2 py-0.5 font-mono text-foreground text-xs transition-colors hover:border-primary hover:text-primary"
          : "rounded-md border border-dashed px-2 py-0.5 font-mono text-muted-foreground text-xs transition-colors hover:text-foreground"
      }
      href={`https://github.com/${repo}/pull/${pr.n}`}
    >
      #{pr.n}
      {merged ? "" : " open"}
    </a>
  );
}

function ContributionCard(c: Contribution) {
  return (
    <Card key={c.repo} className="rounded-md">
      <CardHeader>
        <div className="flex items-baseline justify-between gap-3">
          <a
            aria-label={`My merged pull requests on ${c.repo}`}
            href={c.mergedUrl}
          >
            <CardTitle className="font-semibold text-base">
              {c.project}
            </CardTitle>
          </a>
          <CountBadge merged={c.merged} open={c.open} />
        </div>
        <a
          aria-label={`${c.repo} on GitHub`}
          className="inline-flex w-fit items-center gap-1.5 text-muted-foreground text-xs transition-colors hover:text-foreground"
          href={`https://github.com/${c.repo}`}
        >
          <GitHubLogoIcon className="size-3.5" />
          {c.repo}
        </a>
      </CardHeader>
      <CardContent className="text-sm">{c.summary}</CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {c.prs.map((pr) => (
          <PrChip key={pr.n} pr={pr} repo={c.repo} />
        ))}
      </CardFooter>
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
          Merged into other people's codebases. Every link goes to the PR.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {contributions.map(ContributionCard)}
        </div>
      </div>
    </section>
  );
}
