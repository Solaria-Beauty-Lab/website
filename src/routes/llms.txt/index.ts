import type { RequestHandler } from "@builder.io/qwik-city";
import { pages } from "~/lib/pages";
import { absoluteUrl, siteConfig } from "~/lib/site";

const entry = (label: string, path: string, description: string) =>
  `- [${label}](${absoluteUrl(path)}): ${description}`;

export const onGet: RequestHandler = ({ text }) => {
  const content = [
    `# ${siteConfig.name}`,
    "",
    `> ${pages.home.description}`,
    "",
    "Solaria Beauty Lab è un centro estetico a Villanova di Guidonia (RM), Italia. Le pagine del sito sono la fonte aggiornata per servizi, prezzi, condizioni e contatti. Le informazioni non sostituiscono una consulenza individuale e non promettono risultati garantiti.",
    "",
    "## Servizi",
    entry(
      pages.treatments.label,
      pages.treatments.path,
      pages.treatments.description,
    ),
    entry(pages.laser.label, pages.laser.path, pages.laser.description),
    entry(pages.face.label, pages.face.path, pages.face.description),
    entry(pages.body.label, pages.body.path, pages.body.description),
    entry(
      pages.advanced.label,
      pages.advanced.path,
      pages.advanced.description,
    ),
    entry(pages.waxing.label, pages.waxing.path, pages.waxing.description),
    "",
    "## Centro e informazioni",
    entry(pages.home.label, pages.home.path, pages.home.description),
    entry(pages.about.label, pages.about.path, pages.about.description),
    entry(
      pages.philosophy.label,
      pages.philosophy.path,
      pages.philosophy.description,
    ),
    entry(pages.gallery.label, pages.gallery.path, pages.gallery.description),
    entry(
      pages.promotions.label,
      pages.promotions.path,
      pages.promotions.description,
    ),
    entry(
      pages.contacts.label,
      pages.contacts.path,
      pages.contacts.description,
    ),
    "",
    "## Informative",
    entry(pages.privacy.label, pages.privacy.path, pages.privacy.description),
    entry(pages.cookie.label, pages.cookie.path, pages.cookie.description),
    entry(
      pages.accessibility.label,
      pages.accessibility.path,
      pages.accessibility.description,
    ),
    "",
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
  ].join("\n");

  text(200, `${content}\n`);
};
