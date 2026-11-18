import { address } from "../content/location";
import { serviceImages, siteImages, type SeoImage } from "../content/media";

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export interface SitePage {
  label: string;
  path: string;
  title: string;
  description: string;
  type?: PageType;
  image?: SeoImage;
}

// Canonical page inventory shared by metadata, sitemap, navigation, and llms.txt.
export const pages = {
  home: {
    label: "Home",
    path: "/",
    title: "Solaria Beauty Lab | Laser e Centro Estetico a Guidonia",
    description:
      "Epilazione laser Alma & trattamenti viso e corpo a Villanova di Guidonia. Scopri Solaria Beauty Lab e prenota il tuo trattamento estetico.",
  },
  treatments: {
    label: "Trattamenti",
    path: "/trattamenti/",
    title: "Trattamenti estetici a Villanova di Guidonia | Solaria",
    description:
      "Scopri epilazione laser Alma, percorsi viso e corpo, Solaria Lashes e ceretta presso Solaria Beauty Lab a Guidonia Montecelio.",
    type: "CollectionPage",
    image: siteImages.reception,
  },
  laser: {
    label: "Epilazione laser",
    path: "/epilazione-laser/",
    image: serviceImages.laser,
    title: "Epilazione laser Alma a Guidonia | Solaria Beauty Lab",
    description:
      "Epilazione laser Alma a Villanova di Guidonia: prezzi per zona, percorso e FAQ. Prenota direttamente la consulenza classica gratuita da Solaria Beauty Lab.",
  },
  face: {
    label: "Trattamenti viso",
    path: "/trattamenti-viso/",
    image: serviceImages.face,
    title: "Trattamenti viso a Villanova di Guidonia | Solaria",
    description:
      "Igiene estetica, trattamenti Lift e rituali viso personalizzati presso Solaria Beauty Lab a Guidonia Montecelio. Consulta nomi e prezzi.",
  },
  body: {
    label: "Trattamenti corpo",
    path: "/trattamenti-corpo/",
    image: serviceImages.body,
    title: "Trattamenti corpo a Villanova di Guidonia | Solaria",
    description:
      "Scopri Drenami, Rimodellami, Body Rituals e Solaria Relax: percorsi corpo, massaggi, pressoterapia e radiofrequenza a Guidonia Montecelio.",
  },
  advanced: {
    label: "Estetica avanzata",
    path: "/estetica-avanzata/",
    image: serviceImages.advanced,
    title: "Estetica avanzata a Guidonia | Solaria Beauty Lab",
    description:
      "Laminazione ciglia e sopracciglia classica o coreana e scultura con colore a Villanova di Guidonia. Consulta il listino Solaria Lashes.",
  },
  waxing: {
    label: "Ceretta",
    path: "/ceretta/",
    image: serviceImages.waxing,
    title: "Ceretta donna e uomo a Villanova di Guidonia | Solaria",
    description:
      "Consulta prezzi e pacchetti ceretta donna e uomo di Solaria Beauty Lab a Villanova di Guidonia.",
  },
  philosophy: {
    label: "Filosofia",
    path: "/filosofia/",
    title: "La nostra filosofia e il Metodo Solaria | Solaria Beauty Lab",
    description:
      "Scopri il Metodo Solaria: ascolto, analisi estetica strumentale e percorsi personalizzati a Guidonia Montecelio.",
    type: "AboutPage",
    image: siteImages.philosophy,
  },
  about: {
    label: "Chi siamo",
    path: "/chi-siamo/",
    title: "Martina Seguiti, estetista a Guidonia | Solaria Beauty Lab",
    description:
      "Conosci Martina Seguiti, estetista professionale e direttrice tecnica di Solaria Beauty Lab a Guidonia Montecelio.",
    type: "AboutPage",
    image: siteImages.founder,
  },
  gallery: {
    label: "Galleria",
    path: "/galleria/",
    image: siteImages.reception,
    title: "Galleria | Solaria Beauty Lab Guidonia",
    description:
      "Scopri immagini reali di Solaria Beauty Lab, di Martina Seguiti e dei trattamenti estetici a Guidonia Montecelio.",
    type: "CollectionPage",
  },
  promotions: {
    label: "Promozioni",
    path: "/promozioni/",
    title: "Metodo Solaria e promozioni centro estetico Guidonia",
    description:
      "Scopri Solaria Welcome e i percorsi Metodo Solaria per viso, corpo ed epilazione laser a Guidonia Montecelio. Prezzi e condizioni sul sito.",
    type: "CollectionPage",
  },
  contacts: {
    label: "Contatti",
    path: "/contatti/",
    image: siteImages.reception,
    title: "Contatti e prenotazioni | Solaria Beauty Lab Guidonia",
    description: `Contatta Solaria Beauty Lab in ${address.streetAddress} a ${address.addressLocality}. Telefono, WhatsApp, email e richiesta di consulenza.`,
    type: "ContactPage",
  },
  privacy: {
    label: "Privacy Policy",
    path: "/privacy/",
    title: "Privacy | Solaria Beauty Lab",
    description:
      "Informazioni sul trattamento dei dati nel sito Solaria Beauty Lab.",
  },
  cookie: {
    label: "Cookie Policy",
    path: "/cookie/",
    title: "Cookie | Solaria Beauty Lab",
    description:
      "Informazioni sui cookie e sugli strumenti tecnici del sito Solaria Beauty Lab.",
  },
  accessibility: {
    label: "Accessibilità",
    path: "/accessibilita/",
    title: "Accessibilità | Solaria Beauty Lab",
    description:
      "Impegno e riferimenti per l'accessibilità del sito Solaria Beauty Lab.",
  },
} as const satisfies Record<string, SitePage>;

export const indexablePages: readonly SitePage[] = Object.values(pages);
