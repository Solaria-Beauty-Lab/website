import { component$ } from "@builder.io/qwik";
import { StructuredData } from "~/components/structured-data";
import { absoluteUrl } from "~/lib/site";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export const Breadcrumbs = component$<{ items: BreadcrumbItem[] }>(
  ({ items }) => {
    const allItems = [{ label: "Home", href: "/" }, ...items];
    return (
      <>
        <nav
          aria-label="Breadcrumb"
          class="container-shell py-5 text-sm text-ink-soft"
        >
          <ol class="flex flex-wrap items-center gap-2">
            {allItems.map((item, index) => (
              <li key={item.href} class="flex items-center gap-2">
                {index > 0 && (
                  <span aria-hidden="true" class="text-gold-500">
                    /
                  </span>
                )}
                {index === allItems.length - 1 ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <a href={item.href} class="hover:text-bronze-900">
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: allItems.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.label,
              item: absoluteUrl(item.href),
            })),
          }}
        />
      </>
    );
  },
);
