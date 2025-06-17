import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Líška", desc: "3D líška pre deti.", price: "13€", image: "/images/placeholder.png" },
  { id: 2, name: "Zajko", desc: "Roztomilý zajac z 3D tlače.", price: "11€", image: "/images/placeholder.png" },
  { id: 3, name: "Medveď", desc: "Malý hnedý medveď.", price: "15€", image: "/images/placeholder.png" },
  { id: 4, name: "Korytnačka", desc: "Farebná korytnačka.", price: "12€", image: "/images/placeholder.png" },
  { id: 5, name: "Mačička", desc: "Sivá mačička z 3D tlače.", price: "10€", image: "/images/placeholder.png" },
  { id: 6, name: "Sova", desc: "Múdra sova na poličku.", price: "14€", image: "/images/placeholder.png" },
  { id: 7, name: "Psík", desc: "Malý psík na hranie.", price: "13€", image: "/images/placeholder.png" },
  { id: 8, name: "Sloník", desc: "3D sloník pre radosť.", price: "16€", image: "/images/placeholder.png" },
];

export default function ZvieratkaPage() {
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
      <h1 className="text-3xl font-bold text-blue-800 mb-8 drop-shadow-lg">Zvieratká</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
