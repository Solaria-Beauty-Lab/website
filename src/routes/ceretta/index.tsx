import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { ServiceSchema } from "~/components/service-schema";
import { TreatmentList } from "~/components/treatment-list";
import { Button } from "~/components/ui/button";
import { waxingMenGroups, waxingWomenGroups } from "~/content/treatments";
import { createSeo } from "~/lib/seo";
import { pages } from "~/lib/pages";
import { whatsappUrl } from "~/lib/site";

const allWaxingGroups = [...waxingWomenGroups, ...waxingMenGroups];

export default component$(() => (
  <>
    <Breadcrumbs
      items={[
        { label: "Trattamenti", href: "/trattamenti/" },
        { label: "Ceretta", href: "/ceretta/" },
      ]}
    />
    <PageHero
      eyebrow="Ceretta donna e uomo"
      title="Una pelle liscia, curata e rispettata."
      description="Trattamenti e pacchetti dedicati alle diverse zone del viso e del corpo, con listini distinti per donna e uomo."
    />

    <section class="container-shell py-20 md:py-28">
      <div class="grid gap-12">
        <section
          aria-labelledby="ceretta-donna-title"
          class="relative overflow-hidden rounded-[2.25rem] border border-[#d7a390]/35 bg-gradient-to-br from-[#fffaf7] via-[#f9e7de] to-[#edc9b8] p-5 shadow-[var(--shadow-soft)] md:p-9"
        >
          <div
            aria-hidden="true"
            class="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#b86f54]/20"
          />
          <div class="mb-7 max-w-2xl">
            <p class="eyebrow !text-[#87452f]">Listino donna</p>
            <h2
              id="ceretta-donna-title"
              class="mt-3 font-display text-4xl md:text-5xl"
            >
              Ceretta Donna
            </h2>
            <p class="mt-4 leading-7 text-ink-soft">
              Trattamenti singoli e combinazioni per viso e corpo.
            </p>
          </div>
          <div class="relative">
            <TreatmentList groups={waxingWomenGroups} tone="rose" />
          </div>
        </section>

        <section
          aria-labelledby="ceretta-uomo-title"
          class="relative overflow-hidden rounded-[2.25rem] border border-sage-700/25 bg-gradient-to-br from-[#fbfcf8] via-[#e4ebde] to-[#cbd8c0] p-5 shadow-[var(--shadow-soft)] md:p-9"
        >
          <div
            aria-hidden="true"
            class="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-sage-700/20"
          />
          <div class="mb-7 max-w-2xl">
            <p class="eyebrow !text-sage-700">Listino uomo</p>
            <h2
              id="ceretta-uomo-title"
              class="mt-3 font-display text-4xl md:text-5xl"
            >
              Ceretta Uomo
            </h2>
            <p class="mt-4 leading-7 text-ink-soft">
              Soluzioni singole e pacchetti pensati per la cura personale
              maschile.
            </p>
          </div>
          <div class="relative">
            <TreatmentList groups={waxingMenGroups} tone="sage" />
          </div>
        </section>
      </div>

      <div class="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-bronze-900 p-7 text-white md:flex-row md:items-center md:p-9">
        <div>
          <p class="eyebrow !text-gold-300">Informazioni e disponibilità</p>
          <h2 class="mt-3 font-display text-3xl">
            Vuoi prenotare il tuo trattamento?
          </h2>
        </div>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          size="lg"
        >
          Scrivici su WhatsApp
        </Button>
      </div>
    </section>

    <ServiceSchema
      name="Ceretta donna e uomo"
      description="Ceretta viso e corpo con trattamenti singoli e pacchetti donna e uomo a Guidonia Montecelio."
      path="/ceretta/"
      offers={allWaxingGroups.flatMap((group) =>
        group.items.map((item) => ({
          name: `${group.title} - ${item.name}`,
          price: item.price,
        })),
      )}
    />
  </>
));

export const head = createSeo(pages.waxing);
