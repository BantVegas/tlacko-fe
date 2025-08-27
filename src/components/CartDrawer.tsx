import React, { useCallback, useEffect } from "react";
import { useCart } from "@/components/CartContext";
import { Trash2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

type Props = { open: boolean; onClose: () => void };

function eur(n: number) {
  return n.toFixed(2) + " €";
}

export default function CartDrawer({ open, onClose }: Props) {
  const { state, dispatch } = useCart();
  const items = state.items;
  const nav = useNavigate();

  const handleRemove = (id: string | number) =>
    dispatch({ type: "REMOVE", id: String(id) });

  const handleIncrement = (id: string | number) =>
    dispatch({ type: "INCREMENT", id: String(id) });

  const handleDecrement = (id: string | number) =>
    dispatch({ type: "DECREMENT", id: String(id) });

  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);

  const handleGoToCheckout = () => {
    if (!items.length) {
      alert("Košík je prázdny.");
      return;
    }
    onClose?.();
    nav("/cart"); // presmerovanie na stránku košíka, kde máš tlačidlo Zaplať Comgate
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).dataset.backdrop === "true") onClose();
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    },
    [open, onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[199] bg-black/40"
          data-backdrop="true"
          onClick={handleBackdropClick}
        />
      )}

      {/* Drawer */}
      <div
        role="dialog"
        aria-label="Košík"
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

        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Košík</h2>

          {/* Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="text-gray-500 text-center py-32">
                Košík je prázdny.
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 border-b pb-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-contain bg-gray-100"
                      loading="lazy"
                    />

                    <div className="flex-1">
                      <Link
                        to="/cart"
                        onClick={onClose}
                        className="font-semibold text-blue-900 hover:underline"
                      >
                        {item.name}
                      </Link>
                      <div className="text-gray-600 text-sm">
                        {eur(item.price)} / ks
                      </div>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        disabled={item.qty <= 1}
                        className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-60"
                        aria-label="Znížiť počet"
                      >
                        –
                      </button>
                      <span className="font-bold w-7 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-gray-200 hover:bg-gray-300"
                        aria-label="Pridať"
                      >
                        +
                      </button>
                    </div>

                    {/* Line total */}
                    <div className="w-16 text-right font-semibold">
                      {eur(item.qty * item.price)}
                    </div>

                    {/* Remove */}
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
          </div>

          {/* Summary + CTA */}
          {items.length > 0 && (
            <>
              <div className="border-t pt-6 mt-6 flex justify-between items-center">
                <span className="font-bold text-lg">Spolu:</span>
                <span className="text-xl font-bold text-blue-800">
                  {eur(total)}
                </span>
              </div>

              <button
                className="w-full mt-6 bg-blue-700 text-white font-bold rounded-xl py-3 text-lg hover:bg-blue-900 transition"
                onClick={handleGoToCheckout}
              >
                Pokračovať na platbu
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
