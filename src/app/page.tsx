import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "@/components/CategoryCard";

const categories = [
  { name: "Figúrky", href: "/figurky", icon: "🦸" },
  { name: "Zvieratká", href: "/zvieratka", icon: "🦊" },
  { name: "Autíčka", href: "/auticka", icon: "🚗" },
  { name: "Dekorácie", href: "/dekoracie", icon: "🖼️" },
  { name: "Antistresové hračky", href: "/antistresove", icon: "🎲" },
];

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <Link key={cat.name} to={cat.href} className="block">
          <CategoryCard icon={cat.icon} name={cat.name} />
        </Link>
      ))}
    </section>
  );
}

