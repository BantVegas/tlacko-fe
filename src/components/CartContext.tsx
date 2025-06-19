import React, { createContext, useReducer, useContext, ReactNode } from 'react';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD'; item: CartItem }
  | { type: 'REMOVE'; id: string }
  | { type: 'CLEAR' }
  | { type: 'INCREMENT'; id: string }
  | { type: 'DECREMENT'; id: string };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: { items: [] }, dispatch: () => null });

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD':
      // ak už je v košíku, navýš množstvo
      const exist = state.items.find(i => i.id === action.item.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === action.item.id ? { ...i, qty: i.qty + action.item.qty } : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.id ? { ...i, qty: i.qty + 1 } : i
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.id && i.qty > 1 ? { ...i, qty: i.qty - 1 } : i
        ),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
