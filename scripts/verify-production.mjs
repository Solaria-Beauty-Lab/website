import sharp from "sharp";

const args = process.argv.slice(2).filter((value) => !value.startsWith("--"));
const base = new URL(args[0] ?? "");
const canonicalBase = new URL(args[1] ?? base);
const failures = [];
const imagePaths = new Set();
const titles = new Set();
const descriptions = new Set();
const definitions = new Set();
const references = new Set();
const checkedSocialImages = new Map();
let entityCount = 0;
const vocabularyIssues = new Set();
let vocabulary;
if (process.argv.includes("--vocabulary")) {
  const response = await fetch(
    "https://schema.org/version/latest/schemaorg-current-https.jsonld",
    { signal: AbortSignal.timeout(20000) },
  );
  if (!response.ok)
    throw new Error(`Vocabolario Schema.org: HTTP ${response.status}`);
  const spec = await response.json();
  const short = (id) => id?.replace(/^https?:\/\/schema.org\//, "schema:");
  const definitions = new Map(
    spec["@graph"].map((node) => [short(node["@id"]), node]),
  );
  const list = (value) => (value ? [value].flat() : []);
  const ancestors = (type) => {
    const result = new Set();
    const queue = [`schema:${type}`];
    while (queue.length) {
      const id = queue.pop();
      if (result.has(id)) continue;
      result.add(id);
      for (const parent of list(definitions.get(id)?.["rdfs:subClassOf"]))
        queue.push(short(parent["@id"]));
    }
    return result;
  };
  vocabulary = (node) => {
    const types = list(node["@type"]);
    const supers = new Set(types.flatMap((type) => [...ancestors(type)]));
    for (const type of types)
      if (!definitions.has(`schema:${type}`))
        vocabularyIssues.add(`Tipo sconosciuto: ${type}`);
    for (const key of Object.keys(node).filter((key) => !key.startsWith("@"))) {
      const property = definitions.get(`schema:${key}`);
      if (!property) {
        vocabularyIssues.add(`Proprieta sconosciuta: ${key}`);
        continue;
      }
      const domains = list(property["schema:domainIncludes"]).map((value) =>
        short(value["@id"]),
      );
      if (domains.length && !domains.some((domain) => supers.has(domain)))
        vocabularyIssues.add(
          `${types.join("/")}.${key}: proprieta non pertinente al tipo`,
        );
    }
  };
}

const decodeHtml = (text) =>
  text
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_, code) =>
      String.fromCodePoint(
        code[0].toLowerCase() === "x"
          ? parseInt(code.slice(1), 16)
          : Number(code),
      ),
    )
    .replace(
      /&(amp|quot|apos|lt|gt|nbsp);/g,
      (_, code) =>
        ({ amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: " " })[code],
    );
const plainText = (html) =>
  decodeHtml(html.replace(/<[^>]*>/g, ""))
    .replace(/\s+/g, " ")
    .trim();
const walk = (value, visit) => {
  if (Array.isArray(value)) value.forEach((item) => walk(item, visit));
  else if (value && typeof value === "object") {
    visit(value);
    Object.values(value).forEach((item) => walk(item, visit));
  }
};
const hasType = (node, type) => [node?.["@type"]].flat().includes(type);
const fail = (condition, path, message) => {
  if (!condition) failures.push(`${path}: ${message}`);
};

const socialMetadata = async (url) => {
  if (!checkedSocialImages.has(url))
    checkedSocialImages.set(
      url,
      (async () => {
        const parsed = new URL(url);
        const target =
          parsed.origin === canonicalBase.origin
            ? new URL(parsed.pathname, base)
            : parsed;
        const response = await fetch(target, {
          signal: AbortSignal.timeout(20000),
        });
        if (
          !response.ok ||
          !response.headers.get("content-type")?.startsWith("image/")
        )
          throw new Error(`immagine HTTP ${response.status}`);
        const metadata = await sharp(
          Buffer.from(await response.arrayBuffer()),
        ).metadata();
        return {
          ...metadata,
          type: response.headers.get("content-type").split(";")[0],
        };
      })(),
    );
  return checkedSocialImages.get(url);
};

const metaContents = (html, attribute, value) =>
  [
    ...html.matchAll(
      new RegExp(
        `<meta[^>]*${attribute}="${value}"[^>]*content="([^"]+)"[^>]*>`,
        "g",
      ),
    ),
  ].map(([, content]) => content);

const verifySingleMeta = (html, path, attribute, value) => {
  const contents = metaContents(html, attribute, value);
  if (contents.length !== 1 || !contents[0].trim()) {
    failures.push(
      `${path}: ${value} ${contents.length === 0 ? "assente" : "duplicato"}`,
    );
  }
  return contents[0];
};

