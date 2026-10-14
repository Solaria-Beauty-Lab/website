import type { RequestHandler } from "@builder.io/qwik-city";

const paths = [
  "/",
  "/chi-siamo/",
  "/filosofia/",
  "/trattamenti/",
  "/epilazione-laser/",
  "/trattamenti-viso/",
  "/trattamenti-corpo/",
  "/estetica-avanzata/",
  "/ceretta/",
  "/promozioni/",
  "/galleria/",
  "/contatti/",
];

export const onGet: RequestHandler = ({ text, url, headers }) => {
  headers.set("Content-Type", "application/xml; charset=utf-8");
  const urls = paths
    .map(
      (path) =>
        `<url><loc>${new URL(path, url.origin).toString()}</loc><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq></url>`,
    )
    .join("");
  text(
    200,
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
  );
};
