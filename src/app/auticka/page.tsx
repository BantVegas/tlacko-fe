import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Formula 1", desc: "3D model formula autíčka.", price: "22€", image: "/images/placeholder.png" },
  { id: 2, name: "Policajné autíčko", desc: "Modré policajné auto.", price: "20€", image: "/images/placeholder.png" },
  { id: 3, name: "Závodné auto", desc: "Pretekárske autíčko.", price: "18€", image: "/images/placeholder.png" },
  { id: 4, name: "Hasičské auto", desc: "Červené hasičské autíčko.", price: "19€", image: "/images/placeholder.png" },
  { id: 5, name: "Taxi", desc: "Žlté taxi auto.", price: "17€", image: "/images/placeholder.png" },
  { id: 6, name: "SUV", desc: "3D SUV pre každého.", price: "23€", image: "/images/placeholder.png" },
  { id: 7, name: "Mini cooper", desc: "Malé mestské autíčko.", price: "16€", image: "/images/placeholder.png" },
  { id: 8, name: "Monster truck", desc: "Obrovský monster truck.", price: "25€", image: "/images/placeholder.png" },
];

export default function AutickaPage() {
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
      <h1 className="text-3xl font-bold text-blue-800 mb-8 drop-shadow-lg">Autíčka</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
