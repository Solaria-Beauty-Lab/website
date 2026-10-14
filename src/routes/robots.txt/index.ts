import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = ({ text, url }) => {
  text(200, `User-agent: *\nAllow: /\nSitemap: ${url.origin}/sitemap.xml\n`);
};
