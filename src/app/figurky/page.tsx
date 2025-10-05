// src/app/figurky/page.tsx
import React from "react";
import ProductCard from "@/components/ProductCard";
import { fbUrl } from "@/lib/img";
import TekvickovaFigurka from "@/boxes/box-tekvickova-figurka";

export default function FigurkyPage() {
  const products = [TekvickovaFigurka];
  const heroUrl = fbUrl("images/hero.png"); // bez úvodného "/" – fbUrl ho pridá správne

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
      {/* stmavovací overlay – nad pozadím */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* obsah nad overlayom */}
      <section className="relative z-10 px-6 pt-28 pb-12">
        <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-8">
          Figúrky
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}


