import { disambiguatingDescription } from "@/lib/structured-data";
import { contactLinks, displayHref } from "@/components/contact";
import { heroIntro } from "@/components/hero/hero";
import { contributions } from "@/components/opensource/opensource";
import { projects } from "@/components/projects/projects";

// /llms.txt (https://llmstxt.org): the page's own words as Markdown for
// language-model crawlers. prerender.mjs calls this at build time with the
// title and description from index.html, like the JSON-LD and the sitemap;
// everything else comes from the arrays that render the page, so the file
// never says anything the page doesn't.

const SITE = "https://johncarmack.com";

// Keep a bracket in the link text from closing the Markdown link early.
const linkText = (text: string) => text.replace(/[\\[\]]/g, "\\$&");

const item = (text: string, href: string, note?: string) => {
  const entry = `- [${linkText(text)}](${href})`;
  return note ? `${entry}: ${note}` : entry;
};

export function llmsTxt({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return [
    "# John Carmack",
    "",
    `> ${description}`,
    "",
    heroIntro,
    "",
    disambiguatingDescription,
    "",
    "## Home",
    "",
    item(title, `${SITE}/`),
    "",
    "## Projects",
    "",
    ...projects.map((project) =>
      item(project.title, project.href, project.description),
    ),
    "",
    "## Open source",
    "",
    ...contributions.map((contribution) =>
      item(contribution.repo, contribution.mergedUrl, contribution.summary),
    ),
    "",
    "## Contact",
    "",
    ...contactLinks.map(({ href }) => item(displayHref(href), href)),
    "",
  ].join("\n");
}
