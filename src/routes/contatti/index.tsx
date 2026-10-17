import { component$ } from "@builder.io/qwik";
import { Breadcrumbs } from "~/components/breadcrumbs";
import { ContactIcon } from "~/components/contact-icon";
import { PageHero } from "~/components/page-hero";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";
import { createSeo } from "~/lib/seo";
import { pages } from "~/lib/pages";
import { iubenda } from "~/lib/iubenda";
import { siteConfig, whatsappUrl } from "~/lib/site";

const fieldClass =
  "mt-2 min-h-12 w-full rounded-2xl border border-bronze-800/20 bg-white px-4 text-ink shadow-sm placeholder:text-ink-soft/55 focus:border-bronze-800";

export default component$(() => (
  <>
    <Breadcrumbs items={[{ label: "Contatti", href: "/contatti/" }]} />
    <PageHero
      eyebrow="Contatti e prenotazioni"
      title="Il tuo percorso può iniziare da una domanda."
      description="Scrivici, chiamaci oppure passa a trovarci a Villanova di Guidonia. Ti aiuteremo a individuare il primo passo più adatto."
      ctaLabel="Scrivi su WhatsApp"
      ctaHref={whatsappUrl}
    />

    <section class="container-shell relative grid gap-8 py-20 md:py-28 lg:grid-cols-[.8fr_1.2fr]">
      <div
        aria-hidden="true"
        class="absolute -left-28 top-12 h-64 w-64 rounded-full bg-gold-300/20 blur-3xl"
      />
      <div class="grid content-start gap-5">
        <Card class="relative overflow-hidden border-gold-400/30 bg-gradient-to-br from-[#fffdf8] via-[#f8e8c8] to-[#e8c27e] p-6">
          <p class="eyebrow">Dove siamo</p>
          <div class="mt-4 flex items-start gap-3">
            <ContactIcon name="location" />
            <address class="not-italic text-lg leading-8">
              {siteConfig.address.streetAddress}
              <br />
              {siteConfig.address.postalCode}{" "}
              {siteConfig.address.addressLocality} (
              {siteConfig.address.addressRegion})
            </address>
          </div>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer"
            class="mt-4 inline-flex font-semibold text-bronze-900 underline decoration-gold-400 underline-offset-4"
          >
            Apri le indicazioni stradali ↗
          </a>
        </Card>
        <Card class="border-[#9b6044]/25 bg-gradient-to-br from-[#fffaf7] via-[#f3dfd2] to-[#dfa682] p-6">
          <p class="eyebrow">Parla con noi</p>
          <div class="mt-3 grid gap-3">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              class="flex items-center gap-3 text-lg font-semibold hover:text-bronze-900"
            >
              <ContactIcon name="phone" />
              <span>Negozio: {siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              class="flex items-center gap-3 text-lg font-semibold hover:text-bronze-900"
            >
              <ContactIcon name="whatsapp" />
              <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              class="flex items-center gap-3 break-all text-sm text-ink-soft hover:text-bronze-900"
            >
              <ContactIcon name="email" />
              <span>{siteConfig.email}</span>
            </a>
          </div>
          <div class="mt-5 flex flex-wrap gap-3">
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              size="sm"
            >
              WhatsApp
            </Button>
            <Button
              href={`tel:${siteConfig.phoneHref}`}
              variant="secondary"
              size="sm"
            >
              Chiama
            </Button>
          </div>
        </Card>
        <Card class="border-[#7d8c78]/25 bg-gradient-to-br from-[#f9fbf6] to-[#dce7d6] p-6">
          <p class="eyebrow">Zona servita</p>
          <p class="mt-3 leading-7 text-ink-soft">
            Villanova di Guidonia, Guidonia Montecelio, Tivoli e zone limitrofe.
          </p>
        </Card>
      </div>

      <Card class="relative overflow-hidden border-bronze-800/20 bg-[linear-gradient(145deg,#fffdf8_0%,#f8edd8_55%,#e8c27e_150%)] p-6 md:p-9">
        <div
          aria-hidden="true"
          class="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-gold-400/25"
        />
        <div class="relative">
          <p class="eyebrow">Richiedi informazioni</p>
          <h2 class="mt-3 font-display text-4xl">
            Raccontaci cosa stai cercando.
          </h2>
          <p class="mt-3 leading-7 text-ink-soft">
            Il modulo apre il tuo programma email e non salva dati sul sito. Non
            inserire informazioni sanitarie o sensibili.
          </p>
          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            enctype="text/plain"
            class="mt-8 grid gap-5 sm:grid-cols-2"
          >
            <label class="text-sm font-semibold">
              Nome
              <input
                name="Nome"
                required
                autoComplete="given-name"
                class={fieldClass}
              />
            </label>
            <label class="text-sm font-semibold">
              Telefono
              <input
                name="Telefono"
                type="tel"
                required
                autoComplete="tel"
                class={fieldClass}
              />
            </label>
            <label class="text-sm font-semibold sm:col-span-2">
              Email
              <input
                name="Email"
                type="email"
                required
                autoComplete="email"
                class={fieldClass}
              />
            </label>
            <label class="text-sm font-semibold sm:col-span-2">
              Trattamento di interesse
              <select name="Trattamento" required class={fieldClass}>
                <option value="">Seleziona un'opzione</option>
                <option>Epilazione laser</option>
                <option>Trattamenti viso</option>
                <option>Trattamenti corpo</option>
                <option>Estetica avanzata</option>
                <option>Ceretta</option>
                <option>Gift card</option>
              </select>
            </label>
            <label class="text-sm font-semibold sm:col-span-2">
              Messaggio
              <textarea
                name="Messaggio"
                rows={5}
                required
                placeholder="Scrivi qui la tua domanda, senza dati sanitari."
                class={`${fieldClass} py-3`}
              />
            </label>
            <label class="flex items-start gap-3 text-sm leading-6 text-ink-soft sm:col-span-2">
              <input
                type="checkbox"
                name="Presa visione informativa privacy"
                value="confermata"
                required
                class="mt-1 h-5 w-5 accent-bronze-800"
              />
              <span>
                Ho letto l'
                <a
                  href={iubenda.privacyPolicyUrl}
                  class={`${iubenda.policyEmbedClass} font-semibold text-bronze-900 underline underline-offset-4`}
                  title="Privacy Policy"
                >
                  informativa privacy
                </a>
                .
              </span>
            </label>
            <div class="sm:col-span-2">
              <Button type="submit" size="lg">
                Prepara l'email
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </section>

    <section
      class="container-shell pb-20 md:pb-28"
      aria-labelledby="mappa-title"
    >
      <div class="overflow-hidden rounded-[2.25rem] border border-gold-400/25 bg-gradient-to-br from-cream-100 to-gold-300/20 shadow-[var(--shadow-soft)]">
        <div class="flex flex-col gap-5 p-7 md:flex-row md:items-end md:justify-between md:p-9">
          <div>
            <p class="eyebrow">Raggiungici</p>
            <h2 id="mappa-title" class="mt-3 font-display text-4xl md:text-5xl">
              Siamo a Villanova di Guidonia.
            </h2>
            <p class="mt-3 text-ink-soft">
              {siteConfig.address.streetAddress} · Apri la mappa per avviare il
              percorso.
            </p>
          </div>
          <Button
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            Apri in Google Maps ↗
          </Button>
        </div>
        <div class="relative h-[28rem]">
          <iframe
            title="Mappa di Solaria Beauty Lab a Villanova di Guidonia"
            src="https://cdn.iubenda.com/cookie_solution/empty.html"
            {...{ suppressedsrc: siteConfig.mapsEmbedUrl }}
            data-iub-purposes={iubenda.googleMapsPurpose}
            data-iubenda-google-map="true"
            width="1200"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullscreen
            class="_iub_cs_activate block h-full w-full border-0"
          />
          <div class="map-consent-placeholder absolute inset-0 flex flex-col items-center justify-center gap-4 bg-cream-100 px-6 text-center">
            <p class="max-w-lg text-ink-soft">
              La mappa Google viene caricata solo se autorizzi i contenuti di
              terze parti nelle preferenze cookie.
            </p>
            <button
              type="button"
              class="iubenda-cs-preferences-link font-semibold text-bronze-900 underline underline-offset-4"
            >
              Gestisci le preferenze cookie
            </button>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noreferrer"
              class="text-sm text-ink-soft underline underline-offset-4"
            >
              Apri Google Maps in una nuova scheda ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  </>
));

export const head = createSeo(pages.contacts);
