import { component$, useSignal } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { SectionHeading } from "~/components/section-heading";
import { StructuredData } from "~/components/structured-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { optimizedImage } from "~/lib/images";
import { createSeo } from "~/lib/seo";
import { euroAmount } from "~/lib/pricing";
import { pages } from "~/lib/pages";
import { businessSchema } from "~/lib/schema";
import { absoluteUrl, whatsappUrl } from "~/lib/site";

const welcomeOffer = {
  name: "Solaria Welcome",
  price: "10 €",
  description:
    "Prima esperienza Solaria con un trattamento viso, corpo oppure epilazione laser.",
} as const;

const methodPaths = [
  {
    name: "Metodo Solaria Mini",
    eyebrow: "4 appuntamenti personalizzati",
    price: "199 €",
    description:
      "Il primo passo per ritrovare luminosità, leggerezza e benessere con pochi appuntamenti mirati.",
    treatments: [
      "1 rituale viso con tecnologia avanzata",
      "1 trattamento V-Shape",
      "2 sedute di pressoterapia",
    ],
    support: "Consulenza iniziale Metodo Solaria inclusa",
  },
  {
    name: "Solaria Plus",
    eyebrow: "9 appuntamenti personalizzati",
    price: "Percorso su consulenza",
    description:
      "Il programma combinato per prendersi cura con continuità della bellezza del viso e dell'armonia del corpo.",
    treatments: [
      "2 rituali viso con tecnologia avanzata",
      "2 trattamenti V-Shape",
      "1 radiofrequenza corpo",
      "4 sedute di pressoterapia",
    ],
    support: "Consulenza iniziale e controllo intermedio inclusi",
  },
  {
    name: "Solaria Luxury",
    eyebrow: "16 appuntamenti personalizzati",
    price: "Percorso su consulenza",
    description:
      "L'esperienza Solaria più completa, dedicata a chi desidera un programma intensivo per viso e corpo.",
    treatments: [
      "4 rituali viso con tecnologia avanzata",
      "4 trattamenti V-Shape",
      "2 radiofrequenze corpo",
      "6 sedute di pressoterapia",
    ],
    support: "Consulenza approfondita, monitoraggio e controllo finale inclusi",
  },
];

const methodStyles = [
  {
    card: "border-[#d5a954]/40 bg-gradient-to-br from-[#fffaf0] via-[#f9e9c6] to-[#eecb84]",
    eyebrow: "!text-[#805018]",
    price: "text-[#704019]",
    text: "text-[#594638]",
    divider: "border-[#9e6d28]/20 text-[#704019]",
  },
  {
    card: "border-[#aa7446]/45 bg-gradient-to-br from-[#f5dfc6] via-[#dfad78] to-[#b97442]",
    eyebrow: "!text-[#613619]",
    price: "text-[#563016]",
    text: "text-[#482f24]",
    divider: "border-[#633817]/20 text-[#553019]",
  },
  {
    card: "border-[#6d3d28]/60 bg-gradient-to-br from-[#6e3e2a] via-[#40241c] to-[#1f1715] text-cream-100",
    eyebrow: "!text-gold-300",
    price: "text-gold-300",
    text: "text-cream-100/80",
    divider: "border-gold-300/25 text-cream-100",
  },
];

const blackFridayPosters = [
  {
    image: "black-friday-rituali-1",
    alt: "Locandina Black Friday per Candle Massage e Rituale Hummun",
  },
  {
    image: "black-friday-laser",
    alt: "Locandina Black Friday per l'epilazione laser",
  },
  {
    image: "black-friday-corpo",
    alt: "Locandina Black Friday per i trattamenti corpo",
  },
  {
    image: "black-friday-viso",
    alt: "Locandina Black Friday per i trattamenti viso",
  },
  {
    image: "black-friday-laminazione",
    alt: "Locandina Black Friday per laminazione ciglia e sopracciglia",
  },
  {
    image: "black-friday-pressoterapia",
    alt: "Locandina Black Friday per pressoterapia con infrarossi",
  },
];

