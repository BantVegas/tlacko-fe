import React from "react";
import { useCart } from "@/components/CartContext"; // uprav cestu podľa tvojho projektu

type Product = {
  id: number;
  name: string;
  desc: string;
  price: string; // napr. "8€"
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  // Ošetri cenu: "8€" => 8 (number)
  const parsedPrice = Number(
    product.price.replace("€", "").replace(",", ".").trim()
  );

  const handleAddToCart = () => {
    dispatch({
      type: "ADD",
      item: {
        id: String(product.id),      // vždy string!
        name: product.name,
        price: parsedPrice,
        image: product.image,
        qty: 1,
      },
    });
    // Voliteľné: jednoduchá notifikácia
    // toast.success("Pridané do košíka!")  // ak používaš react-hot-toast alebo iný notifikátor
  };

  return (
    <div className="bg-white/90 rounded-2xl shadow-md p-4 flex flex-col items-center transition hover:scale-105 hover:shadow-lg min-w-[220px]">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-contain mb-3 rounded-xl bg-gray-100"
        loading="lazy"
      />
      <h3 className="font-bold text-lg text-blue-800 mb-1">{product.name}</h3>
      <p className="text-gray-600 text-center mb-2">{product.desc}</p>
      <div className="font-semibold text-blue-600 text-xl mb-3">{product.price}</div>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition"
        onClick={handleAddToCart}
      >
        Kúpiť
      </button>
    </div>
  );
};

export default ProductCard;
