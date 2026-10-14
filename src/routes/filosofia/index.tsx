import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { SectionHeading } from "~/components/section-heading";
import { StructuredData } from "~/components/structured-data";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { createSeo } from "~/lib/seo";
import { optimizedImage } from "~/lib/images";
import { businessSchema } from "~/lib/schema";
import { absoluteUrl, whatsappUrl } from "~/lib/site";

const methodSteps = [
  {
    number: "01",
    title: "Ascolto",
    description:
      "Partiamo dalla persona: esigenze, abitudini, aspettative e situazione di partenza.",
  },
  {
    number: "02",
    title: "Analisi",
    description:
      "Osserviamo con attenzione e, quando utile, integriamo la consulenza con strumenti dedicati.",
  },
  {
    number: "03",
    title: "Protocollo",
    description:
      "Definiamo trattamenti, frequenza e obiettivi realistici in un programma realmente personale.",
  },
  {
    number: "04",
    title: "Monitoraggio",
    description:
      "Seguiamo l'evoluzione del percorso e lo adattiamo in base alla risposta individuale.",
  },
];

const analysisTools = [
  {
    number: "01",
    area: "Epilazione laser",
    title: "Ecografia del pelo",
    description:
      "Supporta una valutazione più precisa delle caratteristiche del pelo e orienta la costruzione del percorso laser.",
  },
  {
    number: "02",
    area: "Percorsi corpo",
    title: "Lastre termografiche",
    description:
      "Aiutano a leggere le caratteristiche del corpo e a individuare un approccio coerente con le esigenze osservate.",
  },
  {
    number: "03",
    area: "Percorsi viso",
    title: "Ecografia del viso",
    description:
      "Approfondisce la conoscenza degli inestetismi cutanei per costruire protocolli viso più mirati.",
  },
];

const principles = [
  {
    title: "Conoscenza",
    text: "Dà valore alle parole e rende ogni scelta più consapevole.",
  },
  {
    title: "Tecnologia",
    text: "Aggiunge precisione all'osservazione e alla personalizzazione.",
  },
  {
    title: "Ascolto",
    text: "Trasforma il trattamento in un percorso costruito intorno a te.",
  },
];

