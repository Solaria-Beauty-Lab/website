import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";
import { mainNavigation } from "~/lib/site";

export const SiteHeader = component$(() => (
  <header
    id="top"
    class="sticky top-0 z-50 border-b border-bronze-800/10 bg-cream-50/92 backdrop-blur-xl"
  >
    <div class="container-shell flex min-h-20 items-center justify-between gap-4">
      <a
        href="/"
        aria-label="Solaria Beauty Lab, torna alla home"
        class="shrink-0"
      >
        <img
          src="/brand/logo-new-ui.jpg"
          alt="Solaria Beauty Lab"
          width="480"
          height="320"
          class="h-16 w-24 rounded-xl object-cover shadow-sm"
          loading="eager"
        />
      </a>

      <nav
        aria-label="Navigazione principale"
        class="hidden items-center gap-1 lg:flex"
      >
        {mainNavigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            class="rounded-full px-2.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-cream-100 hover:text-bronze-900"
          >
            {item.label}
          </a>
        ))}
        <Button href="/contatti/" size="sm" class="ml-2">
          Prenota una consulenza
        </Button>
      </nav>

      <details class="group relative lg:hidden">
        <summary class="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-full border border-bronze-800/20 bg-white px-4 text-sm font-semibold text-bronze-900 marker:hidden">
          <span aria-hidden="true" class="grid gap-1">
            <span class="block h-0.5 w-4 bg-current" />
            <span class="block h-0.5 w-4 bg-current" />
            <span class="block h-0.5 w-4 bg-current" />
          </span>
          Menu
        </summary>
        <nav
          aria-label="Navigazione mobile"
          class="absolute right-0 mt-3 grid w-[min(19rem,calc(100vw-2rem))] gap-1 rounded-3xl border border-bronze-800/10 bg-white p-3 shadow-[var(--shadow-soft)]"
        >
          {mainNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              class="rounded-2xl px-4 py-3 font-semibold hover:bg-cream-100"
            >
              {item.label}
            </a>
          ))}
          <Button href="/contatti/" class="mt-1 w-full">
            Prenota una consulenza
          </Button>
        </nav>
      </details>
    </div>
  </header>
));
