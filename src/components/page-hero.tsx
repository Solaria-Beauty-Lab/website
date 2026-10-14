import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/ui/button";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const PageHero = component$<PageHeroProps>(
  ({
    eyebrow,
    title,
    description,
    ctaLabel = "Prenota una consulenza",
    ctaHref = "/contatti/",
  }) => (
    <section class="relative overflow-hidden border-b border-gold-400/25 bg-[linear-gradient(120deg,#fff8e8_0%,#f6dfbd_48%,#e8bd78_100%)] py-18 md:py-24">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,.9),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(134,73,16,.16),transparent_32%)]" />
      <div class="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-gold-400/25" />
      <div class="absolute -right-8 -top-10 h-44 w-44 rounded-full border border-gold-400/30" />
      <div class="absolute bottom-0 left-[12%] h-px w-44 bg-gradient-to-r from-transparent via-bronze-800/45 to-transparent" />
      <div class="container-shell relative">
        <p class="eyebrow">{eyebrow}</p>
        <h1 class="balance mt-4 max-w-4xl font-display text-5xl leading-[.98] tracking-[-0.04em] md:text-7xl">
          {title}
        </h1>
        <p class="pretty mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
          {description}
        </p>
        <Button href={ctaHref} size="lg" class="mt-8">
          {ctaLabel}
        </Button>
      </div>
    </section>
  ),
);
