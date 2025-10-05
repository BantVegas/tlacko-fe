// src/app/figurky/ProductDetail.tsx
import React, { useMemo, useState } from "react";
import { useParams, useLocation, Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";

type DetailPayload = {
  slug: string;
  title: string;
  description?: string;
  price?: string;   // napr. "€39,60"
  images: string[]; // napr. ["/images/figurka-174.jpg", ...]
};

// "€39,60" -> 39.60
const parsePrice = (s?: string): number =>
  parseFloat((s || "0").replace(/[^\d,.-]/g, "").replace(",", "."));

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation() as { state?: { product?: DetailPayload } };
  const product = location.state?.product;

  const { add } = useCart();

  if (!product) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-20">
        <p className="text-red-500 font-semibold">Produkt sa nenašiel.</p>
        <Link to="/app/figurky" className="text-indigo-500 underline mt-2 inline-block">
          Naspäť na figúrky
        </Link>
      </main>
    );
  }

  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);

  const images = useMemo(
    () => (product.images?.length ? product.images : ["/images/placeholder.png"]),
    [product.images]
  );
  const primary = images[Math.min(active, images.length - 1)];
  const numericPrice = parsePrice(product.price);

  const cartItem = {
    id: product.slug || slug || product.title,
    name: product.title,
    price: numericPrice,
    image: images[0],
  };

  const handleAdd = () => add(cartItem, qty);
  const handleBuyNow = () => {
    add(cartItem, qty);
    navigate("/cart");
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b1324] via-[#0c1a33] to-[#0b1324] text-slate-100">
      {/* breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-6">
        <nav className="text-sm text-slate-400">
          <Link to="/app/figurky" className="hover:text-slate-200 hover:underline">Figúrky</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-200">{product.title}</span>
        </nav>
      </div>

      {/* obsah */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="grid grid-cols-12 gap-10 items-start">
          {/* ĽAVO – galéria + upozornenia */}
          <div className="col-span-12 lg:col-span-6">
            <div className="rounded-3xl ring-1 ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] bg-[#0b152a]">
              <div className="h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-3xl">
                <img
                  src={primary}
                  alt={`${product.title} – foto ${active + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                {images.map((src, i) => (
                  <button
                    key={src + i}
                    onClick={() => setActive(i)}
                    className={`h-20 w-20 flex-none rounded-2xl overflow-hidden ring-2 transition ${
                      i === active
                        ? "ring-indigo-400 ring-offset-2 ring-offset-[#0c1a33]"
                        : "ring-white/10 hover:ring-white/25"
                    }`}
                    type="button"
                    aria-label={`Zobraziť obrázok ${i + 1}`}
                  >
                    <img src={src} alt={`${product.title} – náhľad ${i + 1}`} className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Bezpečnostné upozornenia (ľavý stĺpec) */}
            <div className="mt-6 rounded-2xl border border-amber-400/40 bg-amber-400/10 p-5 text-amber-100">
              <p className="font-bold tracking-wide flex items-center gap-2">
                <span className="inline-block text-xl">⚠️</span>
                Bezpečnostné upozornenia
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-sm leading-relaxed">
                <li>Obsahuje drobné časti – <span className="font-semibold">riziko prehltnutia alebo vdýchnutia</span>.</li>
                <li><span className="font-semibold">Nevhodné pre deti do 3 rokov</span> (choking hazard).</li>
                <li>Používajte pod dohľadom dospelej osoby. Nenechávajte dieťa s výrobkom bez dozoru.</li>
                <li>Nekúsajte a nevkladajte do úst. Výrobok nie je určený na kontakt s potravinami.</li>
                <li>Môžu sa vyskytnúť tvrdé hrany alebo tenké, pružné časti – hrozí <span className="font-semibold">poranenie</span>.</li>
                <li>Materiál PLA sa môže pri vyšších teplotách zdeformovať – <span className="font-semibold">nevystavujte teplu</span>.</li>
                <li>Držte mimo zdrojov ohňa a vysokých teplôt. Produkt je horľavý.</li>
                <li>Čistite jemne vlhkou handričkou, bez agresívnych chemikálií a rozpúšťadiel.</li>
                <li>Pri poškodení výrobok prestaňte používať a zlikvidujte.</li>
                <li>Farby a drobné detaily sa môžu kus od kusa líšiť.</li>
              </ul>
            </div>
          </div>

          {/* PRAVO – text + CTA + (menší) právny box */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              {product.title}
            </h1>

            {product.price && (
              <div className="mt-4">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-2 text-white font-semibold shadow-lg">
                  {product.price}
                </span>
              </div>
            )}

            {product.description && (
              <div className="mt-6 max-w-prose leading-relaxed text-slate-200/90 whitespace-pre-line">
                {product.description}
              </div>
            )}

            <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/20">
                <button
                  type="button"
                  className="px-4 py-2 hover:bg-white/10"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Znížiť množstvo"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  className="w-16 bg-transparent text-center outline-none py-2"
                />
                <button
                  type="button"
                  className="px-4 py-2 hover:bg-white/10"
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Zvýšiť množstvo"
                >
                  +
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:ml-auto">
                <button
                  type="button"
                  onClick={handleAdd}
                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 shadow-lg shadow-indigo-900/30 transition"
                >
                  Pridať do košíka
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3 shadow-lg shadow-emerald-900/30 transition"
                >
                  Kúpiť teraz
                </button>
              </div>
            </div>

            <div className="mt-8">
              <Link to="/app/figurky" className="text-indigo-300 hover:text-indigo-200 underline underline-offset-4">
                ← Naspäť na Figúrky
              </Link>
            </div>

            {/* 🔸 PRÁVNY DISKLAJMER – menší box vpravo */}
            <div className="mt-8 max-w-md rounded-lg border border-white/15 bg-white/5 p-4">
              <h3 className="text-white/80 font-semibold mb-1 text-sm">Právne upozornenie</h3>
              <p className="text-xs leading-relaxed text-white/70">
                Tieto 3D tlačené hračky neboli predmetom hodnotenia a schválenia príslušného kontrolného orgánu
                v zmysle platných právnych predpisov o bezpečnosti hračiek. Kupujúci preberá plnú zodpovednosť
                za akékoľvek riziká spojené s používaním týchto hračiek, vrátane akýchkoľvek škôd alebo zranení,
                ktoré by mohli vzniknúť v súvislosti s ich použitím.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}







