import React from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  { id: 1, name: "Superhrdina", desc: "3D figúrka superhrdinu.", price: "15€", image: "/images/placeholder.png" },
  { id: 2, name: "Rytier", desc: "Historická figúrka rytiera.", price: "14€", image: "/images/placeholder.png" },
  { id: 3, name: "Princezná", desc: "Krásna figúrka princeznej.", price: "13€", image: "/images/placeholder.png" },
  { id: 4, name: "Dinosaurus", desc: "Figúrka dinosaura.", price: "12€", image: "/images/placeholder.png" },
  { id: 5, name: "Robot", desc: "Robot na hranie i zbierku.", price: "17€", image: "/images/placeholder.png" },
  { id: 6, name: "Pirát", desc: "Dobrodružný pirát.", price: "13€", image: "/images/placeholder.png" },
  { id: 7, name: "Vlkodlak", desc: "Fantasy figúrka vlkodlaka.", price: "16€", image: "/images/placeholder.png" },
  { id: 8, name: "Víla", desc: "3D figúrka víly.", price: "12€", image: "/images/placeholder.png" },
];

export default function FigurkyPage() {
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
      <h1 className="text-3xl font-bold text-blue-800 mb-8 drop-shadow-lg">Figúrky</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}
