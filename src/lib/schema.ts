import { absoluteUrl, siteConfig } from "./site";

export const businessSchema = {
  "@type": ["BeautySalon", "LocalBusiness"],
  "@id": absoluteUrl("/#business"),
  name: siteConfig.name,
  alternateName: siteConfig.legalName,
  description: siteConfig.description,
  url: absoluteUrl("/"),
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDisplay,
      contactType: "customer service",
      availableLanguage: "Italian",
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.whatsappDisplay,
      contactType: "customer service",
      availableLanguage: "Italian",
    },
  ],
  image: absoluteUrl("/brand/og-solaria-new.jpg"),
  logo: absoluteUrl("/brand/logo-new-ui.jpg"),
  address: { "@type": "PostalAddress", ...siteConfig.address },
  areaServed: siteConfig.areasServed.map((name) => ({
    "@type": "City",
    name,
  })),
  sameAs: [
    siteConfig.social.instagram,
    siteConfig.social.facebook,
    siteConfig.social.tiktok,
    siteConfig.googleReviewsUrl,
  ],
  hasMap: siteConfig.googleReviewsUrl,
  founder: { "@id": absoluteUrl("/#martina-seguiti") },
} as const;

export const founderSchema = {
  "@type": "Person",
  "@id": absoluteUrl("/#martina-seguiti"),
  name: "Martina Seguiti",
  jobTitle: "Estetista professionale e direttrice tecnica",
  image: absoluteUrl("/images/gallery-6.avif"),
  worksFor: { "@id": businessSchema["@id"] },
} as const;

export const websiteSchema = {
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: siteConfig.name,
  url: absoluteUrl("/"),
  inLanguage: "it-IT",
} as const;
