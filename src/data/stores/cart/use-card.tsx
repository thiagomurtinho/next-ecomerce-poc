'use client';

import { useCallback, useContext } from 'react';
import { CartContext } from './context';
import { CartItem } from './types';

export const useCart = () => {
  const { state, dispatch } = useContext(CartContext);

  const add = useCallback(
    (item: CartItem) => {
      dispatch({ type: 'ADD_ITEM', item });
    },
    [dispatch],
  );

  const remove = useCallback(
    (itemId: number): void => {
      dispatch({ type: 'REMOVE_ITEM', itemId });
    },
    [dispatch],
  );

  const clear = useCallback((): void => {
    dispatch({ type: 'CLEAR_CART' });
  }, [dispatch]);

  const quantityChange = useCallback(
    (itemId: number, quantity: number): void => {
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        dispatch({ type: 'UPDATE_ITEM_QUANTITY', item: { ...item, quantity } });
      }
    },
    [dispatch, state.items],
  );

  const purchase = useCallback((): void => {
    alert('Compra realizada com sucesso!');
    clear();
  }, [clear]);

  return {
    state,
    add,
    remove,
    clear,
    quantityChange,
    purchase,
  };
};
