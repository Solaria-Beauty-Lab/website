import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { createSeo } from "~/lib/seo";

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Cookie", href: "/cookie/" }]} />
    <article class="container-shell max-w-4xl py-16 md:py-24">
      <p class="eyebrow">Trasparenza tecnica</p>
      <h1 class="mt-4 font-display text-5xl md:text-6xl">Cookie</h1>
      <div class="mt-10 space-y-7 leading-7 text-ink-soft [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-ink">
        <section>
          <h2>Configurazione attuale</h2>
          <p class="mt-3">
            Questa versione del sito non integra analytics, pixel pubblicitari,
            mappe incorporate, chat di terze parti o cookie di profilazione. Le
            indicazioni stradali e i social si aprono solo dopo un click
            dell'utente.
          </p>
        </section>
        <section>
          <h2>Cookie tecnici</h2>
          <p class="mt-3">
            Il sito può utilizzare funzionalità tecniche strettamente necessarie
            al funzionamento dell'infrastruttura. Non vengono usate per
            profilare l'utente.
          </p>
        </section>
        <section>
          <h2>Modifiche future</h2>
          <p class="mt-3">
            Se verranno aggiunti strumenti non tecnici, dovranno essere
            inventariati, descritti e bloccati fino alla scelta dell'utente
            quando richiesto. La policy dovrà essere aggiornata insieme al
            sistema di preferenze.
          </p>
        </section>
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
