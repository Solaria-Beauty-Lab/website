import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { iubenda } from "~/lib/iubenda";
import { createSeo } from "~/lib/seo";
import { pages } from "~/lib/pages";

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
          class={`${iubenda.policyEmbedClass} font-semibold text-bronze-900 underline underline-offset-4`}
          title="Cookie Policy"
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

export const head = createSeo(pages.cookie);
