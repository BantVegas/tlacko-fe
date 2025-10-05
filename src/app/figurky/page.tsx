import React from "react";
import ProductCard from "@/components/ProductCard";
import { fbUrl } from "@/lib/img";
import TekvickovaFigurka from "@/boxes/box-tekvickova-figurka";

export default function FigurkyPage() {
  const products = [TekvickovaFigurka];
  const heroPng = fbUrl("/images/hero.png");
  const heroJpg = fbUrl("/images/hero.jpg"); // fallback, ak by PNG neexistoval

  return (
    <main
      className="min-h-screen"
      style={{
        // Gradient (stmavenie) + hero PNG + hero JPG fallback.
        backgroundImage: `linear-gradient(rgba(0,0,0,.65), rgba(0,0,0,.65)), url('${heroPng}'), url('${heroJpg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ak by robilo problémy, pokojne zmaž
      }}
    >
      <section className="container mx-auto px-4 pt-28 pb-12">
        <h1 className="text-4xl font-extrabold text-white drop-shadow mb-8">
          Figúrky
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}




