import { pages } from "./pages";
import { address } from "../content/location";

const addressQuery = `${address.streetAddress}, ${address.postalCode} ${address.addressLocality}`;

export const siteConfig = {
  name: "Solaria Beauty Lab",
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
    tiktok: "https://www.tiktok.com/@solariabeautylab",
  },
  treatwellUrl: "https://www.treatwell.it/salone/solaria-beauty-lab/",
  googleReviewsUrl: "https://www.google.com/maps?cid=10563502337093552881",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`,
  mapsEmbedUrl: `https://www.google.com/maps?hl=it&q=${encodeURIComponent(addressQuery)}&z=16&output=embed`,
  url: "https://solariabeautylab.com",
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, siteConfig.url).toString();

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappHref.replace("+", "")}?text=Ciao%20Solaria%2C%20vorrei%20informazioni%20su%20un%20trattamento.`;

export const mainNavigation = [
  { label: pages.home.label, href: pages.home.path },
  { label: pages.treatments.label, href: pages.treatments.path },
  { label: pages.laser.label, href: pages.laser.path },
  { label: pages.philosophy.label, href: pages.philosophy.path },
  { label: pages.about.label, href: pages.about.path },
  { label: pages.gallery.label, href: pages.gallery.path },
  { label: pages.promotions.label, href: pages.promotions.path },
  { label: pages.contacts.label, href: pages.contacts.path },
] as const;
