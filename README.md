# Solaria Beauty Lab

Sito di Solaria Beauty Lab realizzato con Qwik City, TypeScript e Tailwind CSS 4. La produzione è ospitata su Vercel tramite l'adapter Qwik Edge.

## Sviluppo e verifiche

```bash
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm run lint
```

`pnpm build` rigenera prima le versioni WebP responsive delle immagini originali. Per eseguire solo questo passaggio: `pnpm run images:optimize`. Gli originali in `public/images/` restano disponibili; i file generati sono in `public/images/optimized/`.

## Configurazione e contenuti

- `src/lib/site.ts`: dati del centro, contatti, navigazione e URL pubblico. `https://solariabeautylab.com` è l'unica fonte per URL canoniche, sitemap e dati strutturati, anche nelle anteprime.
- `src/content/services.ts`: catalogo dei trattamenti usato da homepage e pagina di riepilogo.
- `src/content/treatments.ts`: dettagli, prezzi e FAQ dei trattamenti.
- `src/lib/schema.ts`: dati strutturati comuni; `src/lib/seo.ts`: metadata comuni.
- `src/routes/`: pagine e endpoint per `sitemap.xml` e `robots.txt`.
- `public/images/` e `public/brand/`: immagini e identità visiva.

La pubblicazione avviene dalla repo GitHub collegata al progetto Vercel `website`. Il dominio ufficiale è `solariabeautylab.com`; `www.solariabeautylab.com` reindirizza al dominio senza `www`. L'adapter e gli script di build sono già configurati; non occorre aggiungerne altri.

Per verificare pagine, metadati, sitemap, robots e immagini dopo una pubblicazione:

```bash
pnpm run verify:production https://solariabeautylab.com
```
