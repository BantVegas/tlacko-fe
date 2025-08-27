// src/app/cart/page.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "@/components/CartContext";

function eur(n: number) {
  return n.toFixed(2) + " €";
}

export default function CartPage() {
  const { state, totalPrice, totalQty, increment, decrement, remove, clear } = useCart();
  const items = state.items;
  const [submitting, setSubmitting] = React.useState(false);

  async function handleCheckout() {
    if (!items.length) return;
    setSubmitting(true);
    try {
      const refId = `ORD-${Date.now()}`; // tvoje interné ID objednávky

      const res = await fetch("/api/comgate-create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          priceEur: Number(totalPrice.toFixed(2)), // v EUR
          label: "Objednavka",
          refId,
          // voliteľne: email, fullName
        }),
      });

      const data = await res.json();
      if (!res.ok || !data?.ok || !data?.redirect) {
        alert("Vytvorenie platby zlyhalo.");
        console.error(data);
        return;
      }

      window.location.href = data.redirect; // presmerovanie na Comgate
    } catch (e) {
      console.error(e);
      alert("Chyba pri vytváraní platby.");
    } finally {
      setSubmitting(false);
    }
  }

  const empty = items.length === 0;

  return (
    <div className="min-h-screen pt-28 pb-16 px-6 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Košík</h1>

        {empty ? (
          <div className="bg-white rounded-xl shadow p-6">
            <p>Košík je prázdny.</p>
            <Link to="/" className="inline-block mt-4 px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
              Pokračovať v nákupe
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {/* Položky */}
            <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
              <ul className="divide-y">
                {items.map((it) => (
                  <li key={it.id} className="py-4 flex gap-4 items-center">
                    <img src={it.image} alt={it.name} className="w-20 h-20 object-cover rounded-lg border" />
                    <div className="flex-1">
                      <div className="font-semibold">{it.name}</div>
                      <div className="text-sm text-gray-500">{eur(it.price)}</div>

                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => decrement(it.id)}
                          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                          aria-label="Znížiť množstvo"
                        >
                          −
                        </button>
                        <span className="w-10 text-center">{it.qty}</span>
                        <button
                          onClick={() => increment(it.id)}
                          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                          aria-label="Zvýšiť množstvo"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold">{eur(it.price * it.qty)}</div>
                      <button onClick={() => remove(it.id)} className="text-red-600 hover:underline text-sm mt-1">
                        Odstrániť
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <button onClick={clear} className="text-gray-600 hover:underline text-sm">
                  Vyprázdniť košík
                </button>
              </div>
            </div>

            {/* Súhrn */}
            <aside className="bg-white rounded-xl shadow p-5 h-fit">
              <div className="flex justify-between">
                <span>Položky</span>
                <span>{totalQty}</span>
              </div>
              <div className="flex justify-between mt-1">
                <span>Medzisúčet</span>
                <span>{eur(totalPrice)}</span>
              </div>
              <div className="text-sm text-gray-500 mt-2">Doručenie: 2–4 dni (Slovensko)</div>

              <Link
                to="/"
                className="mt-4 inline-block w-full text-center px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200"
              >
                Pokračovať v nákupe
              </Link>

              <button
                onClick={handleCheckout}
                disabled={submitting}
                className="mt-3 w-full px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
              >
                {submitting ? "Prebieha..." : "Zaplať Comgate"}
              </button>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
