export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

export interface TreatmentGroup {
  title: string;
  description?: string;
  items: PriceItem[];
}

export interface BodyProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  symbol: string;
  items: PriceItem[];
}

export const laserZones = [
  {
    size: "Mini",
    areas:
      "Baffetto, mento, sottomento, basette, linea alba, perianale, mani, piedi, collo, zigomi, orecchie",
    prices: [
      ["Donna", "19 €"],
      ["Uomo", "21 €"],
    ],
  },
  {
    size: "Piccole",
    areas:
      "Ascelle, inguine parziale, viso totale, glutei, mezze braccia, spalle",
    prices: [
      ["Donna", "35 €"],
      ["Uomo", "39 €"],
    ],
  },
  {
    size: "Medie",
    areas:
      "Addome, petto, schiena parziale, braccia intere, inguine totale, mezza gamba",
    prices: [
      ["Donna", "50 €"],
      ["Uomo", "55 €"],
    ],
  },
  {
    size: "Maxi",
    areas: "Gambe intere, schiena totale",
    prices: [
      ["Donna", "99 €"],
      ["Uomo", "108 €"],
    ],
  },
  {
    size: "Total Body",
    areas: "Corpo completo",
    prices: [
      ["Donna", "200 €"],
      ["Uomo", "220 €"],
    ],
  },
] as const;

export const laserCombos = [
  {
    name: "Glow",
    womanPrice: "730 €",
    manPrice: "803 €",
    composition: "10 inguine + 10 ascelle",
    bonus: "In omaggio 10 zone Mini e autocura domiciliare.",
  },
  {
    name: "Flow",
    womanPrice: "1.130 €",
    manPrice: "1.243 €",
    composition: "10 mezze gambe + 10 inguine + 10 ascelle",
    bonus: "In omaggio 10 zone Mini e autocura domiciliare.",
  },
  {
    name: "Gold",
    womanPrice: "1.240 €",
    manPrice: "1.364 €",
    composition: "10 mezze gambe + 10 inguine oppure ascelle",
    bonus: "In omaggio 10 zone Mini e autocura domiciliare.",
  },
  {
    name: "Platinum",
    womanPrice: "1.400 €",
    manPrice: "1.540 €",
    composition: "10 gambe intere + 10 inguine + 10 ascelle",
    bonus: "In omaggio 10 zone Mini e autocura domiciliare.",
  },
  {
    name: "Total Body",
    womanPrice: "1.850 €",
    manPrice: "2.035 €",
    composition: "10 sedute Total Body",
  },
] as const;

