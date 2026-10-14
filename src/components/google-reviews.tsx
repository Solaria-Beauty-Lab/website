import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";
import { siteConfig } from "~/lib/site";

const reviews = [
  {
    author: "GUERRA",
    source: "Recensione pubblica",
    quote: "Martina è una professionista giovane e con le idee chiare.",
  },
  {
    author: "Giada Leggeri",
    source: "Recensione pubblica",
    quote: "L’ambiente è accogliente, pulito e molto curato.",
  },
  {
    author: "Giada",
    source: "Recensione pubblica",
    quote: "Martina è stata super professionale e competente.",
  },
] as const;

export const GoogleReviews = component$(() => (
  <section
    class="relative overflow-hidden border-y border-bronze-800/10 bg-white py-20 md:py-28"
    aria-labelledby="google-reviews-title"
  >
    <div
      aria-hidden="true"
      class="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-300/15 blur-3xl"
    />
    <div class="container-shell relative">
      <div class="grid items-end gap-7 lg:grid-cols-[1fr_auto]">
        <div>
          <p class="eyebrow">Recensioni Google</p>
          <h2
            id="google-reviews-title"
            class="balance mt-4 max-w-3xl font-display text-4xl leading-[1.05] md:text-6xl"
          >
            La fiducia raccontata da chi ci ha scelto.
          </h2>
        </div>

        <a
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          class="group flex w-fit items-center gap-4 rounded-2xl border border-gold-400/25 bg-cream-50 px-5 py-4 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1"
          aria-label="Apri tutte le recensioni di Solaria Beauty Lab su Google"
        >
          <span class="grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-bold text-[#4285f4] shadow-sm">
            G
          </span>
          <span>
            <span class="flex items-baseline gap-2">
              <strong class="font-display text-3xl leading-none">5,0</strong>
              <span class="text-sm text-ink-soft">su 5</span>
            </span>
            <span class="mt-1 block text-sm font-semibold text-bronze-900">
              20 recensioni su Google <span aria-hidden="true">↗</span>
            </span>
          </span>
        </a>
      </div>

      <div class="mt-10 grid gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.author}
            class="flex min-h-64 flex-col rounded-[1.75rem] border border-bronze-800/10 bg-cream-50 p-6 shadow-[var(--shadow-card)] md:p-7"
          >
            <div
              class="flex gap-1 text-lg tracking-wide text-gold-500"
              aria-label="5 stelle su 5"
            >
              <span aria-hidden="true">★★★★★</span>
            </div>
            <blockquote class="pretty mt-6 font-display text-2xl leading-snug text-ink">
              “{review.quote}”
            </blockquote>
            <footer class="mt-auto flex items-end justify-between gap-4 pt-8">
              <div>
                <p class="font-semibold text-ink">{review.author}</p>
                <p class="mt-1 text-xs text-ink-soft">{review.source}</p>
              </div>
              <span class="text-xs font-semibold text-bronze-800">Google</span>
            </footer>
          </article>
        ))}
      </div>

      <div class="mt-8 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <p class="max-w-2xl text-xs leading-5 text-ink-soft">
          Estratti da recensioni pubbliche. Valutazione rilevata il 14 settembre
          2026: il numero può cambiare nel tempo.
        </p>
        <Button
          href={siteConfig.googleReviewsUrl}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
        >
          Leggi tutte le recensioni su Google
        </Button>
      </div>
    </div>
  </section>
));
