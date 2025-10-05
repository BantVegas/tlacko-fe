// src/app/zvieratka/page.tsx
import React from "react";
import ProductCard from "@/components/ProductCard"; // skontroluj, že táto cesta naozaj smeruje na súbor s tvojou novou verziou

type SimpleProduct = {
  id: number | string;
  name: string;
  desc?: string;
  price?: string;
  image: string;
  image2?: string;
  image3?: string;
};

const PRODUCTS: SimpleProduct[] = [
  { id: 1, name: "Zajačik", desc: "Roztomilý zajačik", price: "€9.90", image: "/images/figurka-1.jpg" },
  { id: 2, name: "Líška", desc: "Malá líštička",   price: "€11.90", image: "/images/figurka-2.jpg" },
  { id: 3, name: "Macko",  desc: "Macko do poličky", price: "€12.90", image: "/images/figurka-3.jpg" },
];

export default function ZvieratkaPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800">Zvieratká</h1>
        <p className="text-gray-600 mt-2">
          Roztomilé 3D tlačené zvieratká. Vyber si svojho parťáka! 🐾
        </p>
      </header>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PRODUCTS.map((p) => (
            // voláme len s povinným propom `product` (showPrice/showBuy majú defaulty v komponente)
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </main>
  );
}


