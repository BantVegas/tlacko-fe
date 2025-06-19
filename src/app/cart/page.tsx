import React from "react";
import { useCart } from "@/components/CartContext";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { state, dispatch } = useCart();
  const items = state.items;

  const handleRemove = (id: string | number) => {
    dispatch({ type: "REMOVE", id: String(id) });
  };

  const handleIncrement = (id: string | number) => {
    dispatch({ type: "INCREMENT", id: String(id) });
  };

  const handleDecrement = (id: string | number) => {
    dispatch({ type: "DECREMENT", id: String(id) });
  };

  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <div className="max-w-3xl mx-auto min-h-[60vh] bg-white/80 rounded-2xl shadow-lg p-6 mt-16 mb-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-800">Košík</h1>
      {items.length === 0 ? (
        <div className="text-center text-gray-500 py-24">
          Košík je prázdny.<br />
          <Link
            to="/"
            className="text-blue-700 font-semibold underline hover:text-blue-900"
          >
            Pokračovať v nákupe
          </Link>
        </div>
      ) : (
        <>
          <div className="divide-y">
            {items.map((item) => (
              <div key={item.id} className="flex items-center py-4 gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg object-contain bg-gray-100"
                />
                <div className="flex-1">
                  <div className="font-semibold text-blue-900">{item.name}</div>
                  <div className="text-gray-600 text-sm">{item.price.toFixed(2)} € / ks</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.qty <= 1}
                  >
                    -
                  </button>
                  <span className="font-bold min-w-[2ch] text-center">{item.qty}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <div className="font-semibold w-16 text-right">
                  {(item.qty * item.price).toFixed(2)} €
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-2 text-red-600 hover:text-red-800 text-sm"
                  title="Odstrániť"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
          {/* Súčet */}
          <div className="flex justify-end mt-6 text-xl font-bold text-blue-800">
            Celkom: {total.toFixed(2)} €
          </div>
          {/* Pokračovať na platbu */}
          <div className="flex justify-end mt-8">
            <button
              className="bg-blue-700 text-white px-6 py-3 rounded-lg font-bold text-lg shadow hover:bg-blue-900 transition"
              // onClick={handleCheckout} // Napojíš Stripe neskôr
            >
              Pokračovať na platbu
            </button>
          </div>
        </>
      )}
    </div>
  );
}
