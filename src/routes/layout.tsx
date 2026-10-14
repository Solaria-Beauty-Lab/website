import { component$, Slot } from "@builder.io/qwik";
import { SiteFooter } from "~/components/site-footer";
import { SiteHeader } from "~/components/site-header";

export default component$(() => (
  <>
    <a
      href="#contenuto"
      class="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition-transform focus:translate-y-0"
    >
      Vai al contenuto
    </a>
    <SiteHeader />
    <main id="contenuto">
      <Slot />
    </main>
    <SiteFooter />
    <a
      href="#top"
      onClick$={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label="Torna all'inizio della pagina"
      title="Torna su"
      class="fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full border border-gold-300/50 bg-bronze-900 text-xl font-bold text-white shadow-[0_12px_35px_-10px_rgba(107,59,22,.7)] transition-[transform,background-color] hover:-translate-y-1 hover:bg-bronze-700"
    >
      ↑
    </a>
  </>
));
