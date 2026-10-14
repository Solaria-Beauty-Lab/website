import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { createSeo } from "~/lib/seo";
import { siteConfig } from "~/lib/site";

export default component$(() => (
  <>
    <Breadcrumbs
      items={[{ label: "Accessibilità", href: "/accessibilita/" }]}
    />
    <article class="container-shell max-w-4xl py-16 md:py-24">
      <p class="eyebrow">Impegno all'accessibilità</p>
      <h1 class="mt-4 font-display text-5xl md:text-6xl">
        Un sito pensato per essere usato.
      </h1>
      <div class="mt-8 space-y-6 leading-7 text-ink-soft">
        <p>
          Il progetto adotta come obiettivo tecnico WCAG 2.2 livello AA:
          navigazione da tastiera, focus visibile, struttura semantica,
          contrasto, testi alternativi, target touch adeguati e rispetto del
          movimento ridotto.
        </p>
        <p>
          Se incontri una barriera o un contenuto difficile da usare, scrivi a{" "}
          <a
            class="text-bronze-900 underline"
            href={`mailto:${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>{" "}
          indicando pagina, dispositivo e problema riscontrato.
        </p>
        <p>
          Prima del lancio pubblico sono previsti test automatici e manuali su
          tastiera, zoom, screen reader e dispositivi mobili.
        </p>
      </div>
    </article>
  </>
));

export const head = createSeo({
  title: "Accessibilità | Solaria Beauty Lab",
  description:
    "Impegno e riferimenti per l'accessibilità del sito Solaria Beauty Lab.",
  path: "/accessibilita/",
});
