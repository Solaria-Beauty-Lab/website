import type { DocumentHead } from "@builder.io/qwik-city";
import { absoluteUrl, siteConfig } from "./site";

export interface SeoInput {
  title: string;
  description: string;
  path: string;
}

export const createSeo = ({
  title,
  description,
  path,
}: SeoInput): DocumentHead => {
  const canonicalUrl = absoluteUrl(path);
  const socialImage = absoluteUrl("/brand/og-solaria-new.jpg");

  return {
    title,
    meta: [
      { name: "description", content: description },
      {
        name: "robots",
        content:
          "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "it_IT" },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:url", content: canonicalUrl },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: socialImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Solaria Beauty Lab" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
};
