import type { RequestHandler } from "@builder.io/qwik-city";
import { indexablePages, pages } from "~/lib/pages";
import { galleryPhotos } from "~/content/gallery";
import { optimizedImage } from "~/lib/images";
import { absoluteUrl } from "~/lib/site";

const escapeXml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;",
    };
    return entities[character];
  });

export const onGet: RequestHandler = ({ send }) => {
  const urls = indexablePages.map((page) => {
    const imagePaths = new Set([
      ...(page.image ? [page.image.path] : []),
      ...(page.path === pages.gallery.path
        ? galleryPhotos.map(
            (photo) => optimizedImage(photo.image, photo.width).src,
          )
        : []),
    ]);
    const image = [...imagePaths]
      .map(
        (path) =>
          `\n    <image:image><image:loc>${escapeXml(absoluteUrl(path))}</image:loc></image:image>`,
      )
      .join("");
    return `  <url>\n    <loc>${escapeXml(absoluteUrl(page.path))}</loc>${image}\n  </url>`;
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls.join("\n")}\n</urlset>\n`;
  send(
    new Response(xml, {
      status: 200,
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    }),
  );
};
