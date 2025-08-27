import React from "react";
import { useCart } from "@/components/CartContext"; // uprav cestu ak máš inú

// ===== Typy =====
export type Product = {
  id: number | string;
  name: string;
  desc?: string;
  /** Môže byť "12€", "12,90", 12.9 atď. */
  price?: string | number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  /** Zobraziť cenu? default: true */
  showPrice?: boolean;
  /** Zobraziť tlačidlo „Kúpiť“? default: true */
  showBuy?: boolean;
  /** Voliteľná akcia namiesto defaultného pridania do košíka */
  onBuy?: () => void;
  className?: string;
};

// ===== Pomocné funkcie =====
function parsePriceToNumber(price?: string | number): number {
  if (price == null) return 0;
  if (typeof price === "number" && !Number.isNaN(price)) return price;
  // "11 €" -> "11", "12,90" -> "12.90"
  const cleaned = String(price).replace(/[€\s]/g, "").replace(",", ".");
  const n = Number.parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function formatEur(n: number): string {
  return n.toFixed(2) + " €";
}

// ===== Komponent =====
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showPrice = true,
  showBuy = true,
  onBuy,
  className = "",
}) => {
  const { dispatch } = useCart();

  const numericPrice = parsePriceToNumber(product.price);

  const handleAddToCart = () => {
    // fallback – ak príde undefined cena, vložíme 0
    dispatch({
      type: "ADD",
      item: {
        id: String(product.id), // v košíku držíme string ID
        name: product.name,
        price: numericPrice,
        image: product.image,
        qty: 1,
      },
    });
  };

  const handleBuyClick = () => {
    if (onBuy) return onBuy();
    handleAddToCart();
  };

  return (
    <div
      className={
        "bg-white/90 rounded-2xl shadow-md p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-lg min-w-[220px] " +
        className
      }
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-contain mb-3 rounded-xl bg-gray-100"
        loading="lazy"
      />

      <h3 className="font-bold text-lg text-blue-800 mb-1">{product.name}</h3>

      {product.desc && (
        <p className="text-gray-600 text-center mb-2">{product.desc}</p>
      )}

      {showPrice && (
        <div className="font-semibold text-blue-600 text-xl mb-3">
          {product.price !== undefined
            ? typeof product.price === "number"
              ? formatEur(product.price)
              : product.price
            : formatEur(numericPrice)}
        </div>
      )}

      {showBuy && (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition w-full"
          onClick={handleBuyClick}
        >
          Kúpiť
        </button>
      )}
    </div>
  );
};

export default ProductCard;