export default component$(() => {
  const selectedPoster = useSignal<(typeof blackFridayPosters)[number] | null>(null);

  return (
    <>
    <Breadcrumbs items={[{ label: "Promozioni", href: "/promozioni/" }]} />
    <PageHero
      eyebrow="Promozioni e percorsi Solaria"
      title="Il primo passo ha una forma tutta tua."
      description="Dall'esperienza introduttiva ai programmi completi viso e corpo: scegli da dove iniziare, poi costruiamo insieme il percorso."
      ctaLabel="Parla con noi"
      ctaHref={whatsappUrl}
    />

    <section class="bg-[#17120f] py-20 text-cream-100 md:py-28">
      <div class="container-shell">
        <div class="grid items-end gap-7 lg:grid-cols-[1fr_auto]">
          <div>
            <Badge class="border-gold-300/30 bg-gold-300/10 !text-gold-300">
              Promo Flash · Posti limitati
            </Badge>
            <h2 class="mt-5 font-display text-5xl leading-[.95] md:text-7xl">
              Black Friday<br />
              <span class="text-gold-300">Solaria</span>
            </h2>
          </div>
          <p class="max-w-md text-lg leading-8 text-cream-200/80 lg:text-right">
            Una selezione di rituali, trattamenti viso e corpo, epilazione
            laser e laminazione pensata per il Black Friday.
          </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blackFridayPosters.map((poster) => (
            <article
              key={poster.image}
              class="group overflow-hidden rounded-[2rem] border border-gold-300/25 bg-cream-100 p-2 shadow-[0_24px_60px_-32px_rgba(0,0,0,.8)]"
            >
              <button
                type="button"
                onClick$={() => (selectedPoster.value = poster)}
                class="relative block w-full overflow-hidden rounded-[1.5rem] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-300"
                aria-label={`Ingrandisci: ${poster.alt}`}
              >
                <img
                  {...optimizedImage(poster.image)}
                  alt={poster.alt}
                  width="1080"
                  height="1350"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 100vw"
                  class="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span class="absolute inset-x-4 bottom-4 rounded-full bg-black/75 px-4 py-2 text-center text-xs font-bold tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                  Tocca per ingrandire
                </span>
              </button>
            </article>
          ))}
        </div>

        {selectedPoster.value && (
          <div
            class="fixed inset-0 z-[130] grid place-items-center bg-black/85 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selectedPoster.value.alt}
          >
            <div class="relative max-h-[92vh] w-full max-w-2xl">
              <button
                type="button"
                onClick$={() => (selectedPoster.value = null)}
                class="absolute -right-1 -top-1 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-ink text-2xl text-white shadow-lg transition hover:bg-gold-300 hover:text-bronze-900"
                aria-label="Chiudi la locandina"
              >
                ×
              </button>
              <img
                {...optimizedImage(selectedPoster.value.image)}
                alt={selectedPoster.value.alt}
                width="1080"
                height="1350"
                decoding="async"
                class="max-h-[92vh] w-full rounded-[1.75rem] object-contain shadow-[0_28px_80px_rgba(0,0,0,.65)]"
              />
            </div>
          </div>
        )}

        <div class="mt-10 flex flex-col items-start justify-between gap-5 rounded-[1.75rem] border border-gold-300/20 bg-white/5 p-6 sm:flex-row sm:items-center md:px-8">
          <p class="max-w-2xl text-sm leading-6 text-cream-200/80">
            Le promozioni sono disponibili per un periodo limitato. Scrivici
            per verificare disponibilità e scegliere la proposta più adatta a
            te.
          </p>
          <Button href={whatsappUrl} target="_blank" rel="noreferrer" variant="secondary" class="shrink-0">
            Richiedi la promo
          </Button>
        </div>
      </div>
    </section>

    <section class="container-shell py-20 md:py-28">
      <div class="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-12 text-cream-100 shadow-[var(--shadow-soft)] md:px-12 md:py-16">
        <div
          aria-hidden="true"
          class="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-gold-300/25"
        />
        <div class="relative grid items-center gap-10 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <Badge class="border-gold-300/30 bg-gold-300/10 !text-gold-300">
              Nuove clienti
            </Badge>
            <h2 class="mt-5 font-display text-4xl md:text-6xl">
              {welcomeOffer.name}
            </h2>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-cream-200/80">
              Non conosci ancora Solaria Beauty Lab? Inizia con un trattamento
              introduttivo viso, corpo oppure epilazione laser, raccontaci le
              tue esigenze e vivi la tua prima esperienza Solaria.
            </p>
            <p class="mt-6 max-w-2xl font-display text-2xl text-gold-300">
              Il tuo primo momento di bellezza ha un prezzo speciale. La
              sensazione di sentirti finalmente ascoltata non ha prezzo.
            </p>
          </div>
          <div class="rounded-3xl border border-gold-300/25 bg-white/5 p-7 text-center backdrop-blur-sm">
            <p class="eyebrow !text-gold-300">Prezzo di benvenuto</p>
            <p class="mt-3 font-display text-7xl">{welcomeOffer.price}</p>
            <p class="mt-3 text-sm text-cream-200/70">
              Trattamento viso, corpo o epilazione laser
            </p>
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              class="mt-6 w-full"
            >
              Prenota {welcomeOffer.name}
            </Button>
          </div>
        </div>
      </div>
      <p class="mt-4 text-sm leading-6 text-ink-soft">
        Iniziativa soggetta a disponibilità e riservata alla prima esperienza
        presso il centro. Il trattamento viene scelto dopo un breve confronto
        iniziale.
      </p>
    </section>

    <section
      id="metodo-solaria"
      class="scroll-mt-28 bg-cream-100 py-20 md:py-28"
    >
      <div class="container-shell">
        <SectionHeading
          eyebrow="Scopri il Metodo Solaria"
          title="Non un pacchetto standard. Un programma costruito intorno a te."
          description="Tre intensità di percorso, sempre precedute dalla consulenza e adattate alle caratteristiche e alle reali esigenze della persona."
        />
        <div class="mt-12 grid gap-6 lg:grid-cols-3">
          {methodPaths.map((path, index) => {
            const style = methodStyles[index];

            return (
              <Card
                key={path.name}
                class={`flex h-full flex-col p-7 md:p-8 ${style.card}`}
              >
                <p class={`eyebrow ${style.eyebrow}`}>{path.eyebrow}</p>
                <h2 class="mt-4 font-display text-4xl">{path.name}</h2>
                <p class={`mt-3 text-xl font-bold ${style.price}`}>
                  {path.price}
                </p>
                <p class={`mt-5 leading-7 ${style.text}`}>{path.description}</p>
                <ul
                  class="mt-6 grid gap-3"
                  aria-label={`Contenuto ${path.name}`}
                >
                  {path.treatments.map((treatment) => (
                    <li key={treatment} class="flex gap-3 text-sm leading-6">
                      <span aria-hidden="true" class="text-gold-500">
                        ✦
                      </span>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
                <p
                  class={`mt-6 border-t pt-5 text-sm font-semibold leading-6 ${style.divider}`}
                >
                  {path.support}
                </p>
                <Button
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant={index === 2 ? "secondary" : "primary"}
                  class="mt-auto w-full !justify-center text-center"
                >
                  Richiedi informazioni
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>

    <section class="container-shell grid gap-6 py-20 md:grid-cols-[1.1fr_.9fr] md:py-28">
      <Card class="p-7 md:p-9">
        <p class="eyebrow">Prima di scegliere</p>
        <h2 class="mt-4 font-display text-4xl">
          La consulenza fa parte del metodo.
        </h2>
        <p class="mt-4 leading-7 text-ink-soft">
          Ogni programma viene confermato dopo aver ascoltato le tue esigenze e
          valutato la situazione di partenza. Composizione, frequenza e
          indicazioni possono essere adattate per mantenere il percorso davvero
          personale.
        </p>
        <Button href="/filosofia/" variant="secondary" class="mt-6">
          Leggi la nostra filosofia
        </Button>
      </Card>
      <Card class="p-7 md:p-9">
        <p class="eyebrow">Idea regalo</p>
        <h2 class="mt-4 font-display text-4xl">Gift card Solaria</h2>
        <p class="mt-4 leading-7 text-ink-soft">
          Regala un momento di cura con un valore o un trattamento concordato.
          Validità e modalità vengono indicate al momento dell'acquisto.
        </p>
        <Button href="/contatti/" class="mt-6">
          Richiedi una gift card
        </Button>
      </Card>
    </section>

    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Promozioni e percorsi Metodo Solaria",
        url: absoluteUrl("/promozioni/"),
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Offer",
              name: welcomeOffer.name,
              description: welcomeOffer.description,
              price: euroAmount(welcomeOffer.price),
              priceCurrency: "EUR",
              url: absoluteUrl("/promozioni/"),
              offeredBy: { "@id": businessSchema["@id"] },
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Offer",
              name: methodPaths[0].name,
              price: euroAmount(methodPaths[0].price),
              priceCurrency: "EUR",
              url: absoluteUrl("/promozioni/#metodo-solaria"),
              offeredBy: { "@id": businessSchema["@id"] },
            },
          },
        ],
      }}
    />
  </>
  );
});

export const head = createSeo(pages.promotions);
