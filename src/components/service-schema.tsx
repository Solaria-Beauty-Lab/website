import { component$ } from "@builder.io/qwik";
import { StructuredData } from "~/components/structured-data";
import { absoluteUrl, siteConfig } from "~/lib/site";

interface ServiceSchemaProps {
  name: string;
  description: string;
  path: string;
  offers?: { name: string; price: string }[];
}

export const ServiceSchema = component$<ServiceSchemaProps>(
  ({ name, description, path, offers }) => (
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: absoluteUrl(path),
        areaServed: siteConfig.areasServed.map((area) => ({
          "@type": "City",
          name: area,
        })),
        provider: {
          "@type": "BeautySalon",
          name: siteConfig.name,
          telephone: siteConfig.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            ...siteConfig.address,
          },
        },
        ...(offers?.length
          ? {
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `Listino ${name}`,
                itemListElement: offers.map((offer) => ({
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: offer.price
                    .replace(/\./g, "")
                    .replace(",", ".")
                    .replace(/[^0-9.]/g, ""),
                  itemOffered: {
                    "@type": "Service",
                    name: offer.name,
                  },
                })),
              },
            }
          : {}),
      }}
    />
  ),
);