const get = async (path, accept) => {
  const response = await fetch(new URL(path, base), {
    headers: accept ? { Accept: accept } : undefined,
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) failures.push(`${path}: HTTP ${response.status}`);
  return response;
};

const sitemap = await get("/sitemap.xml");
if (!sitemap.headers.get("content-type")?.includes("application/xml")) {
  failures.push("/sitemap.xml: Content-Type non XML");
}
const xml = await sitemap.text();
const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  ([, location]) => location,
);

if (!locations.length) failures.push("/sitemap.xml: nessuna pagina elencata");
if (new Set(locations).size !== locations.length) {
  failures.push("/sitemap.xml: URL duplicate");
}
for (const [, location] of xml.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)) {
  const url = new URL(decodeHtml(location));
  fail(
    url.protocol === "https:" && url.origin === canonicalBase.origin,
    "/sitemap.xml",
    "immagine con URL non canonica",
  );
  imagePaths.add(url.pathname);
}

const llms = await get("/llms.txt");
if (!llms.headers.get("content-type")?.includes("text/plain")) {
  failures.push("/llms.txt: Content-Type non testuale");
}
const llmsText = await llms.text();
if (!llmsText.startsWith("# Solaria Beauty Lab")) {
  failures.push("/llms.txt: intestazione assente");
}

