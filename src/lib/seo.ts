import type { DocumentHead } from "@builder.io/qwik-city";
import type { SitePage } from "./pages";
import { serializeJsonLd, pageGraph } from "./schema";
import { absoluteUrl, siteConfig } from "./site";
import { siteImages } from "../content/media";

export const createSeo = ({
  title,
  description,
  path,
  ...pageDetails
}: SitePage): DocumentHead => {
  const canonicalUrl = absoluteUrl(path);
  const image = pageDetails.image ?? siteImages.social;
  const socialImage = absoluteUrl(image.path);

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
      { property: "og:image:secure_url", content: socialImage },
      { property: "og:image:type", content: image.type },
      { property: "og:image:width", content: String(image.width) },
      { property: "og:image:height", content: String(image.height) },
      { property: "og:image:alt", content: image.alt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: socialImage },
      { name: "twitter:image:alt", content: image.alt },
    ],
    links: [
      { rel: "canonical", href: canonicalUrl },
      {
        rel: "describedby",
        href: absoluteUrl("/llms.txt"),
        type: "text/plain",
      },
    ],
    scripts: [
      {
        key: "webpage-jsonld",
        props: { type: "application/ld+json" },
        script: serializeJsonLd(
          pageGraph({ title, description, path, ...pageDetails }),
        ),
      },
    ],
  };
};
