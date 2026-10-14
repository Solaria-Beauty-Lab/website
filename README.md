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

## Vercel Edge

This starter site is configured to deploy to [Vercel Edge Functions](https://vercel.com/docs/concepts/functions/edge-functions), which means it will be rendered at an edge location near to your users.

## Installation

The adaptor will add a new `vite.config.ts` within the `adapters/` directory, and a new entry file will be created, such as:

```
└── adapters/
    └── vercel-edge/
        └── vite.config.ts
└── src/
    └── entry.vercel-edge.tsx
```

Additionally, within the `package.json`, the `build.server` script will be updated with the Vercel Edge build.

## Production build

To build the application for production, use the `build` command, this command will automatically run `pnpm build.server` and `pnpm build.client`:

```shell
pnpm build
```

[Read the full guide here](https://github.com/QwikDev/qwik/blob/main/starters/adapters/vercel-edge/README.md)

## Dev deploy

To deploy the application for development:

```shell
pnpm deploy
```

Notice that you might need a [Vercel account](https://docs.Vercel.com/get-started/) in order to complete this step!

## Production deploy

The project is ready to be deployed to Vercel. However, you will need to create a git repository and push the code to it.

You can [deploy your site to Vercel](https://vercel.com/docs/concepts/deployments/overview) either via a Git provider integration or through the Vercel CLI.
