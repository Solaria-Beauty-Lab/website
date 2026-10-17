import { component$ } from "@builder.io/qwik";
import { BodyPrograms } from "~/components/body-programs";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { ServiceSchema } from "~/components/service-schema";
import { Button } from "~/components/ui/button";
import { bodyPrograms } from "~/content/treatments";
import { createSeo } from "~/lib/seo";
import { pages } from "~/lib/pages";
import { whatsappUrl } from "~/lib/site";

export default component$(() => (
  <>
    <Breadcrumbs
      items={[
        { label: "Trattamenti", href: "/trattamenti/" },
        { label: "Percorsi corpo", href: "/trattamenti-corpo/" },
      ]}
    />
    <PageHero
      eyebrow="Trattamenti corpo"
      title="Leggerezza, tono e benessere in un percorso mirato."
      description="Massaggi professionali, bendaggi e tecnologie estetiche vengono combinati a partire dalle tue esigenze e dalla valutazione iniziale."
    />
    <section class="container-shell py-20 md:py-28">
      <div class="mb-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <p class="leading-7 text-ink-soft">
          Quattro collezioni, ciascuna con una funzione precisa: drenare,
          rimodellare, rigenerare o ritrovare equilibrio. Consulta i singoli
          trattamenti e parti dalla sezione più vicina alla tua esigenza.
        </p>
        <p class="text-sm font-semibold text-bronze-900">
          Prezzi per singolo trattamento
        </p>
      </div>
      <div class="mb-10 grid overflow-hidden rounded-[2rem] border border-gold-400/20 bg-gradient-to-r from-[#e9d7bd] via-[#fff8e8] to-[#d9b77d] shadow-[var(--shadow-card)] md:grid-cols-[1.15fr_.85fr]">
        <div class="p-7 md:p-10">
          <p class="eyebrow">Esperienza Solaria</p>
          <h2 class="mt-3 font-display text-3xl md:text-4xl">
            Il trattamento giusto nasce dall'ascolto.
          </h2>
          <p class="mt-4 max-w-xl leading-7 text-ink-soft">
            Prodotti professionali, tecnologie e manualità vengono combinati in
            base all'obiettivo del percorso e alla risposta del corpo nel tempo.
          </p>
        </div>
        <img
          src="/images/gallery-1.avif"
          alt="Prodotti professionali utilizzati nei percorsi Solaria"
          width="624"
          height="1106"
          loading="lazy"
          class="h-72 w-full object-cover object-top md:h-full md:min-h-72"
        />
      </div>
      <BodyPrograms programs={bodyPrograms} />
      <p class="mt-6 text-sm leading-6 text-ink-soft">
        Durata, frequenza, abbinamenti e condizioni dei pacchetti vengono
        confermati durante la consulenza.
      </p>

      <div class="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-bronze-900 p-7 text-white md:flex-row md:items-center md:p-9">
        <div>
          <p class="eyebrow !text-gold-300">Consulenza personalizzata</p>
          <h2 class="mt-3 font-display text-3xl md:text-4xl">
            Quale percorso corpo fa per te?
          </h2>
          <p class="mt-3 max-w-2xl text-sm leading-6 text-cream-100/75">
            Raccontaci il tuo obiettivo: ti aiuteremo a individuare il punto di
            partenza più coerente con le tue esigenze.
          </p>
        </div>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          size="lg"
        >
          Chiedi una consulenza
        </Button>
      </div>
    </section>
    <ServiceSchema
      name="Trattamenti corpo"
      description="Massaggi, percorsi drenanti e trattamenti corpo con tecnologie estetiche a Villanova di Guidonia."
      path="/trattamenti-corpo/"
      offers={bodyPrograms.flatMap((program) =>
        program.items.map((item) => ({
          name: `${program.title} · ${item.name}`,
          price: item.price,
        })),
      )}
    />
  </>
));

export const head = createSeo(pages.body);
