import { component$, useSignal } from "@builder.io/qwik";
import { optimizedImage } from "~/lib/images";

export const BlackFridayPopup = component$(() => {
  const isOpen = useSignal(true);

  if (!isOpen.value) return null;

  return (
    <section
      class="fixed inset-0 z-[120] grid place-items-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="black-friday-title"
    >
      <div class="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-gold-300/50 bg-[#171310] text-cream-100 shadow-[0_30px_90px_rgba(0,0,0,.55)] sm:rounded-[2.5rem]">
        <div
          aria-hidden="true"
          class="absolute -right-28 -top-28 h-80 w-80 rounded-full border border-gold-300/20"
        />
        <div
          aria-hidden="true"
          class="absolute -bottom-36 left-[35%] h-72 w-72 rounded-full bg-[#b87831]/25 blur-3xl"
        />

        <button
          type="button"
          onClick$={() => (isOpen.value = false)}
          class="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-black/35 text-xl text-white transition hover:bg-white hover:text-ink sm:right-6 sm:top-6"
          aria-label="Chiudi l'anteprima Black Friday"
        >
          ×
        </button>

        <a
          href="/promozioni/"
          class="group relative grid items-center gap-6 p-5 pr-14 sm:p-8 sm:pr-20 md:grid-cols-[.7fr_1.3fr] md:gap-10 md:p-10 md:pr-20"
          aria-label="Scopri le promozioni Black Friday"
        >
          <div class="mx-auto w-full max-w-[13rem] overflow-hidden rounded-2xl border border-gold-300/50 shadow-[0_22px_45px_-22px_rgba(0,0,0,.85)] md:max-w-none">
            <img
              {...optimizedImage("black-friday-laser")}
              alt=""
              width="1080"
              height="1350"
              fetchPriority="high"
              class="aspect-[4/5] w-full object-cover object-top"
            />
          </div>

          <div class="text-center md:text-left">
            <p class="eyebrow !text-gold-300">Solo per un periodo limitato</p>
            <h2
              id="black-friday-title"
              class="mt-3 font-display text-5xl leading-[.88] tracking-[-.04em] text-white sm:text-6xl"
            >
              Black Friday
              <span class="block gold-text italic">Solaria</span>
            </h2>
            <p class="mx-auto mt-5 max-w-xl text-base leading-7 text-cream-100/80 sm:text-lg md:mx-0">
              Scopri le offerte dedicate a laser, viso, corpo e rituali di
              benessere. I posti disponibili sono limitati.
            </p>
            <span class="mt-7 inline-flex items-center gap-3 rounded-full bg-gold-300 px-6 py-3 text-sm font-bold text-bronze-900 transition-transform group-hover:translate-x-1">
              Scopri le promozioni <span aria-hidden="true">↗</span>
            </span>
          </div>
        </a>
      </div>
    </section>
  );
});
