import { Product } from '@/gateway/product/types';

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'REMOVE_ITEM'; itemId: number }
  | { type: 'CLEAR_CART' }
  | { type: 'UPDATE_ITEM_QUANTITY'; item: CartItem };
