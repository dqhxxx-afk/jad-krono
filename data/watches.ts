export type WatchTone =
  | "onyx"
  | "forest"
  | "navy"
  | "silver"
  | "burgundy"
  | "champagne"
  | "ice"
  | "slate";

export type Watch = {
  slug: string;
  brand: string;
  model: string;
  reference: string;
  year: string;
  set: string;
  caseSize: string;
  material: string;
  status: "Available" | "Sourcing" | "Reserved";
  tone: WatchTone;
  featured?: boolean;
};

export const watches: Watch[] = [
  {
    slug: "rolex-gmt-master-ii-126710blnr",
    brand: "Rolex",
    model: "GMT-Master II",
    reference: "126710BLNR",
    year: "2022",
    set: "Full set",
    caseSize: "40 mm",
    material: "Oystersteel",
    status: "Available",
    tone: "navy",
    featured: true,
  },
  {
    slug: "patek-philippe-aquanaut-5167a",
    brand: "Patek Philippe",
    model: "Aquanaut",
    reference: "5167A-001",
    year: "2020",
    set: "Full set",
    caseSize: "40.8 mm",
    material: "Stainless steel",
    status: "Available",
    tone: "forest",
    featured: true,
  },
  {
    slug: "audemars-piguet-royal-oak-15500st",
    brand: "Audemars Piguet",
    model: "Royal Oak",
    reference: "15500ST",
    year: "2021",
    set: "Full set",
    caseSize: "41 mm",
    material: "Stainless steel",
    status: "Reserved",
    tone: "slate",
    featured: true,
  },
  {
    slug: "rolex-daytona-126500ln",
    brand: "Rolex",
    model: "Cosmograph Daytona",
    reference: "126500LN",
    year: "2024",
    set: "Full set",
    caseSize: "40 mm",
    material: "Oystersteel",
    status: "Available",
    tone: "ice",
    featured: true,
  },
  {
    slug: "tudor-black-bay-58-m79030n",
    brand: "Tudor",
    model: "Black Bay 58",
    reference: "M79030N",
    year: "2023",
    set: "Full set",
    caseSize: "39 mm",
    material: "Stainless steel",
    status: "Available",
    tone: "onyx",
    featured: true,
  },
  {
    slug: "hublot-classic-fusion-511-nx",
    brand: "Hublot",
    model: "Classic Fusion",
    reference: "511.NX.1171.RX",
    year: "2022",
    set: "Watch and box",
    caseSize: "45 mm",
    material: "Titanium",
    status: "Sourcing",
    tone: "champagne",
    featured: true,
  },
  {
    slug: "patek-philippe-nautilus-5711-1a",
    brand: "Patek Philippe",
    model: "Nautilus",
    reference: "5711/1A-010",
    year: "2018",
    set: "Full set",
    caseSize: "40 mm",
    material: "Stainless steel",
    status: "Sourcing",
    tone: "navy",
  },
  {
    slug: "audemars-piguet-royal-oak-chronograph-26331st",
    brand: "Audemars Piguet",
    model: "Royal Oak Chronograph",
    reference: "26331ST",
    year: "2019",
    set: "Full set",
    caseSize: "41 mm",
    material: "Stainless steel",
    status: "Sourcing",
    tone: "burgundy",
  },
];

export const brands = [
  "All watches",
  "Rolex",
  "Patek Philippe",
  "Audemars Piguet",
  "Tudor",
  "Hublot",
] as const;