export const bodyPrograms: BodyProgram[] = [
  {
    id: "drenami",
    title: "Drenami",
    subtitle: "Leggerezza e vitalità",
    symbol: "◌",
    description:
      "Trattamenti specifici per favorire il drenaggio dei liquidi in eccesso e ritrovare una piacevole sensazione di leggerezza. Ideale in presenza di gonfiore, ritenzione e pesantezza.",
    items: [
      {
        name: "Detox Slim Base",
        price: "75 €",
        note: "Bendaggi corpo riducenti ad azione detossinante e snellente.",
      },
      {
        name: "Detox Slim Plus",
        price: "125 €",
        note: "Bendaggi corpo e pressoterapia per un'azione drenante potenziata.",
      },
      {
        name: "Pressoterapia avanzata",
        price: "50 €",
        note: "Trattamento drenante intensivo per favorire la circolazione e contrastare gonfiore e pesantezza.",
      },
    ],
  },
  {
    id: "rimodellami",
    title: "Rimodellami",
    subtitle: "Ridefinisci le forme, riscopri te stessa",
    symbol: "◇",
    description:
      "Tecnologie estetiche abbinate per rimodellare, tonificare e ridefinire la silhouette attraverso protocolli mirati.",
    items: [
      {
        name: "Body Sculpt",
        price: "175 €",
        note: "Bendaggi corpo e radiofrequenza ad azione rimodellante, tonificante e rassodante.",
      },
      {
        name: "Body Shape",
        price: "165 €",
        note: "Bendaggi corpo e V-Shape per ridefinire i contorni e tonificare.",
      },
      {
        name: "Slim Pro RF",
        price: "100 €",
        note: "Radiofrequenza per migliorare la compattezza e l'aspetto della pelle.",
      },
      {
        name: "Slim Shape",
        price: "90 €",
        note: "Programma completo con V-Shape per un'azione snellente e tonificante.",
      },
      {
        name: "Slim Lipo",
        price: "70 €",
        note: "Programma di lipolaser dedicato agli accumuli adiposi localizzati.",
      },
    ],
  },
  {
    id: "body-rituals",
    title: "Body Rituals",
    subtitle: "Esfoliare e rigenerare",
    symbol: "✦",
    description:
      "Rituali sensoriali che uniscono elementi naturali e tecniche professionali per una pelle più luminosa, levigata e profondamente rigenerata.",
    items: [
      {
        name: "Body Relax",
        price: "50 €",
        note: "Scrub rilassante con microgranuli naturali e oli essenziali per esfoliare delicatamente e donare morbidezza.",
      },
      {
        name: "Body Mineral",
        price: "50 €",
        note: "Fangoterapia detossinante e rimineralizzante per stimolare il microcircolo e migliorare la tonicità della pelle.",
      },
    ],
  },
  {
    id: "solaria-relax",
    title: "Solaria Relax",
    subtitle: "Il piacere di ritrovare il tuo equilibrio",
    symbol: "☼",
    description:
      "Massaggi e trattamenti rilassanti e rigeneranti per sciogliere le tensioni, riequilibrare il corpo e concedersi un momento di autentico benessere.",
    items: [
      {
        name: "Massaggio relax",
        price: "50 €",
        note: "Distende corpo e mente e favorisce il rilassamento.",
      },
      {
        name: "Massaggio drenante",
        price: "50 €",
        note: "Favorisce il drenaggio dei liquidi in eccesso e dona leggerezza.",
      },
      {
        name: "Massaggio localizzato",
        price: "30 €",
        note: "Azione mirata per sciogliere tensioni localizzate.",
      },
      {
        name: "Massaggio viso",
        price: "20 €",
        note: "Rilassa i tratti e dona al viso un aspetto più fresco e riposato.",
      },
      {
        name: "Massaggio rimodellante",
        price: "60 €",
        note: "Manualità dedicate alla silhouette, al tono e agli inestetismi.",
      },
      {
        name: "Massaggio decontratturante",
        price: "60 €",
        note: "Aiuta ad alleviare le tensioni muscolari e a ritrovare mobilità.",
      },
      {
        name: "Massaggio linfodrenaggio",
        price: "60 €",
        note: "Manualità dedicate a gonfiore, ritenzione e sensazione di pesantezza.",
      },
    ],
  },
];

export const faceGroups: TreatmentGroup[] = [
  {
    title: "Igiene estetica",
    description: "Purezza, freschezza e luminosità.",
    items: [
      {
        name: "Igiene estetica Base",
        price: "40 €",
        note: "Pulizia viso base per una pelle fresca e purificata.",
      },
      {
        name: "Igiene estetica Plus",
        price: "50 €",
        note: "Pulizia viso completa con esfoliazione e trattamento specifico.",
      },
    ],
  },
  {
    title: "Programma Lift",
    description: "Tonicità, compattezza e lifting.",
    items: [
      {
        name: "Skin Lift senz'aghi",
        price: "60 €",
        note: "Trattamento viso per un effetto rimpolpante immediato.",
      },
      {
        name: "Solaria Lift Pro",
        price: "80 €",
        note: "Trattamento di radiofrequenza per migliorare elasticità e tono.",
      },
    ],
  },
  {
    title: "Solaria Skin Rituals",
    description: "Nutre, rigenera e illumina.",
    items: [
      {
        name: "Lumina Skin",
        price: "75 €",
        note: "Trattamento idratante con fiala specifica.",
      },
      {
        name: "Calma Skin",
        price: "75 €",
        note: "Trattamento calmante per pelli delicate e sensibili.",
      },
      {
        name: "Luce Skin",
        price: "75 €",
        note: "Trattamento dedicato alle discromie.",
      },
      {
        name: "Aura Skin",
        price: "75 €",
        note: "Trattamento rinnovatore che dona vitalità.",
      },
      {
        name: "Pure Skin",
        price: "75 €",
        note: "Trattamento purificante per pelli impure.",
      },
    ],
  },
];

