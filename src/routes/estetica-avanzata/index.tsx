import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { PageHero } from "~/components/page-hero";
import { ServiceSchema } from "~/components/service-schema";
import { TreatmentList } from "~/components/treatment-list";
import { Button } from "~/components/ui/button";
import { advancedGroups } from "~/content/treatments";
import { createSeo } from "~/lib/seo";
import { siteConfig } from "~/lib/site";

export default component$(() => (
  <>
    <Breadcrumbs
      items={[
        { label: "Trattamenti", href: "/trattamenti/" },
        { label: "Estetica avanzata", href: "/estetica-avanzata/" },
      ]}
    />
    <PageHero
      eyebrow="Estetica avanzata"
      title="Dettagli che valorizzano il tuo modo di essere."
      description="Solaria Lashes riunisce trattamenti dedicati a ciglia e sopracciglia per definire, armonizzare e intensificare lo sguardo."
    />
    <section class="container-shell py-20 md:py-28">
      <div class="mb-10 grid overflow-hidden rounded-[2rem] border border-[#b97a53]/25 bg-gradient-to-br from-[#fff3ec] via-[#f2d6c6] to-[#bd7750] shadow-[var(--shadow-soft)] lg:grid-cols-[.9fr_1.1fr]">
        <div class="p-7 md:p-10">
          <p class="eyebrow">Solaria Lashes</p>
          <h2 class="mt-3 font-display text-4xl md:text-5xl">
            Uno sguardo definito, senza rinunciare alla naturalezza.
          </h2>
          <p class="mt-4 max-w-xl leading-7 text-ink-soft">
            Laminazione ciglia e sopracciglia, classica o coreana, per
            valorizzare forma, intensità e armonia dello sguardo.
          </p>
          <Button
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            class="mt-6"
          >
            Guarda i risultati su Instagram ↗
          </Button>
        </div>
        <figure class="relative min-h-72 overflow-hidden lg:min-h-full">
          <img
            src="/images/gallery-3.avif"
            alt="Dettaglio dello sguardo dopo un trattamento Solaria Lashes"
            width="624"
            height="1106"
            loading="lazy"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />
          <figcaption class="absolute bottom-5 left-5 rounded-2xl bg-ink/70 px-4 py-3 text-sm text-white backdrop-blur-sm">
            I risultati e le novità dal profilo Solaria.
          </figcaption>
        </figure>
      </div>
      <TreatmentList groups={advancedGroups} />
      <div class="mt-10 rounded-3xl border border-gold-400/25 bg-cream-100 p-7 md:flex md:items-center md:justify-between md:gap-8">
        <div>
          <h2 class="font-display text-3xl">Hai un'occasione speciale?</h2>
          <p class="mt-2 leading-7 text-ink-soft">
            Raccontaci data, stile e risultato desiderato: verificheremo
            disponibilità e servizio più adatto.
          </p>
        </div>
        <a
          href="/contatti/"
          class="mt-5 inline-flex min-h-11 items-center rounded-full bg-bronze-800 px-5 text-sm font-semibold text-white md:mt-0"
        >
          Richiedi informazioni
        </a>
      </div>
    </section>
    <ServiceSchema
      name="Estetica avanzata"
      description="Laminazione classica e coreana per ciglia e sopracciglia, con scultura e colore a Guidonia Montecelio."
      path="/estetica-avanzata/"
      offers={advancedGroups.flatMap((group) =>
        group.items.map((item) => ({ name: item.name, price: item.price })),
      )}
    />
  </>
));

export const head = createSeo({
  title: "Estetica avanzata a Guidonia | Solaria Beauty Lab",
  description:
    "Laminazione ciglia e sopracciglia classica o coreana e scultura con colore a Villanova di Guidonia. Consulta il listino Solaria Lashes.",
  path: "/estetica-avanzata/",
});
