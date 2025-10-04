// src/app/figurky/page.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";

// ⬇️ import súboru s diakritikou v ceste
import TekvickovaFigurka from "@/boxes/box-tekvičková-figúrka";

export default function FigurkyPage() {
  const products = [
    TekvickovaFigurka,
    // ...pridáš ďalšie boxy rovnakým spôsobom
  ];

  return (
    <div
      className="min-h-screen pt-32 px-6"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h1 className="text-3xl font-bold text-blue-800 mb-8 drop-shadow-lg">Figúrky</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

