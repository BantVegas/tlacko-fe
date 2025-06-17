import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Antistres gulička", desc: "Na kľúčiky, do ruky, na stôl.", price: "6€", image: "/images/placeholder.png" },
  { id: 2, name: "Fidget spinner", desc: "Fidget spinner pre každý deň.", price: "8€", image: "/images/placeholder.png" },
  { id: 3, name: "Mačkací kváder", desc: "3D antistresová kocka.", price: "7€", image: "/images/placeholder.png" },
  { id: 4, name: "Masážna hviezda", desc: "Na relax a pohodu.", price: "9€", image: "/images/placeholder.png" },
  { id: 5, name: "Stláčací had", desc: "Ohybný stláčací had.", price: "7€", image: "/images/placeholder.png" },
  { id: 6, name: "Prstová pružina", desc: "Na hranie i relax.", price: "5€", image: "/images/placeholder.png" },
  { id: 7, name: "Klasická loptička", desc: "Antistres loptička.", price: "6€", image: "/images/placeholder.png" },
  { id: 8, name: "Tlačidlo reset", desc: "Stlač a uvoľni sa.", price: "8€", image: "/images/placeholder.png" },
];

export default function AntistresPage() {
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
      <h1 className="text-3xl font-bold text-blue-800 mb-8 drop-shadow-lg">Antistres</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
