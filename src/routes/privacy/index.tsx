import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { createSeo } from "~/lib/seo";
import { siteConfig } from "~/lib/site";

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Privacy", href: "/privacy/" }]} />
    <article class="container-shell max-w-4xl py-16 md:py-24">
      <p class="eyebrow">Informativa essenziale</p>
      <h1 class="mt-4 font-display text-5xl md:text-6xl">Privacy</h1>
      <p class="mt-5 text-sm text-ink-soft">
        Ultimo aggiornamento: 21 agosto 2026
      </p>
      <div class="mt-10 space-y-8 leading-7 text-ink-soft [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-ink">
        <section>
          <h2>Titolare e contatti</h2>
          <p class="mt-3">
            Il riferimento operativo è {siteConfig.legalName}, contattabile
            all'indirizzo{" "}
            <a
              class="text-bronze-900 underline"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            . I dati fiscali completi dovranno essere integrati prima della
            pubblicazione sul dominio definitivo.
          </p>
        </section>
        <section>
          <h2>Dati inviati volontariamente</h2>
          <p class="mt-3">
            Se contatti il centro tramite telefono, WhatsApp o email, i dati che
            scegli di comunicare vengono usati per rispondere alla richiesta,
            organizzare la consulenza o gestire l'appuntamento. Il modulo
            presente nel sito apre il programma email dell'utente e non
            memorizza dati nel sito.
          </p>
        </section>
        <section>
          <h2>Base e durata</h2>
          <p class="mt-3">
            I dati necessari alla risposta vengono trattati per dare seguito
            alla richiesta e conservati per il tempo necessario alla gestione
            del contatto e agli eventuali obblighi applicabili. L'eventuale
            marketing richiede una scelta separata.
          </p>
        </section>
        <section>
          <h2>Destinatari e diritti</h2>
          <p class="mt-3">
            I dati possono essere trattati dai fornitori strettamente necessari
            ai canali scelti dall'utente. Puoi chiedere accesso, rettifica,
            cancellazione, limitazione o informazioni sul trattamento scrivendo
            al contatto indicato.
          </p>
        </section>
        <section>
          <h2>Prima del lancio</h2>
          <p class="mt-3">
            Questa informativa deve essere validata e completata con ragione
            sociale, dati fiscali, fornitori, tempi di conservazione e strumenti
            effettivamente attivati nel sito pubblicato.
          </p>
        </section>
      </div>
    </article>
  </>
));

export const head = createSeo({
  title: "Privacy | Solaria Beauty Lab",
  description:
    "Informazioni sul trattamento dei dati nel sito Solaria Beauty Lab.",
  path: "/privacy/",
});
