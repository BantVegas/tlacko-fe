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

import Success from "./app/checkout/Success";
import Cancel from "./app/checkout/Cancel";
import Pending from "./app/checkout/Pending";

import Blog from "@/components/blog";
import Onas from "@/components/onas";

import ProductDetail from "./app/figurky/ProductDetail";

/* ---------- Helper pre inde v appke (ponechávam) ---------- */
const ENV_BASE = import.meta.env.VITE_IMG_BASE ?? "";
const DEFAULT_BASE =
  "https://firebasestorage.googleapis.com/v0/b/tlacko-fe.firebasestorage.app/o";
const BASE_IMG = ENV_BASE || DEFAULT_BASE;
function fbUrl(p?: string): string {
  if (!p) return "";
  if (/^https?:\/\//i.test(p)) return p;
  const path = p.replace(/^\//, "");
  return `${BASE_IMG}/${encodeURIComponent(path)}?alt=media`;
}
/* ----------------------------------------------------------- */

function HomeContent() {
  const categories = [
    { title: "Zvieratko", desc: "Roztomilé 3D hračky.", icon: "🦊", path: "/app/zvieratka" },
    { title: "Antistres", desc: "Pomôcky na oddych.", icon: "🧘", path: "/app/antistres" },
    { title: "Autíčka",  desc: "Originálne modely.", icon: "🚗", path: "/app/auticka" },
    { title: "Dekorácie",desc: "Dekor a doplnky.",  icon: "🖼️", path: "/app/dekoracie" },
    { title: "Figúrky",  desc: "Do zbierky a na hranie.", icon: "🧑‍🎤", path: "/app/figurky" },
  ];

  // mierne menšia karta, ale stále výrazná; neon kraje + interakcia ostávajú
  const cardCls =
    "edge-neon edge-neon--green edge-neon-animate card-interactive " +
    "rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-slate-200 " +
    "shadow-[0_10px_30px_rgba(0,0,0,0.30)] " +
    "flex flex-col items-center justify-center text-center " +
    "h-[150px] md:h-[156px] px-6";

  return (
    <div
      className="relative text-slate-200"
      // nechávam o pár px viac rezervy (nav ~64, footer ~56–60)
      style={{ height: "calc(100dvh - 68px - 60px)" }}
    >
      {/* pozadie */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background: "linear-gradient(160deg,#0B1020 0%, #0F1A2B 45%, #14233B 100%)",
        }}
      />

      {/* obsah: kompaktnejší hero + flex wrap grid, extra spodná rezerva pre neon */}
      <div className="h-full mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 grid grid-rows-[auto,1fr] gap-4 md:gap-6 pb-6">
        {/* HERO – menej zvislého priestoru */}
        <header className="pt-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Objav svet <span className="text-indigo-300">3D tlače</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300/90 max-w-2xl mx-auto">
            Figúrky, zvieratká, autíčka a dekorácie. Upozornenia sú priamo pri produktoch.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              to="/app/zvieratka"
              className="rounded-xl px-4 py-2.5 font-semibold border border-white/15 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:border-white/25 transition"
            >
              Prezrieť kolekciu
            </Link>
            <Link
              to="/onas"
              className="rounded-xl px-4 py-2.5 font-semibold border border-white/10 hover:border-white/25 hover:bg-white/5 transition"
            >
              O značke
            </Link>
          </div>
        </header>

        {/* KARTY – menšie medzery a šírky, posledný riadok centrovaný; spodná medzera drží neon nad footerom */}
        <section className="self-stretch">
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {categories.map((c) => (
              <Link
                key={c.title}
                to={c.path}
                className={`${cardCls} w-full sm:w-[320px] md:w-[340px] lg:w-[360px]`}
              >
                <div className="text-3xl mb-1">{c.icon}</div>
                <div className="text-white font-semibold">{c.title}</div>
                <div className="text-slate-300 text-sm">{c.desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </div>
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
          <Route path="/app/zvieratka" element={<ZvieratkaPage />} />
          <Route path="/app/zvieratka/froggy-fun" element={<FroggyFunPage />} />

          {/* Detail produktu */}
          <Route path="/app/figurky/:slug" element={<ProductDetail />} />

          {/* Statické */}
          <Route path="/gdpr" element={<Gdpr />} />
          <Route path="/podmienky" element={<Podmienky />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/onas" element={<Onas />} />

          {/* Košík */}
          <Route path="/cart" element={<CartPage />} />

          {/* Checkout */}
          <Route path="/checkout/success" element={<Success />} />
          <Route path="/checkout/cancel" element={<Cancel />} />
          <Route path="/checkout/pending" element={<Pending />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}






