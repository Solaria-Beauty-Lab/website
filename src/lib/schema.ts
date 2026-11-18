import { pages, type SitePage } from "./pages";
import { serviceCatalog } from "../content/services";
import { staffProfiles } from "../content/team";
import { galleryPhotos } from "../content/gallery";
import { siteImages, type SeoImage } from "../content/media";
import { optimizedImage } from "./images";
import { absoluteUrl, siteConfig } from "./site";

export const imageSchema = (image: SeoImage, id: string) => ({
  "@type": "ImageObject",
  "@id": absoluteUrl(id),
  url: absoluteUrl(image.path),
  contentUrl: absoluteUrl(image.path),
  caption: image.alt,
  width: image.width,
  height: image.height,
  encodingFormat: image.type,
});

export const logoSchema = imageSchema(siteImages.logo, "/#logo");

export const bookingAction = {
  "@type": "ScheduleAction",
  name: "Prenota un trattamento da Solaria Beauty Lab",
  target: {
    "@type": "EntryPoint",
    urlTemplate: siteConfig.treatwellUrl,
    actionPlatform: [
      "https://schema.org/DesktopWebPlatform",
      "https://schema.org/MobileWebPlatform",
    ],
  },
} as const;

export const businessSchema = {
  "@type": "BeautySalon",
  "@id": absoluteUrl("/#business"),
  name: siteConfig.name,
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
  image: [
    absoluteUrl(siteImages.reception.path),
    absoluteUrl(siteImages.social.path),
  ],
  logo: { "@id": logoSchema["@id"] },
  mainEntityOfPage: { "@id": absoluteUrl("/#webpage") },
  hasOfferCatalog: { "@id": absoluteUrl("/trattamenti/#catalog") },
  potentialAction: bookingAction,
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
  image: absoluteUrl(siteImages.founder.path),
  worksFor: { "@id": businessSchema["@id"] },
} as const;

export const websiteSchema = {
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteConfig.name,
  url: absoluteUrl("/"),
  inLanguage: "it-IT",
  publisher: { "@id": businessSchema["@id"] },
  about: { "@id": businessSchema["@id"] },
} as const;

export const serviceCatalogSchema = {
  "@type": "OfferCatalog",
  "@id": absoluteUrl("/trattamenti/#catalog"),
  name: "Trattamenti Solaria Beauty Lab",
  url: absoluteUrl("/trattamenti/"),
  numberOfItems: serviceCatalog.length,
  itemListElement: serviceCatalog.map((service) => ({
    "@type": "Offer",
    name: service.title,
    url: absoluteUrl(service.href),
    seller: { "@id": businessSchema["@id"] },
    itemOffered: { "@id": `${absoluteUrl(service.href)}#service` },
  })),
};

export const staffSchemas = staffProfiles.map((person) => ({
  "@type": "Person",
  "@id": absoluteUrl(`/chi-siamo/#${person.id}`),
  name: person.name,
  description: person.description,
  url: absoluteUrl(`/chi-siamo/#${person.id}`),
  image: absoluteUrl(optimizedImage(person.image).src),
  worksFor: { "@id": businessSchema["@id"] },
}));

const pageMainEntities: Record<string, readonly string[]> = {
  [pages.home.path]: [businessSchema["@id"]],
  [pages.contacts.path]: [businessSchema["@id"]],
  [pages.about.path]: [
    founderSchema["@id"],
    ...staffSchemas.map((person) => person["@id"]),
  ],
  [pages.treatments.path]: [serviceCatalogSchema["@id"]],
  [pages.gallery.path]: [absoluteUrl(`${pages.gallery.path}#gallery`)],
  [pages.promotions.path]: [absoluteUrl(`${pages.promotions.path}#offers`)],
  ...Object.fromEntries(
    serviceCatalog.map((service) => [
      service.href,
      [`${absoluteUrl(service.href)}#service`],
    ]),
  ),
};

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
    publisher: { "@id": businessSchema["@id"] },
    about: { "@id": businessSchema["@id"] },
    ...(pageMainEntities[page.path]
      ? { mainEntity: pageMainEntities[page.path].map((id) => ({ "@id": id })) }
      : {}),
    ...(page.path === "/"
      ? {}
      : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    primaryImageOfPage: { "@id": `${url}#primaryimage` },
  };
};

export const pageGraph = (page: SitePage) => {
  const url = absoluteUrl(page.path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageSchema(page),
      imageSchema(page.image ?? siteImages.social, `${page.path}#primaryimage`),
      ...(page.path === pages.home.path || page.path === pages.treatments.path
        ? [serviceCatalogSchema]
        : []),
      ...(page.path === pages.gallery.path
        ? [
            {
              "@type": "ImageGallery",
              "@id": `${url}#gallery`,
              name: pages.gallery.label,
              url,
              isPartOf: { "@id": `${url}#webpage` },
              about: { "@id": businessSchema["@id"] },
              image: galleryPhotos.map((photo) => ({
                "@type": "ImageObject",
                "@id": `${url}#${photo.image}`,
                contentUrl: absoluteUrl(
                  optimizedImage(photo.image, photo.width).src,
                ),
                caption: photo.alt,
                encodingFormat: "image/webp",
                representativeOfPage: false,
                about: { "@id": businessSchema["@id"] },
              })),
            },
          ]
        : []),
    ],
  };
};

export const serializeJsonLd = (data: unknown) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