for (const location of locations) {
  const listedUrl = new URL(location);
  if (listedUrl.origin !== canonicalBase.origin) {
    failures.push(`Sitemap: ${location} non usa ${canonicalBase.origin}`);
  }

  const path = listedUrl.pathname;
  const response = await get(path, "text/html");
  if (!response.ok) continue;
  const html = await response.text();
  const head = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i)?.[1] ?? "";
  fail(
    !/noindex|nofollow/i.test(response.headers.get("x-robots-tag") ?? ""),
    path,
    "X-Robots-Tag bloccante",
  );
  const pageTitles = [...head.matchAll(/<title\b[^>]*>([^<]+)<\/title>/g)];
  const title = decodeHtml(pageTitles[0]?.[1] ?? "");
  fail(
    pageTitles.length === 1 && !titles.has(title),
    path,
    "title assente, duplicato o condiviso con altra pagina",
  );
  titles.add(title);
  const description = verifySingleMeta(head, path, "name", "description");
  fail(
    !descriptions.has(description),
    path,
    "description condivisa con altra pagina",
  );
  descriptions.add(description);
  for (const [attribute, key, expected] of [
    ["property", "og:title", title],
    ["name", "twitter:title", title],
    ["property", "og:description", decodeHtml(description ?? "")],
    ["name", "twitter:description", decodeHtml(description ?? "")],
  ])
    fail(
      decodeHtml(metaContents(head, attribute, key)[0] ?? "") === expected,
      path,
      `${key} incoerente`,
    );
  if (!/<html[^>]*lang="it"/.test(html)) {
    failures.push(`${path}: lingua italiana assente`);
  }
  if (!/<title\b[^>]*>[^<]+<\/title>/.test(html)) {
    failures.push(`${path}: titolo assente`);
  }
  const robots = verifySingleMeta(html, path, "name", "robots");
  if (!robots?.includes("index") || /noindex|nofollow/i.test(robots)) {
    failures.push(`${path}: direttiva robots non indicizzabile`);
  }
  const canonicals = [
    ...html.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/g),
  ].map(([, url]) => url);
  const expectedCanonical = new URL(path, canonicalBase).toString();
  if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) {
    failures.push(`${path}: canonical ${canonicals.join(", ") || "assente"}`);
  }
  const ogUrl = verifySingleMeta(html, path, "property", "og:url");
  if (ogUrl !== expectedCanonical) {
    failures.push(`${path}: og:url ${ogUrl ?? "assente"}`);
  }
  for (const property of [
    "og:type",
    "og:title",
    "og:description",
    "og:image",
  ]) {
    verifySingleMeta(html, path, "property", property);
  }
  for (const name of [
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image",
  ]) {
    verifySingleMeta(html, path, "name", name);
  }
  const socialImage = metaContents(head, "property", "og:image")[0];
  fail(
    /^https:\/\//.test(socialImage ?? ""),
    path,
    "og:image non assoluta HTTPS",
  );
  fail(
    metaContents(head, "name", "twitter:image")[0] === socialImage,
    path,
    "immagine Twitter incoerente",
  );
  fail(
    verifySingleMeta(head, path, "property", "og:image:secure_url") ===
      socialImage,
    path,
    "og:image:secure_url incoerente",
  );
  for (const key of [
    "og:image:width",
    "og:image:height",
    "og:image:type",
    "og:image:alt",
  ])
    verifySingleMeta(head, path, "property", key);
  verifySingleMeta(head, path, "name", "twitter:image:alt");
  try {
    const metadata = await socialMetadata(socialImage);
    fail(
      Number(metaContents(head, "property", "og:image:width")[0]) ===
        metadata.width &&
        Number(metaContents(head, "property", "og:image:height")[0]) ===
          metadata.height,
      path,
      "dimensioni OG diverse dal file reale",
    );
    fail(
      metaContents(head, "property", "og:image:type")[0] === metadata.type,
      path,
      "MIME OG diverso dal file reale",
    );
  } catch (error) {
    failures.push(
      `${path}: immagine social non verificabile (${error.message})`,
    );
  }
  if (!llmsText.includes(expectedCanonical)) {
    failures.push(`${path}: URL assente in llms.txt`);
  }
  if (!html.includes('rel="describedby"')) {
    failures.push(`${path}: link llms.txt assente`);
  }
  const jsonLd = [
    ...html.matchAll(
      /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
    ),
  ]
    .map(([, value]) => {
      try {
        return JSON.parse(value);
      } catch {
        failures.push(`${path}: JSON-LD non valido`);
        return null;
      }
    })
    .filter(Boolean)
    .flatMap((data) => data["@graph"] ?? [data]);
  if (!jsonLd.some((data) => data["@id"] === `${expectedCanonical}#webpage`)) {
    failures.push(`${path}: entità WebPage assente`);
  }
  if (
    !jsonLd.some(
      (data) => data["@id"] === new URL("/#business", canonicalBase).toString(),
    )
  ) {
    failures.push(`${path}: entità BeautySalon assente`);
  }
  const pageIds = new Set();
  const entities = [];
  walk(jsonLd, (node) => {
    if (node["@type"]) {
      entities.push(node);
      entityCount++;
      vocabulary?.(node);
    }
    if (node["@id"]) {
      if (Object.keys(node).some((key) => key !== "@id")) {
        fail(
          !pageIds.has(node["@id"]),
          path,
          `definizione JSON-LD ripetuta ${node["@id"]}`,
        );
        pageIds.add(node["@id"]);
        definitions.add(node["@id"]);
      } else references.add(node["@id"]);
    }
    if (hasType(node, "Offer") && node.price !== undefined)
      fail(
        /^\d+(\.\d{1,2})?$/.test(String(node.price)) &&
          node.priceCurrency === "EUR",
        path,
        "offerta con prezzo o valuta non validi",
      );
    if (hasType(node, "ImageObject") && node.contentUrl) {
      const imageUrl = new URL(node.contentUrl);
      fail(imageUrl.protocol === "https:", path, "ImageObject non HTTPS");
      if (imageUrl.origin === canonicalBase.origin)
        imagePaths.add(imageUrl.pathname);
    }
  });
  const webpage = jsonLd.find(
    (node) => node["@id"] === `${expectedCanonical}#webpage`,
  );
  const business = jsonLd.filter((node) => hasType(node, "BeautySalon"));
  fail(business.length === 1, path, "BeautySalon duplicato");
  fail(
    webpage?.publisher?.["@id"] === business[0]?.["@id"],
    path,
    "publisher pagina mancante o errato",
  );
  fail(
    webpage?.primaryImageOfPage?.["@id"] ===
      `${expectedCanonical}#primaryimage`,
    path,
    "primaryImageOfPage mancante",
  );
  const primaryImage = entities.find(
    (node) => node["@id"] === webpage?.primaryImageOfPage?.["@id"],
  );
  fail(
    primaryImage?.contentUrl === socialImage,
    path,
    "ImageObject e og:image non allineati",
  );
  fail(
    business[0]?.hasOfferCatalog?.["@id"] ===
      new URL("/trattamenti/#catalog", canonicalBase).toString(),
    path,
    "catalogo attivita assente",
  );
  fail(
    hasType(business[0]?.potentialAction, "ScheduleAction") &&
      business[0]?.potentialAction?.target?.urlTemplate ===
        "https://www.treatwell.it/salone/solaria-beauty-lab/",
    path,
    "prenotazione strutturata assente o errata",
  );
  const sameAs = business[0]?.sameAs ?? [];
  fail(new Set(sameAs).size === sameAs.length, path, "sameAs ripetuti");
  for (const profile of [
    "https://www.treatwell.it/salone/solaria-beauty-lab/",
    "https://www.instagram.com/solariabeautylab/",
    "https://www.tiktok.com/@solariabeautylab",
  ])
    fail(sameAs.includes(profile), path, `sameAs mancante: ${profile}`);
  for (const service of jsonLd.filter((node) => hasType(node, "Service"))) {
    fail(
      [webpage?.mainEntity]
        .flat()
        .some((entity) => entity?.["@id"] === service["@id"]),
      path,
      "Service non collegato alla pagina",
    );
    fail(
      service.mainEntityOfPage?.["@id"] === webpage?.["@id"] &&
        service.provider?.["@id"] === business[0]?.["@id"],
      path,
      "relazioni Service incoerenti",
    );
    fail(
      service.image?.["@id"] === primaryImage?.["@id"] &&
        !!service.availableChannel?.serviceUrl,
      path,
      "immagine o canale Service assente",
    );
  }
  const mainHtml = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1] ?? "";
  const visibleFaq = [
    ...mainHtml.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g),
  ].map(([, content]) => ({
    question: plainText(
      content
        .match(/<summary\b[^>]*>([\s\S]*?)<\/summary>/)?.[1]
        .replace(/<span[^>]*aria-hidden="true"[^>]*>[\s\S]*?<\/span>/g, "") ??
        "",
    ),
    answer: plainText(
      content.replace(/<summary\b[^>]*>[\s\S]*?<\/summary>/, ""),
    ),
  }));
  for (const faq of jsonLd.filter((node) => hasType(node, "FAQPage"))) {
    fail(
      faq.mainEntity.length === visibleFaq.length &&
        faq.mainEntity.every(
          (question, index) =>
            question.name === visibleFaq[index]?.question &&
            question.acceptedAnswer.text.replace(/\s+/g, " ").trim() ===
              visibleFaq[index]?.answer,
        ),
      path,
      "FAQ JSON-LD diverse dal contenuto visibile",
    );
  }

  for (const [imagePath] of html.matchAll(
    /\/(?:images|brand)\/(?:optimized\/)?[A-Za-z0-9_.-]+/g,
  )) {
    imagePaths.add(imagePath);
  }
}

