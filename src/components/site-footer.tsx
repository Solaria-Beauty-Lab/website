import { component$ } from "@builder.io/qwik";
import { ContactIcon } from "~/components/contact-icon";
import { Button } from "~/components/ui/button";
import { iubenda } from "~/lib/iubenda";
import { mainNavigation, siteConfig, whatsappUrl } from "~/lib/site";

export const SiteFooter = component$(() => (
  <footer class="mt-24 border-t border-gold-400/20 bg-ink text-cream-100">
    <div class="container-shell grid gap-10 py-14 md:grid-cols-[1.05fr_.7fr_.9fr_.95fr]">
      <div>
        <img
          src="/brand/logo-new-ui.jpg"
          alt="Solaria Beauty Lab"
          width="480"
          height="320"
          loading="lazy"
          class="mb-5 h-28 w-44 rounded-2xl object-cover ring-1 ring-gold-400/30"
        />
        <p class="max-w-sm text-sm leading-6 text-cream-200/80">
          Estetica avanzata ed epilazione laser a Villanova di Guidonia.
          Percorsi viso & corpo costruiti a partire dalle tue esigenze.
        </p>
      </div>

      <div>
        <p class="eyebrow !text-gold-300">Esplora</p>
        <nav
          aria-label="Navigazione nel footer"
          class="mt-4 grid gap-0.5 text-sm"
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              class="w-fit py-0.5 text-cream-200/80 hover:text-gold-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div>
        <p class="eyebrow !text-gold-300">Contatti</p>
        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noreferrer"
          class="mt-4 flex items-start gap-3 text-sm leading-6 text-cream-200/80 hover:text-gold-300"
        >
          <ContactIcon name="location" size="sm" />
          <address class="not-italic">
            {siteConfig.address.streetAddress}
            <br />
            {siteConfig.address.postalCode} {siteConfig.address.addressLocality}{" "}
            ({siteConfig.address.addressRegion})
          </address>
        </a>
        <div class="mt-4 grid gap-2 text-sm">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            class="flex items-center gap-3 hover:text-gold-300"
          >
            <ContactIcon name="phone" size="sm" />
            <span>Negozio: {siteConfig.phoneDisplay}</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-3 hover:text-gold-300"
          >
            <ContactIcon name="whatsapp" size="sm" />
            <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            class="flex items-center gap-3 hover:text-gold-300"
          >
            <ContactIcon name="email" size="sm" />
            <span>{siteConfig.email}</span>
          </a>
        </div>
        <Button
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          size="sm"
          class="mt-5"
        >
          Scrivici su WhatsApp
        </Button>
      </div>

      <div>
        <p class="eyebrow !text-gold-300">Seguici</p>
        <p class="mt-4 max-w-xs text-sm leading-6 text-cream-200/80">
          Novità, risultati e momenti dal Beauty Lab.
        </p>
        <div class="mt-4 grid gap-2 text-sm">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            class="flex w-fit items-center gap-2 rounded-full border border-gold-300/30 px-3 py-1 text-cream-100 transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            <ContactIcon name="instagram" size="sm" />
            <span>Instagram ↗</span>
          </a>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noreferrer"
            class="flex w-fit items-center gap-2 rounded-full border border-gold-300/30 px-3 py-1 text-cream-100 transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            <ContactIcon name="facebook" size="sm" />
            <span>Facebook ↗</span>
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noreferrer"
            class="flex w-fit items-center gap-2 rounded-full border border-gold-300/30 px-3 py-1 text-cream-100 transition-colors hover:border-gold-300 hover:text-gold-300"
          >
            <ContactIcon name="tiktok" size="sm" />
            <span>TikTok ↗</span>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t border-white/10">
      <div class="container-shell flex flex-col gap-3 py-5 text-xs text-cream-200/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Solaria Beauty Lab</p>
        <div class="flex gap-4">
          <a
            href={iubenda.privacyPolicyUrl}
            class={`${iubenda.policyEmbedClass} hover:text-white`}
            title="Privacy Policy"
          >
            Privacy
          </a>
          <a
            href={iubenda.cookiePolicyUrl}
            class={`${iubenda.policyEmbedClass} hover:text-white`}
            title="Cookie Policy"
          >
            Cookie
          </a>
          <button
            type="button"
            class="iubenda-cs-preferences-link hover:text-white"
          >
            Preferenze cookie
          </button>
          <a href="/accessibilita/" class="hover:text-white">
            Accessibilità
          </a>
        </div>
      </div>
    </div>
  </footer>
));
