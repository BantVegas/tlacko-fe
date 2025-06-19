import { useCart } from './CartContext';
import { ShoppingCart } from 'lucide-react'; // alebo iná ikonka

type CartIconProps = {
  onClick?: () => void;
};

export default function CartIcon({ onClick }: CartIconProps) {
  const { state } = useCart();
  const total = state.items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <button className="relative" onClick={onClick}>
      <ShoppingCart size={28} />
      {total > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
          {total}
        </span>
      )}
    </button>
  );
}
