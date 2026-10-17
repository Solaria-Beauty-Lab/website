import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { SectionHeading } from "~/components/section-heading";
import { StructuredData } from "~/components/structured-data";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { createSeo } from "~/lib/seo";
import { optimizedImage } from "~/lib/images";
import { pages } from "~/lib/pages";
import { founderSchema } from "~/lib/schema";

const skills = [
  "Epilazione laser a diodo 808/810",
  "Crioterapia e radiofrequenza",
  "Lipolaser e pressoterapia",
  "Tecniche di massaggio professionale",
  "Approcci della tradizione mediterranea e cinese",
];

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Chi siamo", href: "/chi-siamo/" }]} />
    <PageHero
      eyebrow="Martina Seguiti · Direttrice tecnica"
      title="Professionalità che si sente, attenzione che si vede."
      description="Solaria Beauty Lab nasce dall'esperienza di Martina e da un'idea precisa: rendere la cura estetica più personale, comprensibile e consapevole."
      ctaLabel="Conosci i trattamenti"
      ctaHref="/trattamenti/"
    />

    <section
      id="martina-seguiti"
      class="container-shell grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[.85fr_1.15fr]"
    >
      <div class="relative mx-auto max-w-md">
        <div class="absolute -inset-5 -z-10 rounded-[2.5rem] border border-gold-400/25" />
        <img
          src="/images/gallery-6.avif"
          alt="Ritratto di Martina Seguiti"
          width="624"
          height="1106"
          class="aspect-[4/5] rounded-[2rem] object-cover object-top"
        />
      </div>
      <div>
        <SectionHeading
          eyebrow="La professionista"
          title="Martina Seguiti"
          description="Estetista professionale, titolare di Solaria Beauty Lab e direttrice tecnica del centro."
        />
        <div class="mt-6 space-y-5 leading-7 text-ink-soft">
          <p>
            Martina ha conseguito il diploma di Estetista Professionale presso
            l'Accademia Regionale Bioolos, completando il percorso con la
            qualifica di Direttrice Tecnica.
          </p>
          <p>
            Stage e corsi di specializzazione hanno ampliato la sua
            preparazione, con particolare attenzione alle tecnologie estetiche
            avanzate e alla Medicina Tradizionale Mediterranea e Cinese.
          </p>
          <p>
            Il suo approccio unisce competenza tecnica, ascolto e attenzione
            alla persona: ogni trattamento viene spiegato e adattato alla
            situazione di partenza.
          </p>
        </div>
        <Button href="/contatti/" variant="secondary" class="mt-7">
          Parla con Martina
        </Button>
      </div>
    </section>

    <section class="container-shell pb-20 md:pb-28">
      <div class="border-t border-gold-400/35 pt-10 md:pt-12">
        <p class="eyebrow">Il team Solaria</p>
        <div class="mt-7 grid gap-8 md:grid-cols-2">
          <article class="flex flex-col items-center gap-6 rounded-[2rem] border border-gold-400/45 bg-white/70 p-7 text-center shadow-[var(--shadow-card)] sm:flex-row sm:text-left md:p-8">
            <img
              {...optimizedImage("staff-giulia-corneli")}
              alt="Giulia Corneli"
              width="1536"
              height="2048"
              loading="lazy"
              decoding="async"
              sizes="256px"
              class="h-56 w-56 shrink-0 rounded-full border-[3px] border-gold-400/65 object-cover object-[center_60%] shadow-[0_10px_30px_-18px_rgba(121,73,20,.45)] md:h-64 md:w-64"
            />
            <div>
              <h2 class="font-display text-3xl">Giulia Corneli</h2>
              <p class="mt-2 leading-6 text-ink-soft">
                Estetica avanzata, estetica di base e operatrice del benessere.
              </p>
            </div>
          </article>
          <article class="flex flex-col items-center gap-6 rounded-[2rem] border border-gold-400/45 bg-white/70 p-7 text-center shadow-[var(--shadow-card)] sm:flex-row sm:text-left md:p-8">
            <img
              {...optimizedImage("staff-francesca-vicalvi")}
              alt="Francesca Vicalvi"
              width="1536"
              height="2048"
              loading="lazy"
              decoding="async"
              sizes="256px"
              class="h-56 w-56 shrink-0 rounded-full border-[3px] border-gold-400/65 object-cover object-[center_60%] shadow-[0_10px_30px_-18px_rgba(121,73,20,.45)] md:h-64 md:w-64"
            />
            <div>
              <h2 class="font-display text-3xl">Francesca Vicalvi</h2>
              <p class="mt-2 leading-6 text-ink-soft">
                Trattamenti viso e corpo, tecnologie estetiche e massaggi.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-ink py-20 text-cream-100">
      <div class="container-shell">
        <SectionHeading
          eyebrow="Competenze"
          title="Tecnologie e manualità, in dialogo."
          description="La scelta del trattamento parte sempre dall'esigenza, non dalla macchina."
          class="[&_h2]:text-cream-100 [&_p]:text-cream-200/70 [&_.eyebrow]:!text-gold-300"
        />
        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <Card
              key={skill}
              class="flex min-h-32 items-end border-white/10 bg-white/5 p-5 text-cream-100 shadow-none"
            >
              <p class="font-display text-2xl">{skill}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section class="container-shell py-20 md:py-28">
      <div class="grid gap-8 md:grid-cols-3">
        {[
          [
            "Ascolto",
            "Ogni percorso comincia dalle tue domande e dalla situazione reale.",
          ],
          [
            "Chiarezza",
            "Tecnologie, prezzi, indicazioni e limiti spiegati senza promesse assolute.",
          ],
          [
            "Continuità",
            "Un rapporto costruito nel tempo, osservando la risposta e adattando il percorso.",
          ],
        ].map(([title, text], index) => (
          <div key={title} class="border-t border-bronze-800/20 pt-5">
            <span class="eyebrow">0{index + 1}</span>
            <h2 class="mt-3 font-display text-3xl">{title}</h2>
            <p class="mt-3 leading-7 text-ink-soft">{text}</p>
          </div>
        ))}
      </div>
    </section>

    <StructuredData
      data={{
        "@context": "https://schema.org",
        ...founderSchema,
        knowsAbout: skills,
      }}
    />
  </>
));

export const head = createSeo(pages.about);
