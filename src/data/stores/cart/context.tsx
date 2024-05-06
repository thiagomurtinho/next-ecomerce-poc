'use client';

import { createContext, useReducer } from 'react';
import { cartReducer } from './reducers';
import { CartAction, CartState } from './types';

const initialState: CartState = {
  items: [],
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};
