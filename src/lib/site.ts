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
  address: {
    streetAddress: "Via G. Garibaldi, 125 A",
    postalCode: "00012",
    addressLocality: "Villanova di Guidonia",
    addressRegion: "RM",
    addressCountry: "IT",
  },
  areasServed: ["Villanova di Guidonia", "Guidonia Montecelio", "Tivoli"],
  social: {
    instagram: "https://www.instagram.com/solariabeautylab/",
    facebook: "https://www.facebook.com/profile.php?id=61579694938997",
    tiktok: "https://www.tiktok.com/@ms_esteticasolaria",
  },
  googleReviewsUrl:
    "https://www.google.com/maps?cid=10563502337093552881",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Via%20G.%20Garibaldi%20125%20A%20Villanova%20di%20Guidonia",
  url: import.meta.env.PUBLIC_SITE_URL || "",
} as const;

export const absoluteUrl = (path = "/") =>
  siteConfig.url ? new URL(path, siteConfig.url).toString() : path;

export const whatsappUrl =
  `https://wa.me/${siteConfig.whatsappHref.replace("+", "")}?text=Ciao%20Solaria%2C%20vorrei%20informazioni%20su%20un%20trattamento.`;

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
