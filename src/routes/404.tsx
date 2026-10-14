import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";

export default component$(() => (
  <section class="container-shell flex min-h-[65vh] flex-col items-center justify-center py-24 text-center">
    <p class="eyebrow">Errore 404</p>
    <h1 class="mt-4 max-w-2xl text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
      Questa pagina non è disponibile.
    </h1>
    <p class="mt-6 max-w-xl text-lg leading-8 text-ink/70">
      Puoi tornare alla pagina iniziale oppure consultare tutti i percorsi e i
      trattamenti disponibili.
    </p>
    <div class="mt-9 flex flex-wrap justify-center gap-3">
      <Button href="/">Torna alla home</Button>
      <Button href="/trattamenti/" variant="secondary">
        Scopri i trattamenti
      </Button>
    </div>
  </section>
));
