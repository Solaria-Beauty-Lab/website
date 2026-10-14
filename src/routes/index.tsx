import { component$ } from "@builder.io/qwik";
import { Faq } from "~/components/faq";
import { GoogleReviews } from "~/components/google-reviews";
import { SectionHeading } from "~/components/section-heading";
import { StructuredData } from "~/components/structured-data";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { serviceCatalog as services } from "~/content/services";
import { createSeo } from "~/lib/seo";
import { optimizedImage } from "~/lib/images";
import { businessSchema, founderSchema, websiteSchema } from "~/lib/schema";
import { whatsappUrl } from "~/lib/site";

const serviceNumber = (index: number) => String(index + 1).padStart(2, "0");

const homeFaq = [
  {
    question: "Dove si trova Solaria Beauty Lab?",
    answer:
      "Il centro si trova in Via G. Garibaldi 125 A, a Villanova di Guidonia, ed è facilmente raggiungibile anche da Guidonia Montecelio e Tivoli.",
  },
  {
    question: "Come scelgo il trattamento più adatto?",
    answer:
      "Il primo passo è una consulenza: ascoltiamo la tua esigenza, valutiamo la situazione di partenza e ti spieghiamo opzioni, percorso e indicazioni in modo chiaro.",
  },
  {
    question: "È possibile conoscere i prezzi prima di prenotare?",
    answer:
      "Sì. Il sito mostra il listino disponibile per le principali aree e trattamenti. Per percorsi combinati o zone da valutare, il preventivo viene confermato durante la consulenza.",
  },
];

