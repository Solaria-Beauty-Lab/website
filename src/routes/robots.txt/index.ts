import type { RequestHandler } from "@builder.io/qwik-city";
import { absoluteUrl } from "~/lib/site";

export const onGet: RequestHandler = ({ text, headers }) => {
  headers.set("Content-Type", "text/plain; charset=utf-8");
  text(
    200,
    `User-agent: *\nAllow: /\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`,
  );
};
