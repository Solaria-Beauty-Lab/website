import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { Faq } from "~/components/faq";
import { PageHero } from "~/components/page-hero";
import { SectionHeading } from "~/components/section-heading";
import { ServiceSchema } from "~/components/service-schema";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { laserCombos, laserFaq, laserZones } from "~/content/treatments";
import { createSeo } from "~/lib/seo";

export default component$(() => (
  <>
    <Breadcrumbs
      items={[
        { label: "Trattamenti", href: "/trattamenti/" },
        { label: "Epilazione laser", href: "/epilazione-laser/" },
      ]}
    />
    <PageHero
      eyebrow="Epilazione laser Alma"
      title="Meno ricrescita, più libertà nella tua routine."
      description="A Villanova di Guidonia, un percorso con laser a diodo 808/810 definito dopo una consulenza dedicata a pelle, pelo e zona da trattare."
    />

    <section class="container-shell grid gap-12 py-20 md:py-28 lg:grid-cols-[1fr_.8fr] lg:items-start">
      <div>
        <SectionHeading
          eyebrow="Come funziona"
          title="Tecnologia Alma, percorso personalizzato."
          description="L'energia del laser viene indirizzata al follicolo pilifero per ridurre progressivamente la ricrescita. Parametri e frequenza vengono adattati dopo la valutazione iniziale."
        />
        <div class="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            [
              "1",
              "Consulenza",
              "Valutazione di pelle, pelo, zona e informazioni rilevanti.",
            ],
            [
              "2",
              "Seduta",
              "Trattamento eseguito con parametri definiti dall'operatrice.",
            ],
            [
              "3",
              "Continuità",
              "Monitoraggio della risposta e indicazioni tra le sedute.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              class="rounded-2xl border border-gold-400/20 bg-gradient-to-br from-white via-cream-50 to-gold-300/20 p-5 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
            >
              <span class="grid h-8 w-8 place-items-center rounded-full bg-cream-100 text-sm font-bold text-bronze-900">
                {number}
              </span>
              <h3 class="mt-4 font-display text-2xl">{title}</h3>
              <p class="mt-2 text-sm leading-6 text-ink-soft">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <aside class="relative overflow-hidden rounded-[2rem] border border-gold-300/35 bg-gradient-to-br from-[#6e3418] via-[#9d571f] to-[#d19a35] p-7 text-white shadow-[0_28px_75px_-28px_rgba(107,59,22,.75)]">
        <div
          aria-hidden="true"
          class="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/20"
        />
        <div
          aria-hidden="true"
          class="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-gold-300/20 blur-2xl"
        />
        <div class="relative">
          <Badge class="border-white/15 bg-white/10 text-gold-300">
            Prima di iniziare
          </Badge>
          <h2 class="mt-5 font-display text-3xl">
            La consulenza è parte del trattamento.
          </h2>
          <p class="mt-4 leading-7 text-white/85">
            Serve a valutare il percorso, chiarire preparazione e precauzioni e
            rispondere alle tue domande prima della prima seduta.
          </p>
          <dl class="mt-5 divide-y divide-white/15 rounded-2xl border border-white/20 bg-[#3a1f12]/35 px-4 backdrop-blur-sm">
            <div class="flex items-center justify-between gap-4 py-3">
              <dt class="text-sm text-white/85">Consulenza classica</dt>
              <dd class="font-semibold text-gold-300">Gratuita</dd>
            </div>
            <div class="flex items-center justify-between gap-4 py-3">
              <dt class="text-sm text-white/85">
                Consulenza completa con prova ed ecografia del pelo
              </dt>
              <dd class="font-semibold text-gold-300">10 €</dd>
            </div>
          </dl>
          <Button href="/contatti/" variant="secondary" class="mt-6 w-full">
            Prenota la valutazione
          </Button>
        </div>
      </aside>
    </section>

    <section class="bg-cream-100 py-20 md:py-24" id="prezzi">
      <div class="container-shell">
        <SectionHeading
          eyebrow="Aree e prezzi"
          title="Un listino più facile da leggere."
          description="Le aree sono raggruppate per dimensione e il prezzo indicato si riferisce alla singola seduta."
        />
        <div class="mt-12 grid gap-5 lg:grid-cols-2">
          {laserZones.map((zone) => (
            <Card key={zone.size} class="overflow-hidden">
              <div class="border-b border-bronze-800/10 bg-white p-6">
                <div class="flex items-center justify-between gap-4">
                  <h3 class="font-display text-3xl">Zone {zone.size}</h3>
                  <Badge>{zone.size}</Badge>
                </div>
                <p class="mt-3 text-sm leading-6 text-ink-soft">{zone.areas}</p>
              </div>
              <dl class="divide-y divide-bronze-800/10 px-6">
                {zone.prices.map(([label, price]) => (
                  <div
                    key={label}
                    class="flex items-center justify-between gap-4 py-4"
                  >
                    <dt class="text-sm text-ink-soft">{label}</dt>
                    <dd class="font-semibold text-bronze-900">{price}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          ))}
        </div>
        <p class="mt-6 text-sm leading-6 text-ink-soft">
          La consulenza definisce idoneità, zona corretta e condizioni del
          percorso prima dell'acquisto.
        </p>

        <div class="mt-16">
          <SectionHeading
            eyebrow="10 sedute"
            title="Solaria Epil Combo."
            description="Cinque combinazioni disponibili nei percorsi Donna e Uomo, con zone e benefit indicati nel catalogo."
          />
          <div class="mt-10 grid gap-6 xl:grid-cols-2">
            {["Donna", "Uomo"].map((audience, audienceIndex) => (
              <section
                key={audience}
                class={
                  audienceIndex === 0
                    ? "overflow-hidden rounded-[2rem] border border-[#d7a390]/40 bg-gradient-to-b from-[#fffaf7] to-[#f8e8df] shadow-[0_22px_65px_-35px_rgba(138,70,47,.55)]"
                    : "overflow-hidden rounded-[2rem] border border-sage-700/30 bg-gradient-to-b from-[#fbfcf8] to-[#e4ebde] shadow-[0_22px_65px_-35px_rgba(58,77,52,.55)]"
                }
              >
                <header
                  class={
                    audienceIndex === 0
                      ? "border-b border-[#d7a390]/35 bg-gradient-to-r from-[#743d2d] to-[#b86f54] p-6 text-white"
                      : "border-b border-sage-700/25 bg-gradient-to-r from-[#263128] to-[#66745d] p-6 text-white"
                  }
                >
                  <p class="text-xs font-bold uppercase tracking-[.16em] text-[#ffe0a0]">
                    Solaria Epil Combo
                  </p>
                  <h3 class="mt-2 font-display text-3xl">{audience}</h3>
                </header>
                <div class="divide-y divide-bronze-800/10 px-6">
                  {laserCombos.map((combo) => (
                    <article
                      key={combo.name}
                      class="grid gap-3 py-5 sm:grid-cols-[1fr_auto]"
                    >
                      <div>
                        <h4
                          class={
                            audienceIndex === 0
                              ? "font-semibold uppercase tracking-wide text-[#87452f]"
                              : "font-semibold uppercase tracking-wide text-sage-700"
                          }
                        >
                          {combo.name}
                        </h4>
                        <p class="mt-1 text-sm leading-6 text-ink">
                          {combo.composition}
                        </p>
                        {"bonus" in combo && combo.bonus && (
                          <p class="mt-1 text-xs leading-5 text-ink-soft">
                            {combo.bonus}
                          </p>
                        )}
                      </div>
                      <p
                        class={
                          audienceIndex === 0
                            ? "font-display text-2xl font-semibold text-[#87452f]"
                            : "font-display text-2xl font-semibold text-sage-700"
                        }
                      >
                        {audience === "Donna"
                          ? combo.womanPrice
                          : combo.manPrice}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section class="container-shell py-20 md:py-28">
      <div class="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          eyebrow="FAQ epilazione"
          title="Le risposte essenziali, senza promesse assolute."
        />
        <Faq items={laserFaq} />
      </div>
    </section>

    <ServiceSchema
      name="Epilazione laser Alma"
      description="Percorso di epilazione laser a diodo 808/810 presso Solaria Beauty Lab a Guidonia Montecelio."
      path="/epilazione-laser/"
      offers={[
        ...laserZones.flatMap((zone) =>
          zone.prices.map(([audience, price]) => ({
            name: `Seduta laser ${audience} - Zone ${zone.size}`,
            price,
          })),
        ),
        ...["Donna", "Uomo"].flatMap((audience) =>
          laserCombos.map((combo) => ({
            name: `Solaria Epil Combo ${audience} - ${combo.name}`,
            price: audience === "Donna" ? combo.womanPrice : combo.manPrice,
          })),
        ),
      ]}
    />
  </>
));

export const head = createSeo({
  title: "Epilazione laser a Villanova di Guidonia | Solaria",
  description:
    "Scopri tecnologia Alma, aree, prezzi e percorso di epilazione laser a Villanova di Guidonia. Prenota una consulenza con Solaria Beauty Lab.",
  path: "/epilazione-laser/",
});