export const advancedGroups: TreatmentGroup[] = [
  {
    title: "Solaria Lashes",
    description: "Definizione, armonia e intensità.",
    items: [
      {
        name: "Laminazione ciglia classica",
        price: "60 €",
        note: "Ciglia più curve, definite e dall'effetto naturale.",
      },
      {
        name: "Laminazione ciglia coreana",
        price: "60 €",
        note: "Tecnica di nuova generazione per ciglia più forti, nutrite e luminose.",
      },
      {
        name: "Laminazione sopracciglia classica",
        price: "45 €",
        note: "Sopracciglia più ordinate e piene per uno sguardo armonioso.",
      },
      {
        name: "Laminazione sopracciglia coreana",
        price: "45 €",
        note: "Trattamento disciplinante per un effetto duraturo.",
      },
      {
        name: "Scultura sopraccigliare + colore",
        price: "25 €",
        note: "Forma e colore su misura per valorizzare lo sguardo.",
      },
    ],
  },
];

export const waxingWomenGroups: TreatmentGroup[] = [
  {
    title: "Ceretta donna",
    items: [
      { name: "Baffetto", price: "5 €" },
      { name: "Mento", price: "5 €" },
      { name: "Sopracciglia", price: "5 €" },
      { name: "Viso completo", price: "15 €" },
      { name: "Ascelle", price: "10 €" },
      { name: "Braccia", price: "15 €" },
      { name: "Mezza gamba", price: "18 €" },
      { name: "Gamba intera", price: "30 €" },
      { name: "Inguine parziale", price: "10 €" },
      { name: "Inguine totale", price: "15 €" },
      { name: "Glutei", price: "10 €" },
      { name: "Addome / linea alba", price: "7 €" },
      { name: "Schiena", price: "20 €" },
    ],
  },
  {
    title: "Pacchetti donna",
    items: [
      { name: "Mezza gamba + inguine parziale", price: "25 €" },
      { name: "Mezza gamba + inguine totale", price: "32 €" },
      { name: "Gamba intera + inguine parziale", price: "38 €" },
      { name: "Gamba intera + inguine totale", price: "45 €" },
      { name: "Gamba intera + inguine + ascelle", price: "50 €" },
      { name: "Baffetto + sopracciglia", price: "12 €" },
    ],
  },
];

export const waxingMenGroups: TreatmentGroup[] = [
  {
    title: "Ceretta uomo",
    items: [
      { name: "Ascelle", price: "15 €" },
      { name: "Braccia", price: "25 €" },
      { name: "Mezza gamba", price: "25 €" },
      { name: "Gamba intera", price: "40 €" },
      { name: "Petto", price: "25 €" },
      { name: "Addome", price: "20 €" },
      { name: "Schiena", price: "30 €" },
      { name: "Spalle", price: "20 €" },
      { name: "Glutei", price: "20 €" },
    ],
  },
  {
    title: "Pacchetti uomo",
    items: [
      { name: "Petto + addome + spalle", price: "55 €" },
      { name: "Schiena + spalle", price: "45 €" },
      { name: "Gamba intera + inguine parziale", price: "55 €" },
      { name: "Gamba intera + inguine totale", price: "65 €" },
    ],
  },
];

export const laserFaq = [
  {
    question: "Come inizia un percorso di epilazione laser?",
    answer:
      "Con una consulenza dedicata alle caratteristiche della pelle e del pelo. Da questa valutazione viene definito il percorso e vengono spiegate preparazione, frequenza e indicazioni tra una seduta e l'altra.",
  },
  {
    question: "Quale tecnologia viene utilizzata?",
    answer:
      "Il centro utilizza tecnologia Alma e laser a diodo 808/810. L'idoneità al trattamento e i parametri vengono valutati individualmente dall'operatrice.",
  },
  {
    question: "Quante sedute sono necessarie?",
    answer:
      "Il numero di sedute varia in base a zona, caratteristiche del pelo, pelle e risposta individuale. I pacchetti indicano un percorso commerciale, non garantiscono un risultato identico per ogni persona.",
  },
  {
    question: "Cosa devo fare prima della seduta?",
    answer:
      "Le indicazioni precise vengono fornite in consulenza. Comunica sempre farmaci, variazioni della pelle, esposizione solare recente o altre condizioni rilevanti prima della seduta.",
  },
];
