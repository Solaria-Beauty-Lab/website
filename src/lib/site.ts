const address = {
  streetAddress: "Via G. Garibaldi, 125 A",
  postalCode: "00012",
  addressLocality: "Villanova di Guidonia",
  addressRegion: "RM",
  addressCountry: "IT",
} as const;

const addressQuery = `${address.streetAddress}, ${address.postalCode} ${address.addressLocality}`;

export const siteConfig = {
  name: "Solaria Beauty Lab",
  legalName: "Solaria Beauty Lab",
  description:
    "Centro estetico a Villanova di Guidonia specializzato in epilazione laser Alma, trattamenti viso, corpo ed estetica avanzata.",
  phoneDisplay: "+39 077 460 9113",
  phoneHref: "+390774609113",
  whatsappDisplay: "+39 351 492 7502",
  whatsappHref: "+393514927502",
  email: "solariabeautylab@gmail.com",
  address,
  areasServed: ["Villanova di Guidonia", "Guidonia Montecelio", "Tivoli"],
  social: {
    instagram: "https://www.instagram.com/solariabeautylab/",
    facebook: "https://www.facebook.com/profile.php?id=61579694938997",
    tiktok: "https://www.tiktok.com/@ms_esteticasolaria",
  },
  googleReviewsUrl: "https://www.google.com/maps?cid=10563502337093552881",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`,
  mapsEmbedUrl: `https://www.google.com/maps?hl=it&q=${encodeURIComponent(addressQuery)}&z=16&output=embed`,
  url:
    import.meta.env.PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://website-liard-one-warciaxwsg.vercel.app",
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappHref.replace("+", "")}?text=Ciao%20Solaria%2C%20vorrei%20informazioni%20su%20un%20trattamento.`;

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "Trattamenti", href: "/trattamenti/" },
  { label: "Epilazione laser", href: "/epilazione-laser/" },
  { label: "Filosofia", href: "/filosofia/" },
  { label: "Chi siamo", href: "/chi-siamo/" },
  { label: "Galleria", href: "/galleria/" },
  { label: "Promozioni", href: "/promozioni/" },
  { label: "Contatti", href: "/contatti/" },
] as const;

export const indexablePaths = [
  ...mainNavigation.map(({ href }) => href),
  "/trattamenti-viso/",
  "/trattamenti-corpo/",
  "/estetica-avanzata/",
  "/ceretta/",
] as const;
