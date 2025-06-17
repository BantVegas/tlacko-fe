import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Jednorožec", desc: "Farebná dekorácia na stenu.", price: "14€", image: "/images/placeholder.png" },
  { id: 2, name: "Srdce", desc: "3D srdiečko do izby.", price: "10€", image: "/images/placeholder.png" },
  { id: 3, name: "Kvietok", desc: "Kvetinová dekorácia.", price: "11€", image: "/images/placeholder.png" },
  { id: 4, name: "Hviezda", desc: "Svietiaca hviezdička.", price: "13€", image: "/images/placeholder.png" },
  { id: 5, name: "Motýľ", desc: "3D motýľ na poličku.", price: "12€", image: "/images/placeholder.png" },
  { id: 6, name: "Sloník", desc: "Roztomilý slon na poličku.", price: "15€", image: "/images/placeholder.png" },
  { id: 7, name: "Mesiac", desc: "Dekoračný mesiac.", price: "11€", image: "/images/placeholder.png" },
  { id: 8, name: "Slnečnica", desc: "Slnečnica z 3D tlače.", price: "13€", image: "/images/placeholder.png" },
];

export default function DekoraciePage() {
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
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
