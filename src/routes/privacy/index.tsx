import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { iubenda } from "~/lib/iubenda";
import { createSeo } from "~/lib/seo";
import { pages } from "~/lib/pages";

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Privacy", href: "/privacy/" }]} />
    <article class="container-shell max-w-4xl py-16 md:py-24">
      <p class="eyebrow">Informativa sulla privacy</p>
      <h1 class="mt-4 font-display text-5xl md:text-6xl">Privacy</h1>
      <p class="mt-8 max-w-2xl leading-7 text-ink-soft">
        Il documento di riferimento è pubblicato su iubenda. Puoi consultarlo
        tramite il link qui sotto.
      </p>
      <a
        href={iubenda.privacyPolicyUrl}
        class={`${iubenda.policyEmbedClass} mt-6 inline-flex font-semibold text-bronze-900 underline underline-offset-4`}
        title="Privacy Policy"
      >
        Apri l'informativa privacy su iubenda ↗
      </a>
    </article>
  </>
));

export const head = createSeo(pages.privacy);
