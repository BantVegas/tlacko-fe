import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/components/CartContext";

const PRODUCT = {
  id: "froggy-fun",
  name: "Froggy Fun Buddy",
  price: 0.50, // číslo v EUR
  image: "/images/froggy_fun.jpg",
};

function eur(n: number) {
  return n.toFixed(2) + " €";
}

export default function FroggyFunPage() {
  const { add } = useCart();
  const nav = useNavigate();
  const [isBuying, setIsBuying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleAddToCart() {
    add(
      { id: PRODUCT.id, name: PRODUCT.name, price: PRODUCT.price, image: PRODUCT.image },
      1
    );
  }

  async function handleBuyNow() {
    try {
      setIsBuying(true);
      setError(null);
      handleAddToCart();
      nav("/cart");
    } catch (e: any) {
      setError(e?.message || "Ups, niečo sa pokazilo.");
    } finally {
      setIsBuying(false);
    }
  }

  return (
    <div
      className="min-h-screen pt-24 pb-16 px-6"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between">
          <Link to="/app/zvieratka" className="text-blue-700 hover:underline">
            ← Späť na Zvieratká
          </Link>
          <div className="text-2xl font-semibold text-blue-900">
            {eur(PRODUCT.price)}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <img
              src={PRODUCT.image}
              alt={PRODUCT.name}
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-blue-800">{PRODUCT.name}</h1>

            <p className="mt-3 text-gray-800">
              Predstavujeme <strong>Froggy Fun Buddy</strong> – rozkošnú 3D tlačenú žabu, ktorá
              prináša radosť, kreativitu a smiech do každej hry! Táto žiarivo
              zeleno-červená spoločníčka nie je len obyčajná hračka – je to priateľ,
              ktorý podnecuje fantáziu detí aj dospelých. Predstavte si, ako sa vaša rodina
              zapája do nápaditých dobrodružstiev – od skákania po džungli až po leňošenie pri jazierku.
            </p>

            <h2 className="mt-4 text-xl font-semibold text-blue-900">Prečo si ju zamilujete:</h2>
            <ul className="mt-2 list-disc pl-6 text-gray-800 space-y-1">
              <li>Netoxické, ekologické materiály – bezpečné pre všetky veky.</li>
              <li>Odolná a ľahká – ideálna na cesty.</li>
              <li>3D textúra – hmatový zážitok pre rozvoj zmyslov.</li>
              <li>Podporuje jemnú motoriku a tvorivosť.</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleAddToCart}
                className="px-5 py-3 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700"
                title="Pridať do košíka"
              >
                Pridať do košíka
              </button>

              <button
                onClick={handleBuyNow}
                disabled={isBuying}
                className="px-5 py-3 rounded-xl bg-green-600 text-white shadow hover:bg-green-700 disabled:opacity-50"
                title="Prejsť do košíka"
              >
                {isBuying ? "Prebieha..." : "Kúpiť teraz"}
              </button>

              <Link
                to="/cart"
                className="px-5 py-3 rounded-xl bg-emerald-600 text-white shadow hover:bg-emerald-700"
              >
                Košík
              </Link>
            </div>

            {error && (
              <div className="mt-4 text-red-700 bg-red-50 border border-red-200 p-3 rounded">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


