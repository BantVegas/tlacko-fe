// src/app/dekoracie/page.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";
import { fbUrl } from "@/lib/img";
import SpookyBuddy from "@/boxes/box-spooky-buddy-skeleton"; // ⬅️ pridaj

const PRODUCTS = [
  SpookyBuddy,
  // ...ďalšie dekorácie
];

export default function DekoraciePage() {
  const heroUrl = fbUrl("/images/hero.png");
  return (
    <main
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: `url('${heroUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <section className="container mx-auto px-4 pt-6 pb-10">
        <h1 className="text-4xl font-bold text-white drop-shadow mb-6">Dekorácie</h1>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </section>
    </main>
  );
}


