import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { iubenda } from "~/lib/iubenda";
import { createSeo } from "~/lib/seo";

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Cookie", href: "/cookie/" }]} />
    <article class="container-shell max-w-4xl py-16 md:py-24">
      <p class="eyebrow">Cookie e preferenze</p>
      <h1 class="mt-4 font-display text-5xl md:text-6xl">Cookie</h1>
      <p class="mt-8 max-w-2xl leading-7 text-ink-soft">
        Il documento di riferimento è pubblicato su iubenda. Puoi consultarlo e
        modificare in qualunque momento le tue preferenze.
      </p>
      <div class="mt-6 flex flex-wrap gap-5">
        <a
          href={iubenda.cookiePolicyUrl}
          class="font-semibold text-bronze-900 underline underline-offset-4"
        >
          Apri la Cookie Policy su iubenda ↗
        </a>
        <button
          type="button"
          class="iubenda-cs-preferences-link font-semibold text-bronze-900 underline underline-offset-4"
        >
          Modifica le preferenze cookie
        </button>
      </div>
    </article>
  </>
));

export const head = createSeo({
  title: "Cookie | Solaria Beauty Lab",
  description:
    "Informazioni sui cookie e sugli strumenti tecnici del sito Solaria Beauty Lab.",
  path: "/cookie/",
});
