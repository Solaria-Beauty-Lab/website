import type { RequestHandler } from "@builder.io/qwik-city";
import { absoluteUrl, indexablePaths } from "~/lib/site";

export const onGet: RequestHandler = ({ text, headers }) => {
  headers.set("Content-Type", "application/xml; charset=utf-8");
  const urls = indexablePaths
    .map(
      (path) =>
        `<url><loc>${absoluteUrl(path)}</loc><changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq></url>`,
    )
    .join("");
  text(
    200,
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
  );
};