for (const ref of references) {
  if (ref.startsWith(canonicalBase.origin + "/") && !definitions.has(ref))
    failures.push(`Riferimento JSON-LD senza definizione nelle pagine: ${ref}`);
}

const robots = await get("/robots.txt");
const robotsText = await robots.text();
if (!robotsText.includes(new URL("/sitemap.xml", canonicalBase).toString())) {
  failures.push("/robots.txt: URL sitemap non corretta");
}
fail(
  !/^Disallow:\s*\/\s*$/im.test(robotsText),
  "/robots.txt",
  "blocco completo della scansione",
);

const queryPage = await get(
  "/epilazione-laser/?utm_source=seo-verification",
  "text/html",
);
const queryHtml = await queryPage.text();
fail(
  queryHtml.includes(
    `rel="canonical" href="${new URL("/epilazione-laser/", canonicalBase)}"`,
  ),
  "/epilazione-laser/",
  "canonical con parametri di tracciamento errata",
);
if (
  base.origin === canonicalBase.origin &&
  canonicalBase.hostname === "solariabeautylab.com"
) {
  // The Vite development fallback returns 200; check real 404s on production.
  const missingPage = await fetch(
    new URL("/seo-verification-missing-page-404/", base),
    { redirect: "manual", signal: AbortSignal.timeout(20000) },
  );
  fail(
    missingPage.status === 404,
    "404",
    `pagina inesistente risponde HTTP ${missingPage.status}`,
  );
  for (const [source, destination] of [
    ["http://solariabeautylab.com/", "https://solariabeautylab.com/"],
    [
      "https://www.solariabeautylab.com/epilazione-laser/?utm_source=seo-verification",
      "https://solariabeautylab.com/epilazione-laser/?utm_source=seo-verification",
    ],
  ]) {
    const response = await fetch(source, {
      redirect: "manual",
      signal: AbortSignal.timeout(20000),
    });
    fail(
      [301, 308].includes(response.status) &&
        response.headers.get("location") === destination,
      source,
      "redirect HTTPS/canonical non permanente o errato",
    );
  }
}

for (const path of imagePaths) {
  const response = await fetch(new URL(path, base), {
    method: "HEAD",
    signal: AbortSignal.timeout(20000),
  });
  if (
    !response.ok ||
    !response.headers.get("content-type")?.startsWith("image/")
  ) {
    failures.push(`${path}: HTTP ${response.status}`);
  }
}

console.log(
  `Verificate ${locations.length} pagine, ${entityCount} entita JSON-LD e ${imagePaths.size} immagini su ${base.origin}.`,
);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
if (vocabulary) {
  console.log(
    `Vocabolario Schema.org: ${vocabularyIssues.size} problemi di tipi/proprieta.`,
  );
  if (vocabularyIssues.size) {
    console.error([...vocabularyIssues].join("\n"));
    process.exitCode = 1;
  }
}
