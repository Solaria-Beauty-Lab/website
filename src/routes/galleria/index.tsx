import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { Button } from "~/components/ui/button";
import { createSeo } from "~/lib/seo";

const photos = [
  {
    src: "/images/gallery-esterno.jpeg",
    alt: "Ingresso di Solaria Beauty Lab a Villanova di Guidonia",
    class: "md:row-span-2 md:col-span-2",
    label: "Benvenuta in Solaria",
  },
  {
    src: "/images/gallery-reception-nuova.jpeg",
    alt: "Reception di Solaria Beauty Lab con insegna luminosa",
    class: "md:row-span-2",
    label: "Il centro",
  },
  {
    src: "/images/gallery-martina-time.jpeg",
    alt: "Martina Seguiti con i prodotti professionali TIME Skin Care",
    class: "",
    label: "Il metodo Solaria",
  },
  {
    src: "/images/gallery-team-time.jpeg",
    alt: "Team Solaria con i trattamenti professionali TIME Skin Care",
    class: "md:col-span-2",
    position: "object-[center_18%]",
    label: "La squadra",
  },
  {
    src: "/images/gallery-laser-alma.jpeg",
    alt: "Tecnologia professionale Alma per l'epilazione laser",
    class: "",
    position: "object-[center_24%]",
    label: "Epilazione laser Alma",
  },
  {
    src: "/images/gallery-tecnologia-corpo.jpeg",
    alt: "Tecnologia professionale per i trattamenti corpo",
    class: "",
    label: "Tecnologie avanzate",
  },
  {
    src: "/images/gallery-trattamento-luce-blu.jpeg",
    alt: "Cabina dedicata ai trattamenti con luce blu",
    class: "md:col-span-2",
    position: "object-[center_84%]",
    label: "Rituali di benessere",
  },
  {
    src: "/images/gallery-time-linea.jpeg",
    alt: "Linea professionale TIME Skin Care per il corpo",
    class: "",
    label: "Skincare professionale",
  },
  {
    src: "/images/gallery-cabina-tecnologie.jpeg",
    alt: "Cabina Solaria dedicata alle tecnologie estetiche avanzate",
    class: "md:col-span-2",
    label: "Cabine specializzate",
  },
  {
    src: "/images/gallery-cabina-benessere.jpeg",
    alt: "Cabina Solaria dedicata ai percorsi viso e corpo",
    class: "md:row-span-2",
    label: "Percorsi viso & corpo",
  },
  {
    src: "/images/gallery-sala-attesa.jpeg",
    alt: "Sala d'attesa di Solaria Beauty Lab",
    class: "md:col-span-2",
    label: "Il tuo tempo",
  },
  {
    src: "/images/gallery-sala-attesa-dettaglio.jpeg",
    alt: "Dettaglio della sala d'attesa di Solaria Beauty Lab",
    class: "",
    label: "Accoglienza",
  },
  {
    src: "/images/gallery-cabina-trattamento.jpeg",
    alt: "Cabina Solaria dedicata ai percorsi laser",
    class: "",
    label: "Cabina laser",
  },
  {
    src: "/images/gallery-lashes-uno.png",
    alt: "Dettaglio di extension ciglia realizzate presso Solaria Beauty Lab",
    class: "md:row-span-2",
    label: "Solaria lashes",
  },
  {
    src: "/images/gallery-lashes-due.png",
    alt: "Risultato di un trattamento ciglia",
    class: "",
    label: "Estetica avanzata",
  },
];

const orderedPhotos = [
  photos[0],
  photos[7],
  photos[1],
  photos[4],
  photos[3],
  photos[14],
  photos[5],
  photos[8],
  photos[2],
  photos[6],
  photos[10],
  photos[9],
  photos[11],
  photos[12],
  photos[13],
];

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Galleria", href: "/galleria/" }]} />
    <PageHero
      eyebrow="Dentro Solaria"
      title="Persone, dettagli, risultati autentici."
      description="Una selezione di immagini reali del centro, della professionista e dei trattamenti dedicati alla cura della persona."
      ctaLabel="Scopri il centro"
      ctaHref="/chi-siamo/"
    />
    <section class="container-shell py-20 md:py-28">
      <div class="mb-10 grid gap-4 rounded-[2rem] bg-gradient-to-r from-[#3e261d] via-[#75452d] to-[#b57b49] p-7 text-cream-100 md:grid-cols-2 md:p-10">
        <div>
          <p class="eyebrow !text-gold-300">Momenti Solaria</p>
          <h2 class="mt-3 font-display text-4xl leading-tight md:text-[2.7rem]">
            La bellezza è nei dettagli,
            <br />
            anche quelli che non si vedono.
          </h2>
        </div>
        <p class="self-end text-lg leading-8 text-cream-100/80">
          Spazi, prodotti, competenza e risultati: una galleria pensata per
          raccontare il centro con immagini autentiche.
        </p>
      </div>
      <div class="grid auto-rows-[17rem] gap-4 sm:grid-cols-2 md:grid-cols-3">
        {orderedPhotos.map((photo, index) => (
          <figure
            key={photo.src}
          class={`group relative overflow-hidden rounded-3xl bg-cream-100 ${photo.class}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              width="624"
              height="1106"
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
              class={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] ${photo.position ?? ""}`}
            />
            <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent px-5 pb-5 pt-16 text-white">
              <span class="block text-xs font-bold uppercase tracking-[.16em] text-gold-300">
                {photo.label}
              </span>
              <span class="mt-1 block text-sm text-white/85">{photo.alt}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div class="mt-12 rounded-3xl bg-cream-100 p-7 text-center">
        <h2 class="font-display text-3xl">
          Seguici per vedere le novità del centro.
        </h2>
        <p class="mx-auto mt-3 max-w-xl leading-7 text-ink-soft">
          Trattamenti, giornate dedicate e aggiornamenti vengono condivisi anche
          sui canali social ufficiali.
        </p>
        <Button
          href="https://www.instagram.com/solariabeautylab/"
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          class="mt-5"
        >
          Apri Instagram
        </Button>
      </div>
    </section>
  </>
));

export const head = createSeo({
  title: "Galleria | Solaria Beauty Lab Guidonia",
  description:
    "Scopri immagini reali di Solaria Beauty Lab, di Martina Seguiti e dei trattamenti estetici a Guidonia Montecelio.",
  path: "/galleria/",
});
