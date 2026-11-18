export interface SeoImage {
  path: string;
  width: number;
  height: number;
  type: string;
  alt: string;
}

export const siteImages = {
  social: {
    path: "/brand/og-solaria-new.jpg",
    width: 1200,
    height: 630,
    type: "image/jpeg",
    alt: "Solaria Beauty Lab, centro estetico a Villanova di Guidonia",
  },
  logo: {
    path: "/brand/logo-new-ui.jpg",
    width: 480,
    height: 320,
    type: "image/jpeg",
    alt: "Logo Solaria Beauty Lab",
  },
  reception: {
    path: "/images/optimized/gallery-reception-nuova-1200.webp",
    width: 1200,
    height: 900,
    type: "image/webp",
    alt: "Reception di Solaria Beauty Lab con insegna luminosa",
  },
  founder: {
    path: "/images/gallery-6.avif",
    width: 624,
    height: 1106,
    type: "image/avif",
    alt: "Martina Seguiti, direttrice tecnica di Solaria Beauty Lab",
  },
  philosophy: {
    path: "/images/optimized/filosofia-martina-ritratto-1200.webp",
    width: 1200,
    height: 2133,
    type: "image/webp",
    alt: "Martina Seguiti e il Metodo Solaria",
  },
} as const satisfies Record<string, SeoImage>;

export const serviceImages = {
  laser: {
    path: "/images/service-laser.webp",
    width: 1600,
    height: 640,
    type: "image/webp",
    alt: "Epilazione laser Alma da Solaria Beauty Lab",
  },
  face: {
    path: "/images/service-viso-v2.webp",
    width: 1600,
    height: 900,
    type: "image/webp",
    alt: "Trattamenti viso da Solaria Beauty Lab",
  },
  body: {
    path: "/images/service-corpo.webp",
    width: 1600,
    height: 686,
    type: "image/webp",
    alt: "Percorsi corpo da Solaria Beauty Lab",
  },
  advanced: {
    path: "/images/service-lashes.webp",
    width: 1600,
    height: 686,
    type: "image/webp",
    alt: "Solaria Lashes, ciglia e sopracciglia",
  },
  waxing: {
    path: "/images/service-ceretta.webp",
    width: 1600,
    height: 800,
    type: "image/webp",
    alt: "Ceretta donna e uomo da Solaria Beauty Lab",
  },
} as const satisfies Record<string, SeoImage>;
