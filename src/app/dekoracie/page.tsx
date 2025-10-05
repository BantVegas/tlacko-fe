import React from "react";
import ProductCard from "@/components/ProductCard";
import { fbUrl } from "@/lib/img";

const PRODUCTS = [
  { id: 1, name: "Spooky Buddy Skeleton", image: "/images/figurka-174.jpg" },
  // doplň ďalšie dekorácie...
];

export default function DekoraciePage() {
  const heroUrl = fbUrl("/images/hero.png");

  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundImage: `url('${heroUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/65 -z-10" />

      <section className="container mx-auto px-4 pt-28 pb-12">
        <h1 className="text-4xl font-extrabold text-white drop-shadow mb-8">
          Dekorácie
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}



