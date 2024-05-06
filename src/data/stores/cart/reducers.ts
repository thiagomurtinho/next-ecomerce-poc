import { CartAction, CartState } from './types';

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.id === action.item.id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.item.id
              ? { ...item, quantity: item.quantity + action.item.quantity }
              : item,
          ),
        };
      } else {
        return { ...state, items: [...state.items, action.item] };
      }
    case 'UPDATE_ITEM_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.item.id ? { ...item, quantity: action.item.quantity } : item,
        ),
      };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.itemId) };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};
