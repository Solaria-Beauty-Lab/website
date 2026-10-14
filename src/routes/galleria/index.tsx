import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { Button } from "~/components/ui/button";
import { optimizedImage } from "~/lib/images";
import { createSeo } from "~/lib/seo";
import { siteConfig } from "~/lib/site";

const photos = [
  {
    image: "gallery-esterno",
    alt: "Ingresso di Solaria Beauty Lab a Villanova di Guidonia",
    class: "md:row-span-2 md:col-span-2",
    label: "Benvenuta in Solaria",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-time-linea",
    alt: "Linea professionale TIME Skin Care per il corpo",
    class: "",
    label: "Skincare professionale",
    width: 1200,
    height: 675,
  },
  {
    image: "gallery-reception-nuova",
    alt: "Reception di Solaria Beauty Lab con insegna luminosa",
    class: "md:row-span-2",
    label: "Il centro",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-laser-alma",
    alt: "Tecnologia professionale Alma per l'epilazione laser",
    class: "",
    position: "object-[center_24%]",
    label: "Epilazione laser Alma",
    width: 1200,
    height: 675,
  },
  {
    image: "gallery-team-time",
    alt: "Team Solaria con i trattamenti professionali TIME Skin Care",
    class: "md:col-span-2",
    position: "object-[center_18%]",
    label: "La squadra",
    width: 1200,
    height: 675,
  },
  {
    image: "gallery-lashes-due",
    alt: "Risultato di un trattamento ciglia",
    class: "",
    label: "Estetica avanzata",
    width: 640,
    height: 853,
  },
  {
    image: "gallery-tecnologia-corpo",
    alt: "Tecnologia professionale per i trattamenti corpo",
    class: "",
    label: "Tecnologie avanzate",
    width: 1200,
    height: 675,
  },
  {
    image: "gallery-cabina-tecnologie",
    alt: "Cabina Solaria dedicata alle tecnologie estetiche avanzate",
    class: "md:col-span-2",
    label: "Cabine specializzate",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-martina-time",
    alt: "Martina Seguiti con i prodotti professionali TIME Skin Care",
    class: "",
    label: "Il metodo Solaria",
    width: 1200,
    height: 2133,
  },
  {
    image: "gallery-trattamento-luce-blu",
    alt: "Cabina dedicata ai trattamenti con luce blu",
    class: "md:col-span-2",
    position: "object-[center_84%]",
    label: "Rituali di benessere",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-sala-attesa",
    alt: "Sala d'attesa di Solaria Beauty Lab",
    class: "md:col-span-2",
    label: "Il tuo tempo",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-cabina-benessere",
    alt: "Cabina Solaria dedicata ai percorsi viso e corpo",
    class: "md:row-span-2",
    label: "Percorsi viso & corpo",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-sala-attesa-dettaglio",
    alt: "Dettaglio della sala d'attesa di Solaria Beauty Lab",
    class: "",
    label: "Accoglienza",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-cabina-trattamento",
    alt: "Cabina Solaria dedicata ai percorsi laser",
    class: "",
    label: "Cabina laser",
    width: 1200,
    height: 900,
  },
  {
    image: "gallery-lashes-uno",
    alt: "Dettaglio di extension ciglia realizzate presso Solaria Beauty Lab",
    class: "md:row-span-2",
    label: "Solaria lashes",
    width: 640,
    height: 853,
  },
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
        {photos.map((photo) => {
          const image = optimizedImage(photo.image, photo.width);
          return (
            <figure
              key={photo.image}
              class={`group relative overflow-hidden rounded-3xl bg-cream-100 ${photo.class}`}
            >
              <img
                src={image.src}
                srcset={image.srcset}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 40vw, (min-width: 640px) 50vw, 100vw"
                class={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] ${photo.position ?? ""}`}
              />
              <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent px-5 pb-5 pt-16 text-white">
                <span class="block text-xs font-bold uppercase tracking-[.16em] text-gold-300">
                  {photo.label}
                </span>
                <span class="mt-1 block text-sm text-white/85">
                  {photo.alt}
                </span>
              </figcaption>
            </figure>
          );
        })}
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
          href={siteConfig.social.instagram}
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
