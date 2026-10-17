const base = new URL(process.argv[2] ?? "");
const canonicalBase = new URL(process.argv[3] ?? base);
const failures = [];
const imagePaths = new Set();

const get = async (path, accept) => {
  const response = await fetch(new URL(path, base), {
    headers: accept ? { Accept: accept } : undefined,
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
  if (!/<html[^>]*lang="it"/.test(html)) {
    failures.push(`${path}: lingua italiana assente`);
  }
  if (!/<title\b[^>]*>[^<]+<\/title>/.test(html)) {
    failures.push(`${path}: titolo assente`);
  }
  if (!/<meta[^>]*name="description"[^>]*content="[^"]+"/.test(html)) {
    failures.push(`${path}: meta description assente`);
  }
  const canonicals = [
    ...html.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/g),
  ].map(([, url]) => url);
  const expectedCanonical = new URL(path, canonicalBase).toString();
  if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) {
    failures.push(`${path}: canonical ${canonicals.join(", ") || "assente"}`);
  }
  const ogUrl = html.match(
    /<meta[^>]*property="og:url"[^>]*content="([^"]+)"/,
  )?.[1];
  if (ogUrl !== expectedCanonical) {
    failures.push(`${path}: og:url ${ogUrl ?? "assente"}`);
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

  for (const [imagePath] of html.matchAll(
    /\/(?:images|brand)\/(?:optimized\/)?[A-Za-z0-9_.-]+/g,
  )) {
    imagePaths.add(imagePath);
  }
}

const robots = await get("/robots.txt");
if (
  !(await robots.text()).includes(
    new URL("/sitemap.xml", canonicalBase).toString(),
  )
) {
  failures.push("/robots.txt: URL sitemap non corretta");
}

for (const path of imagePaths) {
  const response = await fetch(new URL(path, base), { method: "HEAD" });
  if (
    !response.ok ||
    !response.headers.get("content-type")?.startsWith("image/")
  ) {
    failures.push(`${path}: HTTP ${response.status}`);
  }
}

console.log(
  `Verificate ${locations.length} pagine e ${imagePaths.size} immagini su ${base.origin}.`,
);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
