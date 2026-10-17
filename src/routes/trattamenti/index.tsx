import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { SectionHeading } from "~/components/section-heading";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { serviceCatalog as treatments } from "~/content/services";
import { createSeo } from "~/lib/seo";
import { pages } from "~/lib/pages";

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Trattamenti", href: "/trattamenti/" }]} />
    <PageHero
      eyebrow="Trattamenti a Villanova di Guidonia"
      title="Percorsi estetici pensati intorno a te."
      description="Epilazione laser, viso, corpo, Solaria Lashes e ceretta: esplora le aree, consulta i prezzi e scegli da dove iniziare."
    />

    <section class="container-shell py-20 md:py-28">
      <SectionHeading
        eyebrow="Scegli la tua area"
        title="Cinque modi di prenderti cura di te."
        description="Ogni scheda presenta servizi, prezzi e informazioni utili in una struttura chiara e facile da consultare anche da mobile."
      />
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        {treatments.map((item, index) => (
          <Card
            key={item.href}
            class={`group relative min-h-[21rem] overflow-hidden border-gold-500/55 bg-gradient-to-r ${item.surface} transition-transform duration-300 hover:-translate-y-1 hover:border-gold-500/85`}
          >
            <img
              src={item.listingImage}
              alt=""
              width="1600"
              height="1000"
              loading="lazy"
              class="absolute inset-y-0 right-0 h-full w-[62%] object-cover object-right opacity-95"
            />
            <div
              aria-hidden="true"
              class="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,248,.98)_0%,rgba(255,253,248,.97)_53%,rgba(255,253,248,.76)_70%,rgba(255,253,248,.08)_100%)]"
            />
            <div
              aria-hidden="true"
              class="absolute right-0 top-0 h-28 w-28 rounded-bl-full border-b border-l border-[#b77a2a]/30 bg-[#e6bd70] shadow-[-8px_8px_22px_-16px_rgba(121,73,20,.55)] transition-transform group-hover:scale-110"
            />
            <span
              aria-hidden="true"
              class="absolute right-6 top-5 font-display text-4xl text-bronze-900"
            >
              0{index + 1}
            </span>
            <CardHeader class="relative max-w-[76%] md:max-w-[65%]">
              <div class="flex items-center justify-between gap-4">
                <span class="eyebrow">{item.accent}</span>
              </div>
              <CardTitle class="mt-5 text-3xl md:text-4xl">
                {"listingTitle" in item ? item.listingTitle : item.title}
              </CardTitle>
              <p class="font-semibold text-bronze-800">
                {item.listingSubtitle}
              </p>
            </CardHeader>
            <CardContent class="relative max-w-[76%] md:max-w-[65%]">
              <p class="pretty leading-7 text-ink-soft">
                {item.listingDescription}
              </p>
              <Button href={item.href} variant="secondary" class="mt-6">
                Vedi trattamenti e prezzi
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    <section class="bg-cream-100 py-20">
      <div class="container-shell grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
        <p class="eyebrow">Non sai cosa scegliere?</p>
        <div>
          <h2 class="balance font-display text-4xl md:text-5xl">
            Inizia da una consulenza, non da un nome.
          </h2>
          <p class="mt-4 max-w-2xl leading-7 text-ink-soft">
            Raccontaci l'esigenza: ti spiegheremo quali opzioni sono disponibili
            e quali informazioni servono per definire il percorso.
          </p>
          <Button href="/contatti/" class="mt-6">
            Prenota la consulenza
          </Button>
        </div>
      </div>
    </section>
  </>
));

export const head = createSeo(pages.treatments);
