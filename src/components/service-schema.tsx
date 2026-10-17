import { component$ } from "@builder.io/qwik";
import { StructuredData } from "~/components/structured-data";
import { euroAmount } from "~/lib/pricing";
import { businessSchema } from "~/lib/schema";
import { absoluteUrl } from "~/lib/site";

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
        "@id": `${absoluteUrl(path)}#service`,
        name,
        description,
        url: absoluteUrl(path),
        mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
        areaServed: businessSchema.areaServed,
        provider: { "@id": businessSchema["@id"] },
        ...(offers?.length
          ? {
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `Listino ${name}`,
                itemListElement: offers.map((offer) => ({
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  price: euroAmount(offer.price),
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
