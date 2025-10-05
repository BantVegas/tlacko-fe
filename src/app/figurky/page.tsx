// src/app/figurky/page.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";
import { fbUrl } from "@/lib/img";
import TekvickovaFigurka from "@/boxes/box-tekvickova-figurka";


export default function FigurkyPage() {
  const products = [
    TekvickovaFigurka,
   // ⬅️ zobrazí sa ako druhá kartička
  ];

  return (
    <div
      className="min-h-screen pt-32 px-6"
      style={{
        backgroundImage: `url('${fbUrl("/images/hero.png")}')`,
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



