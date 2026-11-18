import type { SitePage } from "./pages";
import { serviceCatalog } from "../content/services";
import { staffProfiles } from "../content/team";
import { absoluteUrl, siteConfig } from "./site";

export const businessSchema = {
  "@type": "BeautySalon",
  "@id": absoluteUrl("/#business"),
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  description: siteConfig.description,
  url: absoluteUrl("/"),
  telephone: siteConfig.phoneHref,
  email: siteConfig.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneHref,
      contactType: "customer service",
      availableLanguage: "Italian",
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappHref,
      contactType: "customer service",
      availableLanguage: "Italian",
    },
  ],
  image: absoluteUrl(siteConfig.socialImagePath),
  logo: absoluteUrl(siteConfig.logoPath),
  address: { "@type": "PostalAddress", ...siteConfig.address },
  areaServed: siteConfig.areasServed.map((name) => ({
    "@type": "City",
    name,
  })),
  sameAs: [
    ...Object.values(siteConfig.social),
    siteConfig.treatwellUrl,
    siteConfig.googleReviewsUrl,
  ],
  hasMap: siteConfig.googleReviewsUrl,
  founder: { "@id": absoluteUrl("/chi-siamo/#martina-seguiti") },
  member: staffProfiles.map((person) => ({
    "@id": absoluteUrl(`/chi-siamo/#${person.id}`),
  })),
} as const;

export const founderSchema = {
  "@type": "Person",
  "@id": absoluteUrl("/chi-siamo/#martina-seguiti"),
  name: "Martina Seguiti",
  jobTitle: "Estetista professionale e direttrice tecnica",
  url: absoluteUrl("/chi-siamo/"),
  image: absoluteUrl("/images/gallery-6.avif"),
  worksFor: { "@id": businessSchema["@id"] },
} as const;

export const websiteSchema = {
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteConfig.name,
  url: absoluteUrl("/"),
  inLanguage: "it-IT",
  publisher: { "@id": businessSchema["@id"] },
} as const;

export const staffSchemas = staffProfiles.map((person) => ({
  "@type": "Person",
  "@id": absoluteUrl(`/chi-siamo/#${person.id}`),
  name: person.name,
  description: person.description,
  url: absoluteUrl(`/chi-siamo/#${person.id}`),
  image: absoluteUrl(`/images/optimized/${person.image}-1200.webp`),
  worksFor: { "@id": businessSchema["@id"] },
}));

export const webPageSchema = (page: SitePage) => {
  const url = absoluteUrl(page.path);

  return {
    "@context": "https://schema.org",
    "@type": page.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "it-IT",
    isPartOf: { "@id": websiteSchema["@id"] },
    about: { "@id": businessSchema["@id"] },
    ...(serviceCatalog.some((service) => service.href === page.path)
      ? { mainEntity: { "@id": `${url}#service` } }
      : {}),
    ...(page.path === "/"
      ? {}
      : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    ...(page.image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            url: absoluteUrl(page.image),
          },
        }
      : {}),
  };
};

export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
