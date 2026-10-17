import { component$ } from "@builder.io/qwik";
import { serializeJsonLd } from "~/lib/schema";

export const StructuredData = component$<{ data: unknown }>(({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={serializeJsonLd(data)}
  />
));
