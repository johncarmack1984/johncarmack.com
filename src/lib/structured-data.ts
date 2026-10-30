import { projects } from "@/components/projects/projects";

import john from "@/assets/img/john.avif";

// schema.org graph for the one page: WebSite, ProfilePage, the Person it is
// about, and every project card as a software node authored by that
// Person. Called from prerender.mjs at build time (see entry-server.tsx) so the
// structured data is derived from the same array that renders the cards.
//
// The Person carries the disambiguation load for search and LLM answer engines:
// a stable @id the satellite sites can reference, the name split into parts
// (the namesake is John D. Carmack), the portrait, and every profile John
// controls under sameAs.

const SITE = "https://johncarmack.com";
const PERSON_ID = `${SITE}/#person`;
const WEBSITE_ID = `${SITE}/#website`;
const PROFILE_ID = `${SITE}/#profilepage`;

const LANGUAGES = new Set(["Rust", "TypeScript", "JavaScript", "Python"]);

// The Person's disambiguator, also published at /llms.txt (src/lib/llms-txt.ts).
export const disambiguatingDescription =
  "John M. Carmack, a software engineer (GitHub: johncarmack1984): Lead Content Distribution Engineer at Disney and a MapLibre voting member, writing Rust and TypeScript. Not John D. Carmack, the id Software / Oculus founder of the same name.";

const absolute = (path: string) =>
  path.startsWith("http") ? path : `${SITE}${path}`;

function softwareNodes() {
  return projects.map((project) => {
    const languages = project.skills
      .map((skill) => skill.name)
      .filter((name) => LANGUAGES.has(name));
    const base = {
      name: project.title,
      description: project.description,
      url: project.href,
      image: absolute(project.image),
      author: { "@id": PERSON_ID },
    };
    if (project.appStore) {
      return {
        "@type": "SoftwareApplication",
        ...base,
        operatingSystem: project.platforms
          .map((platform) => platform.name)
          .join(", "),
        installUrl: project.appStore,
      };
    }
    if (project.href.startsWith("https://github.com/")) {
      return {
        "@type": "SoftwareSourceCode",
        ...base,
        codeRepository: project.href,
        programmingLanguage: languages,
      };
    }
    return { "@type": "SoftwareApplication", ...base };
  });
}

export function structuredData(buildDate: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: `${SITE}/`,
        name: "John Carmack",
        inLanguage: "en",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": PROFILE_ID,
        url: `${SITE}/`,
        isPartOf: { "@id": WEBSITE_ID },
        dateModified: buildDate,
        mainEntity: { "@id": PERSON_ID },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: "John Carmack",
        givenName: "John",
        additionalName: "M.",
        familyName: "Carmack",
        alternateName: ["John M. Carmack", "johncarmack1984"],
        url: `${SITE}/`,
        image: absolute(john),
        jobTitle: "Lead Content Distribution Engineer",
        worksFor: {
          "@type": "Organization",
          name: "The Walt Disney Company",
        },
        description:
          "Lead Content Distribution Engineer at Disney and a MapLibre voting member. Open source in Rust and TypeScript: the Martin tile server, MapLibre GL JS, and MapLibre Native.",
        disambiguatingDescription,
        knowsAbout: [
          "Content delivery networks (CDN)",
          "HTTP caching",
          "Vector tile servers",
          "Large language models",
          "Production AI systems",
          "Retrieval-augmented generation",
          "Prompt injection defense",
          "Geospatial data visualization",
          "deck.gl",
          "luma.gl",
          "MapLibre",
          "GPU rendering",
          "WebGL",
          "Aviation software",
          "Electronic flight bag (EFB)",
          "Flight planning systems",
          "Safety-critical systems",
          "Rust",
          "TypeScript",
          "Tauri",
        ],
        sameAs: [
          "https://github.com/johncarmack1984",
          "https://www.linkedin.com/in/johncarmack1984",
          "https://x.com/johncarmack",
          "https://crates.io/users/johncarmack1984",
        ],
      },
      ...softwareNodes(),
    ],
  };
}
