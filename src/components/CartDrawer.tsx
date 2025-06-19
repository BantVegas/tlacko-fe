import React from "react";
import { useCart } from "@/components/CartContext";
import { Trash2 } from "lucide-react"; // alebo iná ikona koša

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
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
    <div
      className={`fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl z-[200] transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ maxWidth: "380px" }}
    >
      {/* Close button */}
      <button
        className="absolute top-3 right-4 text-2xl text-blue-800 font-bold"
        onClick={onClose}
        aria-label="Zavrieť košík"
      >
        ×
      </button>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-800 mb-6">Košík</h2>
        {items.length === 0 ? (
          <div className="text-gray-500 text-center py-32">Košík je prázdny.</div>
        ) : (
          <div className="flex flex-col gap-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b pb-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-contain bg-gray-100" />
                <div className="flex-1">
                  <div className="font-semibold text-blue-900">{item.name}</div>
                  <div className="text-gray-600 text-sm">
                    {item.price.toFixed(2)} € / ks
                  </div>
                </div>
                {/* Množstvo + a - */}
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.qty <= 1}
                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-60"
                    aria-label="Znížiť počet"
                  >
                    –
                  </button>
                  <span className="font-bold w-7 text-center">{item.qty}</span>
                  <button
                    onClick={() => handleIncrement(item.id)}
                    className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                    aria-label="Pridať"
                  >
                    +
                  </button>
                </div>
                {/* Celková cena pre túto položku */}
                <div className="w-16 text-right font-semibold">{(item.qty * item.price).toFixed(2)} €</div>
                {/* Smetiak na vymazanie celej položky */}
                <button
                  onClick={() => handleRemove(item.id)}
                  className="ml-2 text-red-600 hover:text-red-800"
                  aria-label="Odstrániť produkt"
                  title="Vymazať"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
        {/* Spolu suma a tlačidlo */}
        {items.length > 0 && (
          <>
            <div className="border-t pt-6 mt-6 flex justify-between items-center">
              <span className="font-bold text-lg">Spolu:</span>
              <span className="text-xl font-bold text-blue-800">{total.toFixed(2)}€</span>
            </div>
            <button
              className="w-full mt-6 bg-blue-700 text-white font-bold rounded-xl py-3 text-lg hover:bg-blue-900 transition"
              // onClick={handleCheckout}
            >
              Pokračovať na platbu
            </button>
          </>
        )}
      </div>
    </div>
  );
}
