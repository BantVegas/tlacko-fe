import React, {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  useMemo,
  useEffect,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;   // cena v EUR
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: "ADD"; item: CartItem }
  | { type: "REMOVE"; id: string }
  | { type: "CLEAR" }
  | { type: "INCREMENT"; id: string }
  | { type: "DECREMENT"; id: string };

type CartContextShape = {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
  add: (item: Omit<CartItem, "qty">, qty?: number) => void;
  remove: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clear: () => void;
  totalQty: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextShape | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const exist = state.items.find((i) => i.id === action.item.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, qty: i.qty + action.item.qty } : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.id) };
    case "CLEAR":
      return { ...state, items: [] };
    case "INCREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, qty: i.qty + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
        ),
      };
    default:
      return state;
  }
}

const LS_KEY = "cart:v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    undefined as unknown as CartState,
    () => {
      try {
        const raw = localStorage.getItem(LS_KEY);
        return raw ? (JSON.parse(raw) as CartState) : { items: [] };
      } catch {
        return { items: [] };
      }
    }
  );

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  // Helper metódy (aby si mohol volať useCart().add atď.)
  const add: CartContextShape["add"] = (item, qty = 1) =>
    dispatch({ type: "ADD", item: { ...item, qty } });

  const remove: CartContextShape["remove"] = (id) =>
    dispatch({ type: "REMOVE", id });

  const increment: CartContextShape["increment"] = (id) =>
    dispatch({ type: "INCREMENT", id });

  const decrement: CartContextShape["decrement"] = (id) =>
    dispatch({ type: "DECREMENT", id });

  const clear: CartContextShape["clear"] = () => dispatch({ type: "CLEAR" });

  // Agregácie
  const totalQty = useMemo(
    () => state.items.reduce((s, i) => s + i.qty, 0),
    [state.items]
  );
  const totalPrice = useMemo(
    () => state.items.reduce((s, i) => s + i.qty * i.price, 0),
    [state.items]
  );

  const value: CartContextShape = {
    state,
    dispatch,
    add,
    remove,
    increment,
    decrement,
    clear,
    totalQty,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
};
