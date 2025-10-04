// src/app/dekoracie/page.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";

// ⬇️ import tvojho boxu
import SpookyBuddy from "@/boxes/box-spooky-buddy-skeleton";

export default function DekoraciePage() {
  // sem patrí všetko, čo chceš mať v Dekoráciách
  const products = [
    SpookyBuddy,
    // …pridávaj ďalšie dekorácie
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
      <h1 className="text-3xl font-bold text-blue-800 mb-8 drop-shadow-lg">Dekorácie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