export default component$(() => (
  <>
    <section class="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_88%_26%,rgba(222,187,125,.34),transparent_31%),radial-gradient(ellipse_at_76%_84%,rgba(201,151,83,.14),transparent_28%),linear-gradient(108deg,#fffdf8_0%,#fffaf0_45%,#f5e6cb_74%,#e8c98e_100%)] pb-16 pt-10 md:pb-24 md:pt-16">
      <div
        aria-hidden="true"
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_14%,rgba(255,255,255,.98),transparent_30%),radial-gradient(circle_at_55%_32%,rgba(255,253,248,.92),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_12%,rgba(255,244,216,.72),transparent_29%),radial-gradient(circle_at_66%_50%,rgba(255,255,255,.42),transparent_31%)]"
      />
      <div
        aria-hidden="true"
        class="absolute -right-48 -top-24 -z-10 h-[42rem] w-[42rem] rounded-full border border-[#d7ad65]/35"
      />
      <div
        aria-hidden="true"
        class="absolute -right-28 top-32 -z-10 h-[30rem] w-[38rem] rounded-[50%] border border-[#d5a865]/25"
      />
      <div
        aria-hidden="true"
        class="absolute right-[17%] top-24 -z-10 h-[27rem] w-[27rem] rounded-full bg-[#e4bd78]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        class="absolute left-[47%] top-20 -z-10 h-24 w-24 rounded-full border border-[#d2a56c]/20"
      />
      <div
        aria-hidden="true"
        class="absolute bottom-16 left-[42%] -z-10 h-3 w-3 rounded-full border border-[#c99471]/60 bg-[#f7e4c7]/80 shadow-[0_0_22px_7px_rgba(213,168,101,.16)]"
      />
      <div
        aria-hidden="true"
        class="absolute bottom-28 right-[38%] -z-10 h-5 w-5 rounded-full border border-[#d5a865]/35"
      />

      <div class="container-shell grid items-center gap-12 lg:grid-cols-[1.05fr_.8fr]">
        <div>
          <Badge>Villanova di Guidonia · Tivoli</Badge>
          <h1 class="balance mt-6 max-w-4xl font-display text-5xl leading-[.94] tracking-[-0.045em] sm:text-6xl lg:text-[5.6rem]">
            Tecnologia e cura, per la tua{" "}
            <span class="gold-text italic">naturale bellezza.</span>
          </h1>
          <p class="pretty mt-7 max-w-2xl text-lg leading-8 text-ink-soft md:text-xl">
            Centro estetico specializzato in Epilazione laser Alma, Percorsi
            viso & corpo ed Estetica avanzata.
          </p>
          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              size="lg"
            >
              Prenota una consulenza <span aria-hidden="true">↗</span>
            </Button>
            <Button href="/trattamenti/" variant="secondary" size="lg">
              Esplora i trattamenti
            </Button>
          </div>
          <ul
            class="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-soft"
            aria-label="Punti di forza"
          >
            <li class="flex items-center gap-2">
              <span aria-hidden="true" class="text-gold-500">
                ✦
              </span>{" "}
              Consulenza personalizzata
            </li>
            <li class="flex items-center gap-2">
              <span aria-hidden="true" class="text-gold-500">
                ✦
              </span>{" "}
              Tecnologie avanzate
            </li>
            <li class="flex items-center gap-2">
              <span aria-hidden="true" class="text-gold-500">
                ✦
              </span>{" "}
              Staff tecnico qualificato
            </li>
          </ul>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:ml-auto">
          <div class="absolute -left-12 -top-12 h-52 w-52 rounded-full bg-[#efcf98]/45 blur-3xl" />
          <div class="absolute -right-12 bottom-2 h-44 w-44 rounded-full bg-[#cfa669]/25 blur-3xl" />
          <div class="relative overflow-hidden rounded-[2.25rem] border border-[#dfbe80]/45 bg-cream-100/80 p-3 shadow-[0_30px_80px_-36px_rgba(122,75,23,.5)]">
            <img
              src="/images/gallery-6.avif"
              alt="Martina Seguiti, titolare di Solaria Beauty Lab"
              width="624"
              height="1106"
              fetchPriority="high"
              class="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top"
            />
          </div>
          <div class="absolute -bottom-5 -left-5 max-w-[15rem] rounded-2xl border border-gold-400/20 bg-white p-4 shadow-[var(--shadow-card)]">
            <p class="eyebrow">Solaria Beauty Lab</p>
            <p class="mt-1 font-display text-xl italic">
              Estetica avanzata & Epilazione laser
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden border-y border-gold-400/35 bg-gradient-to-r from-[#643719] via-[#a55d20] to-[#e0b451] py-5 text-white shadow-[0_10px_30px_-22px_rgba(92,49,13,.75)]">
      <div
        aria-hidden="true"
        class="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,.16)_50%,transparent_78%)]"
      />
      <div class="container-shell relative grid gap-3 text-center text-sm font-bold tracking-wide sm:grid-cols-3">
        <p class="flex items-center justify-center gap-2">
          <span aria-hidden="true" class="text-gold-300">
            ✦
          </span>{" "}
          Laser Alma 808/810
        </p>
        <p class="flex items-center justify-center gap-2 sm:border-x sm:border-white/20">
          <span aria-hidden="true" class="text-gold-300">
            ✦
          </span>{" "}
          Percorsi viso & corpo
        </p>
        <p class="flex items-center justify-center gap-2">
          <span aria-hidden="true" class="text-gold-300">
            ✦
          </span>{" "}
          Estetica avanzata
        </p>
      </div>
    </section>

    <section class="relative overflow-hidden bg-[#e7d4b9] py-20 text-ink md:py-28">
      <div class="pointer-events-none absolute inset-x-0 top-14 select-none overflow-hidden text-center font-display text-[20vw] leading-none text-[#896b4f]/15">
        SOLARIA
      </div>
      <div class="container-shell relative">
        <div class="grid gap-7 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p class="eyebrow !text-bronze-900">I nostri percorsi</p>
            <h2 class="balance mt-4 max-w-2xl font-display text-5xl leading-[.94] md:text-7xl">
              Un metodo che si vede.
            </h2>
          </div>
          <p class="max-w-xl text-lg leading-8 text-ink md:justify-self-end">
            Non scegli una semplice prestazione: costruiamo insieme un percorso,
            con attenzione, tecnologia e risultati che parlano di te.
          </p>
        </div>

        <div class="mt-14 grid gap-4 md:grid-cols-[1.05fr_.95fr] md:items-stretch">
          <a
            href={services[0].href}
            class="group relative isolate block min-h-[32rem] overflow-hidden rounded-[1.75rem] bg-black text-cream-100 md:min-h-[42rem]"
          >
            <img
              {...optimizedImage(services[0].homeImage)}
              alt=""
              width="1600"
              height="1000"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 768px) 55vw, 100vw"
              class="absolute inset-0 h-full w-full scale-[1.02] object-[20%_center] object-cover opacity-50 transition-transform duration-700 group-hover:scale-[1.06]"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/78 via-black/35 to-black/10" />
            <div class="absolute inset-x-0 bottom-0 p-6 pr-24 md:p-9 md:pr-28">
              <p class="eyebrow !text-gold-300 text-lg md:text-xl">
                {serviceNumber(0)}
              </p>
              <h3 class="mt-3 font-display text-5xl leading-[.92] md:text-6xl">
                {services[0].title}
              </h3>
              <p class="mt-5 max-w-md text-base leading-7 text-cream-100/85 md:text-lg">
                {services[0].homeDescription}
              </p>
            </div>
            <span
              class="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-gold-300 text-2xl text-bronze-900 transition-transform duration-300 group-hover:translate-x-1 md:bottom-9 md:right-9"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-2">
            {services.slice(1).map((service, index) => (
              <a
                key={service.href}
                href={service.href}
                class="group relative isolate min-h-64 overflow-hidden rounded-[1.5rem] bg-black text-cream-100 md:min-h-0"
              >
                <img
                  {...optimizedImage(service.homeImage)}
                  alt=""
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 768px) 25vw, (min-width: 640px) 50vw, 100vw"
                  class="absolute inset-0 h-full w-full scale-[1.02] object-cover opacity-50 transition-transform duration-700 group-hover:scale-[1.07]"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/78 via-black/35 to-black/10" />
                <div class="absolute inset-x-0 bottom-0 p-5 pr-16">
                  <p class="eyebrow !text-gold-300 text-base md:text-lg">
                    {serviceNumber(index + 1)}
                  </p>
                  <h3 class="mt-2 font-display text-3xl leading-none">
                    {service.title}
                  </h3>
                  <p class="mt-3 text-sm leading-6 text-cream-100/80">
                    {service.homeDescription}
                  </p>
                </div>
                <span
                  class="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-gold-300 text-xl text-bronze-900 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        <div class="mt-4 flex flex-col justify-between gap-5 rounded-[1.5rem] bg-cream-100 p-6 text-ink md:flex-row md:items-center md:px-9">
          <div>
            <p class="eyebrow !text-bronze-900">La tua consulenza</p>
            <p class="mt-2 font-display text-3xl leading-[1.02] md:text-4xl">
              Il primo passo è capire ciò che ti serve davvero.
            </p>
          </div>
          <Button
            href="/contatti/"
            class="w-fit rounded-xl border-[#7b421f] bg-[#7b421f] px-7 text-cream-100 shadow-none hover:bg-[#5e2f14]"
          >
            Prenota un incontro
          </Button>
        </div>
      </div>
    </section>

    <section class="border-y border-bronze-800/10 bg-cream-100 py-20 md:py-28">
      <div class="container-shell grid items-start gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <p class="eyebrow">La nostra filosofia</p>
          <blockquote class="balance mt-5 max-w-3xl font-display text-4xl leading-[1.08] text-ink md:text-6xl">
            “Credo che la conoscenza dia valore alle parole.”
          </blockquote>
          <p class="mt-5 text-sm font-semibold text-bronze-900">
            — Martina Seguiti
          </p>
          <p class="pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
            Crediamo che la scelta migliore nasca dalla conoscenza: ascoltiamo,
            analizziamo e spieghiamo con chiarezza il percorso più adatto a te.
          </p>
          <Button
            href="/filosofia/"
            class="mt-7 shadow-[0_12px_26px_-14px_rgba(92,49,13,.75)]"
          >
            Scopri la filosofia Solaria
          </Button>
        </div>
        <div class="grid gap-4">
          {[
            ["Pelo", "Ecografia estetica per orientare il percorso laser."],
            ["Corpo", "Lastre termografiche per una lettura più precisa."],
            [
              "Viso",
              "Ecografia estetica per approfondire gli inestetismi cutanei.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              class="grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-gold-400/20 bg-white p-5 shadow-[var(--shadow-card)]"
            >
              <span class="grid h-11 w-11 place-items-center rounded-full bg-bronze-900 text-xs font-bold text-white">
                0{index + 1}
              </span>
              <div>
                <h3 class="font-display text-2xl">
                  Analisi {title.toLowerCase()}
                </h3>
                <p class="mt-1 text-sm leading-6 text-ink-soft">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section class="overflow-hidden bg-ink py-20 text-cream-100 md:py-28">
      <div class="container-shell grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div class="relative mx-auto grid w-full max-w-md grid-cols-2 gap-3">
          <img
            src="/images/gallery-1.avif"
            alt="Prodotti professionali utilizzati nel centro"
            width="560"
            height="996"
            loading="lazy"
            class="aspect-[3/4] rounded-3xl object-cover"
          />
          <img
            src="/images/gallery-3.avif"
            alt="Risultato di un trattamento ciglia"
            width="748"
            height="996"
            loading="lazy"
            class="mt-12 aspect-[3/4] rounded-3xl object-cover"
          />
        </div>
        <div>
          <p class="eyebrow !text-gold-300">Il percorso Solaria</p>
          <h2 class="balance mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
            Un metodo chiaro, pensato intorno a te.
          </h2>
          <div class="mt-10 grid gap-7 sm:grid-cols-2">
            {[
              [
                "01",
                "Ascolto",
                "Ci racconti obiettivi, abitudini e ciò che desideri migliorare.",
              ],
              [
                "02",
                "Analisi",
                "Osserviamo le caratteristiche della pelle o del corpo e valutiamo le opzioni più adatte.",
              ],
              [
                "03",
                "Proposta",
                "Definiamo trattamenti, frequenza e indicazioni pensate per te.",
              ],
              [
                "04",
                "Monitoraggio",
                "Seguiamo i progressi nel tempo, aggiornando il percorso quando necessario.",
              ],
            ].map(([number, title, text]) => (
              <div key={number} class="border-t border-white/15 pt-4">
                <p class="text-xs font-bold tracking-widest text-gold-300">
                  {number}
                </p>
                <h3 class="mt-2 font-display text-2xl">{title}</h3>
                <p class="mt-2 text-sm leading-6 text-cream-200/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section class="container-shell grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1fr_.9fr]">
      <div>
        <SectionHeading
          eyebrow="Martina Seguiti"
          title="Competenza professionale, attenzione autentica."
          description="Martina guida Solaria Beauty Lab con una visione precisa: unire preparazione professionale, tecnologie selezionate e ascolto autentico."
        />
        <p class="mt-5 max-w-2xl leading-7 text-ink-soft">
          Ogni proposta viene costruita sulla persona, con obiettivi realistici,
          indicazioni chiare e attenzione al benessere in ogni fase del
          percorso.
        </p>
        <Button href="/chi-siamo/" variant="secondary" class="mt-7">
          Conosci Martina e il centro
        </Button>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <img
          src="/images/gallery-4.avif"
          alt="Martina Seguiti durante una presentazione dei prodotti"
          width="622"
          height="1106"
          loading="lazy"
          class="aspect-[3/4] rounded-3xl object-cover"
        />
        <img
          src="/images/gallery-5.avif"
          alt="Dettaglio dei prodotti professionali per la pelle"
          width="622"
          height="1106"
          loading="lazy"
          class="mt-10 aspect-[3/4] rounded-3xl object-cover"
        />
      </div>
    </section>

    <GoogleReviews />

    <section class="bg-cream-100 py-20 md:py-24">
      <div class="container-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Domande frequenti"
          title="Informazioni chiare, prima di iniziare."
        />
        <Faq items={homeFaq} />
      </div>
    </section>

    <section class="container-shell py-20 md:py-28">
      <div class="relative overflow-hidden rounded-[2.5rem] bg-bronze-900 px-6 py-14 text-center text-white shadow-[var(--shadow-soft)] md:px-12 md:py-20">
        <div
          aria-hidden="true"
          class="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold-300/30"
        />
        <p class="eyebrow !text-gold-300">Il primo passo</p>
        <h2 class="balance mx-auto mt-4 max-w-3xl font-display text-4xl md:text-6xl">
          Raccontaci cosa stai cercando.
        </h2>
        <p class="pretty mx-auto mt-5 max-w-2xl leading-7 text-cream-100/80">
          Ti aiutiamo a capire quale percorso può essere più adatto alle tue
          esigenze, senza impegno e con tutte le informazioni necessarie.
        </p>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          size="lg"
          class="mt-8"
        >
          Parla con noi su WhatsApp
        </Button>
      </div>
    </section>

    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@graph": [businessSchema, founderSchema, websiteSchema],
      }}
    />
  </>
));

export const head = createSeo({
  title: "Centro estetico a Villanova di Guidonia | Solaria Beauty Lab",
  description:
    "Epilazione laser Alma, trattamenti viso, corpo ed estetica avanzata a Villanova di Guidonia. Scopri Solaria Beauty Lab e prenota una consulenza.",
  path: "/",
});
