import { component$ } from "@builder.io/qwik";
import { StructuredData } from "~/components/structured-data";
import { euroAmount } from "~/lib/pricing";
import { bookingAction, businessSchema } from "~/lib/schema";
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
        "@id": `${absoluteUrl(path)}#service`,
        name,
        description,
        url: absoluteUrl(path),
        mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
        areaServed: businessSchema.areaServed,
        provider: { "@id": businessSchema["@id"] },
        serviceType: name,
        image: { "@id": `${absoluteUrl(path)}#primaryimage` },
        potentialAction: {
          ...bookingAction,
          object: { "@id": `${absoluteUrl(path)}#service` },
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: siteConfig.treatwellUrl,
          serviceLocation: { "@id": businessSchema["@id"] },
        },
        ...(offers?.length
          ? {
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: `Listino ${name}`,
                itemListElement: offers.map((offer) => ({
                  "@type": "Offer",
                  name: offer.name,
                  url: absoluteUrl(path),
                  seller: { "@id": businessSchema["@id"] },
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
