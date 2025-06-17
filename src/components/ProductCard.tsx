import React from "react";

type Product = {
  id: number;
  name: string;
  desc: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        onClick={() => alert(`Kúpené: ${product.name}`)}
      >
        Kúpiť
      </button>
    </div>
  );
};

export default ProductCard;