export default component$(() => (
  <>
    <Breadcrumbs
      items={[{ label: "La nostra filosofia", href: "/filosofia/" }]}
    />

    <section class="overflow-hidden bg-cream-100">
      <div class="container-shell grid min-h-[46rem] items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.08fr_.92fr] lg:py-28">
        <div class="relative z-10">
          <p class="eyebrow">La filosofia di Solaria Beauty Lab</p>
          <h1 class="balance mt-6 max-w-3xl font-display text-5xl leading-[1.02] text-ink md:text-7xl lg:text-[5.15rem]">
            La bellezza nasce
            <span class="mt-3 block gold-text">dall&apos;ascolto.</span>
          </h1>
          <p class="pretty mt-7 max-w-2xl text-lg leading-8 text-ink-soft md:text-xl">
            Preparazione professionale, ascolto e tecnologie avanzate si
            incontrano in un metodo pensato per comprendere davvero la persona,
            prima di proporre un trattamento.
          </p>
          <div class="mt-9 flex flex-wrap gap-3">
            <Button href="#il-metodo" size="lg">
              Scopri il nostro metodo
            </Button>
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              size="lg"
            >
              Prenota una consulenza
            </Button>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[32rem] pb-10 lg:pb-0">
          <div
            aria-hidden="true"
            class="absolute -right-14 -top-12 h-72 w-72 rounded-full border border-gold-400/25"
          />
          <figure class="relative ml-auto w-[82%] overflow-hidden rounded-[2.25rem] bg-white shadow-[var(--shadow-soft)]">
            <img
              {...optimizedImage("filosofia-martina-ritratto")}
              alt="Martina Seguiti, titolare e direttrice tecnica di Solaria Beauty Lab"
              width="1200"
              height="2133"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(min-width: 1024px) 40vw, 80vw"
              class="aspect-[4/5] w-full object-cover object-center"
            />
            <figcaption class="absolute bottom-5 right-5 rounded-2xl bg-ink/90 px-4 py-3 text-cream-100 shadow-lg backdrop-blur-sm">
              <span class="block text-xs font-bold uppercase tracking-[.16em] text-gold-300">
                Martina Seguiti
              </span>
              <span class="mt-1 block text-sm text-cream-100/90">
                Titolare e direttrice tecnica
              </span>
            </figcaption>
          </figure>
          <figure class="absolute bottom-0 left-0 w-[42%] overflow-hidden rounded-[1.5rem] border-8 border-cream-100 bg-white shadow-[var(--shadow-card)]">
            <img
              {...optimizedImage("filosofia-time-dren")}
              alt="Prodotti professionali TIME Skin Care"
              width="1200"
              height="675"
              loading="eager"
              decoding="async"
              sizes="(min-width: 1024px) 20vw, 40vw"
              class="aspect-square w-full object-cover object-[17%_45%]"
            />
          </figure>
        </div>
      </div>
    </section>

    <section class="container-shell grid gap-12 py-20 md:py-28 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <p class="eyebrow">Il principio da cui partiamo</p>
        <blockquote class="balance mt-5 font-display text-4xl leading-[1.08] text-ink md:text-5xl">
          “Credo che la conoscenza dia valore alle parole.”
        </blockquote>
        <p class="mt-5 text-sm font-semibold text-bronze-900">
          — Martina Seguiti
        </p>
      </div>
      <div class="space-y-5 text-lg leading-8 text-ink-soft">
        <p>
          Perché se conosci, sai. E se sai, puoi spiegare, consigliare e
          scegliere con consapevolezza. È da questo principio che nasce Solaria
          Beauty Lab.
        </p>
        <p>
          Ogni persona è unica. Per questo non proponiamo trattamenti
          standardizzati e non ci fermiamo a ciò che appare in superficie. Prima
          di iniziare dedichiamo tempo a comprendere le caratteristiche
          individuali, le necessità e l'origine degli inestetismi.
        </p>
        <p>
          Non vogliamo semplicemente indicarti quale trattamento fare: vogliamo
          aiutarti a comprendere la tua pelle, il tuo corpo e le loro reali
          esigenze.
        </p>
      </div>
    </section>

    <section
      id="il-metodo"
      class="scroll-mt-28 border-y border-bronze-800/10 bg-white py-20 md:py-28"
    >
      <div class="container-shell">
        <div class="grid items-end gap-8 lg:grid-cols-[1fr_.75fr]">
          <SectionHeading
            eyebrow="Il Metodo Solaria"
            title="Dalla prima domanda a un percorso misurato su di te."
          />
          <p class="max-w-xl text-lg leading-8 text-ink-soft lg:justify-self-end">
            Un processo chiaro, spiegato passo dopo passo, per trasformare le
            informazioni raccolte in decisioni coerenti e verificabili nel
            tempo.
          </p>
        </div>
        <ol class="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-bronze-800/10 bg-bronze-800/10 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map((step) => (
            <li key={step.number} class="bg-cream-50 p-7 md:p-8">
              <span class="font-display text-4xl text-gold-500">
                {step.number}
              </span>
              <h2 class="mt-8 font-display text-3xl">{step.title}</h2>
              <p class="mt-3 leading-7 text-ink-soft">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section class="overflow-hidden bg-ink py-20 text-cream-100 md:py-28">
      <div class="container-shell grid items-start gap-14 lg:grid-cols-[.78fr_1.22fr]">
        <div class="lg:sticky lg:top-32">
          <p class="eyebrow !text-gold-300">Analisi estetica strumentale</p>
          <h2 class="balance mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
            Più informazioni, più precisione.
          </h2>
          <p class="mt-6 max-w-lg text-lg leading-8 text-cream-200/75">
            Quando utile, la consulenza viene supportata da strumenti dedicati
            alle diverse aree. I dati raccolti aiutano a definire protocolli
            mirati e a seguirne l'evoluzione.
          </p>
          <figure class="mt-9 overflow-hidden rounded-[2rem] border border-white/10">
            <img
              {...optimizedImage("filosofia-time-bottles")}
              alt="Fiale professionali TIME Skin Care"
              width="1200"
              height="675"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 40vw, 100vw"
              class="aspect-[16/10] w-full object-cover object-[center_85%]"
            />
          </figure>
        </div>

        <div class="grid gap-5">
          {analysisTools.map((tool) => (
            <Card
              key={tool.number}
              class="grid gap-5 border-white/10 bg-white/[.06] p-7 text-cream-100 shadow-none sm:grid-cols-[4rem_1fr] md:p-8"
            >
              <span class="grid h-14 w-14 place-items-center rounded-full border border-gold-300/35 font-display text-xl text-gold-300">
                {tool.number}
              </span>
              <div>
                <p class="text-xs font-bold uppercase tracking-[.16em] text-gold-300">
                  {tool.area}
                </p>
                <h3 class="mt-3 font-display text-3xl md:text-4xl">
                  {tool.title}
                </h3>
                <p class="mt-4 leading-7 text-cream-200/75">
                  {tool.description}
                </p>
              </div>
            </Card>
          ))}
          <p class="mt-1 text-sm leading-6 text-cream-200/60">
            Le analisi hanno finalità estetica e orientativa e non sostituiscono
            valutazioni o diagnosi mediche.
          </p>
        </div>
      </div>
    </section>

    <section class="container-shell py-20 md:py-28">
      <div class="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Il valore del percorso"
          title="Tre principi, un solo modo di prenderci cura di te."
        />
        <div class="grid gap-4 sm:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              class="rounded-3xl border border-bronze-800/10 bg-cream-100 p-6"
            >
              <h2 class="font-display text-3xl">{principle.title}</h2>
              <p class="mt-3 leading-7 text-ink-soft">{principle.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div class="mt-14 overflow-hidden rounded-[2.5rem] bg-bronze-900 px-6 py-12 text-center text-white md:px-12 md:py-16">
        <p class="eyebrow !text-gold-300">Il primo passo</p>
        <h2 class="balance mx-auto mt-4 max-w-3xl font-display text-4xl md:text-6xl">
          Raccontaci cosa vuoi migliorare.
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cream-200/80">
          Ti ascoltiamo, osserviamo la situazione di partenza e ti spieghiamo
          con chiarezza quale percorso può essere più adatto alle tue esigenze.
        </p>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          size="lg"
          class="mt-8"
        >
          Prenota la consulenza
        </Button>
      </div>
    </section>

    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": absoluteUrl("/filosofia/#page"),
        name: "La filosofia di Solaria Beauty Lab",
        url: absoluteUrl("/filosofia/"),
        description:
          "Conoscenza, tecnologia e ascolto alla base dei percorsi estetici personalizzati di Solaria Beauty Lab.",
        primaryImageOfPage: absoluteUrl(
          "/images/optimized/filosofia-martina-ritratto-1200.webp",
        ),
        mainEntity: { "@id": businessSchema["@id"] },
        inLanguage: "it-IT",
      }}
    />
  </>
));

export const head = createSeo({
  title: "La nostra filosofia e il Metodo Solaria | Solaria Beauty Lab",
  description:
    "Scopri il Metodo Solaria: ascolto, analisi estetica strumentale e percorsi personalizzati a Guidonia Montecelio.",
  path: "/filosofia/",
});
