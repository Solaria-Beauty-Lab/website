import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { ServiceSchema } from "~/components/service-schema";
import { TreatmentList } from "~/components/treatment-list";
import { faceGroups } from "~/content/treatments";
import { createSeo } from "~/lib/seo";
import { pages } from "~/lib/pages";

export default component$(() => (
  <>
    <Breadcrumbs
      items={[
        { label: "Trattamenti", href: "/trattamenti/" },
        { label: "Percorsi viso", href: "/trattamenti-viso/" },
      ]}
    />
    <PageHero
      eyebrow="Trattamenti viso"
      title="Una pelle più curata comincia da una lettura attenta."
      description="Igiene estetica, Programma Lift e Skin Rituals selezionati in base alla tipologia e alle esigenze della pelle."
    />
    <section class="container-shell py-20 md:py-28">
      <div class="mb-10 grid gap-4 sm:grid-cols-3">
        {[
          ["Igiene estetica", "Pulizia viso Base o Plus."],
          ["Programma Lift", "Protocolli senza aghi e radiofrequenza."],
          [
            "Skin Rituals",
            "Cinque rituali dedicati alle diverse esigenze della pelle.",
          ],
        ].map(([title, text], index) => (
          <div
            key={title}
            class={
              [
                "rounded-2xl border border-[#c89545]/25 bg-gradient-to-br from-[#ffe3a1] to-[#e9b84f] p-5 shadow-[var(--shadow-card)]",
                "rounded-2xl border border-[#c78455]/25 bg-gradient-to-br from-[#f3c29a] to-[#d78d5c] p-5 shadow-[var(--shadow-card)]",
                "rounded-2xl border border-[#b68e5b]/25 bg-gradient-to-br from-[#e9d4a9] to-[#cfa867] p-5 shadow-[var(--shadow-card)]",
              ][index]
            }
          >
            <h2 class="font-display text-2xl">{title}</h2>
            <p class="mt-2 text-sm font-medium leading-6 text-[#3f2a1d]">
              {text}
            </p>
          </div>
        ))}
      </div>
      <div class="mb-12 grid items-center gap-6 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#5e321d] to-[#a76332] p-4 text-white shadow-[var(--shadow-soft)] md:grid-cols-[.72fr_1.28fr] md:p-6">
        <img
          src="/images/gallery-5.avif"
          alt="Prodotti professionali selezionati per i percorsi viso Solaria"
          width="622"
          height="1106"
          loading="lazy"
          class="h-64 w-full rounded-[1.4rem] object-cover object-top md:h-80"
        />
        <div class="px-3 py-5 md:px-8">
          <p class="eyebrow !text-gold-300">Tecnologia e manualità</p>
          <h2 class="mt-3 font-display text-4xl md:text-5xl">
            Ogni pelle racconta esigenze diverse.
          </h2>
          <p class="mt-4 max-w-xl leading-7 text-white/80">
            La consulenza e l'analisi iniziale aiutano a scegliere attivi,
            manualità e tecnologie coerenti con la situazione di partenza.
          </p>
        </div>
      </div>
      <TreatmentList groups={faceGroups} tone="gold" />
    </section>
    <ServiceSchema
      name="Trattamenti viso"
      description="Igiene estetica, Programma Lift e Solaria Skin Rituals a Guidonia Montecelio."
      path="/trattamenti-viso/"
      offers={faceGroups.flatMap((group) =>
        group.items.map((item) => ({ name: item.name, price: item.price })),
      )}
    />
  </>
));

export const head = createSeo(pages.face);
