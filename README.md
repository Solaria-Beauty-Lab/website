# Solaria Beauty Lab

Nuovo sito di Solaria Beauty Lab, ricostruito in Qwik per essere rapido, accessibile e facile da trovare nelle ricerche locali.

## Avvio locale

```bash
pnpm install
pnpm dev
```

Il sito sarà disponibile all'indirizzo indicato nel terminale. Per controllare la versione di produzione:

```bash
pnpm build
pnpm preview
```

## Configurazione prima della pubblicazione

1. Copiare `.env.example` in `.env`.
2. Impostare `PUBLIC_SITE_URL` sul dominio definitivo, senza barra finale.
3. Scegliere l'adapter Qwik per l'hosting con `pnpm qwik add`.
4. Confermare i dati legali, gli orari e la tariffa delle zone laser Maxi.
5. Collegare un sistema di prenotazione o un form server-side se desiderato.

## Dove aggiornare i contenuti

- Dati del centro e navigazione: `src/lib/site.ts`
- Trattamenti, prezzi e FAQ: `src/content/treatments.ts`
- Pagine: `src/routes/`
- Immagini: `public/images/`
- Identità visiva: `public/brand/`

## SEO, ricerca locale e assistenti AI

Ogni pagina ha titolo, descrizione, canonical configurabile, Open Graph e direttive per gli snippet. Sono inclusi dati strutturati JSON-LD per attività locale, persona, servizi, breadcrumb e FAQ, oltre a `sitemap.xml`, `robots.txt` e `llms.txt` generati dal progetto.

## Stack

- Qwik City
- Tailwind CSS 4
- Qwik UI Headless e componenti in stile shadcn, con varianti tipizzate
- TypeScript
