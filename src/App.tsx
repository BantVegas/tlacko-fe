import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CartProvider } from "@/components/CartContext";

import AntistresPage from "./app/antistres/page";
import AutickaPage from "./app/auticka/page";
import DekoraciePage from "./app/dekoracie/page";
import FigurkyPage from "./app/figurky/page";
import ZvieratkaPage from "./app/zvieratka/page";
import FroggyFunPage from "./app/zvieratka/froggy-fun/page";

import Gdpr from "@/components/Gdpr";
import Podmienky from "@/components/Podmienky";
import Kontakt from "@/components/Kontakt";
import CartPage from "./app/cart/page";

// ⬇️ Checkout stránky
import Success from "./app/checkout/Success";
import Cancel from "./app/checkout/Cancel";
import Pending from "./app/checkout/Pending";

// ⬇️ Blog a O nás
import Blog from "@/components/blog";
import Onas from "@/components/onas";

// ⬇️ Detail produktu (figúrky)
import ProductDetail from "./app/figurky/ProductDetail";

function HomeContent() {
  const firstRow = [
    { title: "Zvieratko", desc: "Roztomilé 3D hračky pre najmenších.", icon: "🦊", path: "/app/zvieratka" },
    { title: "Antistres", desc: "Pomôcky na odbúranie stresu.", icon: "🧘", path: "/app/antistres" },
    { title: "Autíčka", desc: "Originálne autíčka podľa výberu.", icon: "🚗", path: "/app/auticka" },
  ];
  const secondRow = [
    { title: "Dekorácie", desc: "Vytlačené dekorácie do detskej izby.", icon: "🖼️", path: "/app/dekoracie" },
    { title: "Figúrky", desc: "Hrdinovia do zbierky aj na hranie.", icon: "🦸", path: "/app/figurky" },
  ];

  return (
    <div
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <section className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-4">
          3D tlačené hračky
        </h1>
        <p className="text-2xl md:text-3xl text-white drop-shadow mb-2">
          Objavte svet 3D tlače a unikátne hračky pre každého!
        </p>
      </section>

      <section className="relative z-10 py-8 px-2 md:px-0">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {firstRow.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col items-center min-h-[230px] transition hover:scale-105 hover:bg-white/70 cursor-pointer no-underline"
              style={{ boxShadow: "0 8px 32px 0 rgba(31,38,135,0.17)" }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h3>
              <p className="text-gray-700 text-center mb-4">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-4 px-2 md:px-0">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {secondRow.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="backdrop-blur-xl bg-white/50 border border-white/30 rounded-2xl shadow-xl p-6 flex flex-col items-center min-h-[230px] transition hover:scale-105 hover:bg-white/70 cursor-pointer no-underline"
              style={{ boxShadow: "0 8px 32px 0 rgba(31,38,135,0.17)" }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-xl font-bold text-blue-800 mb-1">{item.title}</h3>
              <p className="text-gray-700 text-center mb-4">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex-grow" />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomeContent />} />

          {/* Kategórie */}
          <Route path="/app/antistres" element={<AntistresPage />} />
          <Route path="/app/auticka" element={<AutickaPage />} />
          <Route path="/app/dekoracie" element={<DekoraciePage />} />
          <Route path="/app/figurky" element={<FigurkyPage />} />

          {/* DETAIL PRODUKTU (figúrky) */}
          <Route path="/app/figurky/:slug" element={<ProductDetail />} />
          <Route path="/app/zvieratka" element={<ZvieratkaPage />} />
          <Route path="/app/zvieratka/froggy-fun" element={<FroggyFunPage />} />

          {/* Statické stránky */}
          <Route path="/gdpr" element={<Gdpr />} />
          <Route path="/podmienky" element={<Podmienky />} />
          <Route path="/kontakt" element={<Kontakt />} />

          {/* Blog & O nás */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/onas" element={<Onas />} />

          {/* Košík */}
          <Route path="/cart" element={<CartPage />} />

          {/* Checkout výsledky */}
          <Route path="/checkout/success" element={<Success />} />
          <Route path="/checkout/cancel" element={<Cancel />} />
          <Route path="/checkout/pending" element={<Pending />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}



