// src/data/products.ts
export type Product = {
  id: string;
  slug: string;
  title: string;
  category: "figurky" | "zvieratka" | "auticka" | "dekoracie" | "antistres";
  price: number;
  description?: string;
  imageIds?: number[];
  images?: string[];
  alt?: string[];
  weight?: string;
  dimensions?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "auto-tekvickova-figurka",
    slug: "tekvickova-figurka",
    title: "tekvičková figúrka",
    category: "figurky",
    price: 28.30,
    description:
      "Rozkošná tekvičková figúrka – malý kúsok jesennej radosti! Ľahká, odolná, 3D tlač z bezpečných materiálov.",
    weight: "50 g",
    dimensions: "80.61 × 79.72 × 62 mm",
    imageIds: [1, 2, 3],
    alt: [
      "Tekvičková figúrka – predný pohľad",
      "Tekvičková figúrka – bočný pohľad",
      "Tekvičková figúrka – zadný/bočný pohľad",
    ],
  },
  {
    id: "auto-biela-macka",
    slug: "biela-macka",
    title: "Biela mačka",
    category: "figurky",
    price: 14.90,
    description: "Roztomilá biela mačka s veľkými očami. Ideálna do zbierky aj na hranie.",
    imageIds: [180, 181, 182],
    alt: [
      "Biela mačka – predný pohľad",
      "Biela mačka – šikmý pohľad",
      "Biela mačka – bočný pohľad",
    ],
  },
];
