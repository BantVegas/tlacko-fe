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
    <div className="relative">
      {/* spotlight glow v hero časti */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-3xl opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(108,109,255,0.45) 0%, rgba(26,167,242,0.22) 35%, transparent 60%)",
          }}
        />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow">
            Tmavý svet <span className="text-neon-400">3D tlače</span>, hračky čo žiaria 🌌
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 max-w-2xl mx-auto">
            Moderné figúrky, zvieratká, autíčka a dekorácie vyrobené s láskou na 3D tlačiarni.
          </p>

          <div className="mt-7 flex items-center justify-center gap-4">
            <Link to="/zvieratka" className="glass hover-glow px-5 py-3 rounded-2xl font-semibold">
              Prezrieť kolekciu
            </Link>
            <Link
              to="/o-nas"
              className="px-5 py-3 rounded-2xl font-semibold border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
            >
              O nás
            </Link>
          </div>
        </div>
      </section>

      {/* GRID KATEGÓRIÍ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 md:pb-20">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat) => (
            <Link key={cat.name} to={cat.href} className="block group glass hover-glow rounded-3xl p-1">
              <div className="rounded-[22px] overflow-hidden">
                {/* CategoryCard ostáva tvoj komponent; vonkajší 'glass' pridáva tmavý rám a glow */}
                <CategoryCard icon={cat.icon} name={cat.name} />
              </div>
            </Link>
          ))}
        </div>

        {/* Info banner */}
        <div className="mt-10 md:mt-14 glass rounded-3xl p-6 md:p-8 text-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h4 className="text-lg md:text-xl font-semibold">
                Bezpečné materiály • Lokálna výroba • Personalizácia
              </h4>
              <p className="text-slate-400">
                PLA filament, hladké hrany a možnosť dorobiť meno či farbu na želanie.
              </p>
            </div>
            <Link to="/kontakt" className="glass hover-glow px-4 py-2 rounded-xl font-medium">
              Napísať požiadavku
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


