import { component$ } from "@builder.io/qwik";

export const StructuredData = component$<{ data: unknown }>(({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={JSON.stringify(data)}
  />
));
