// src/app/dekoracie/page.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";
import { fbUrl } from "@/lib/img";

// Môžeš nechať vlastné dáta; tu len príklad
const PRODUCTS = [
  {
    id: 1,
    name: "Spooky Buddy Skeleton",
    image: "/images/figurka-1.jpg",
  },
  // ...
];

export default function DekoraciePage() {
  // hero z Firebase Storage (premenná VITE_IMG_BASE musí byť nastavená vo Verceli)
  const heroUrl = fbUrl("images/hero.png");

  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundImage: `url("${heroUrl}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* tmavý overlay MUSÍ byť nad pozadím, preto bez záporného z-indexu */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* obsah ide nad overlay */}
      <section className="relative z-10 container mx-auto px-4 pt-28 pb-12">
        <h1 className="text-4xl font-bold text-white drop-shadow mb-6">
          Dekorácie
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
