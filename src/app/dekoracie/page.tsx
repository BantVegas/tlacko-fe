import React from "react";
import ProductCard from "@/components/ProductCard";
import { fbUrl } from "@/lib/img";
import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: 1, name: "Spooky Buddy Skeleton", image: "/images/figurka-174.jpg" },
  // doplň ďalšie dekorácie…
];

export default function DekoraciePage() {
  const heroUrl = fbUrl("/images/hero.png"); // ak by si neskôr chcel použiť

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* tmavé pozadie z hlavnej */}
      <div className="site-bg site-grid site-noise" />

      <section className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-10">
        {/* Breadcrumb + nadpis */}
        <div className="flex items-center justify-between gap-4">
          <nav className="text-sm text-slate-400">
            <Link to="/" className="hover:text-white transition">Domov</Link>
            <span className="mx-2 text-slate-500">/</span>
            <span className="text-slate-300">Dekorácie</span>
          </nav>
        </div>

        <header className="mt-3 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Kolekcia <span className="text-emerald-300">dekorácií</span>
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-40 rounded-full bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0" />
        </header>

        {/* GRID produktov – dark-glass + neon edge */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className="edge-neon edge-neon--green edge-neon-animate card-interactive rounded-2xl"
            >
              <div className="glass rounded-2xl overflow-hidden p-3">
                <ProductCard product={p} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}



