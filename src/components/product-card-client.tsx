'use client';

import { useCart } from '@/data/stores/cart';
import { useProduct } from '@/gateway/product';
import { Product } from '@/gateway/product/types';
import { formatCurrency } from '@/lib/format-currency';
import React, { useState } from 'react';

interface ProductCardClientProps extends Product {
  lastUpdate: string;
}

export default function ProductCardClient(initialDataProduct: ProductCardClientProps) {
  const {
    data: product,
    isLoading,
    error,
  } = useProduct(`${initialDataProduct.id}`, { initialData: initialDataProduct });
  const { add } = useCart();

  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(prev => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;
  if (!product) return <p>No product found</p>;

  return (
    <div className="max-w-md overflow-hidden rounded-lg bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
      <img className="h-60 w-full object-cover" src={product.thumbnail} alt={product.title} />
      <div className="px-6 py-4">
        <h3 className="mb-2 text-xl font-bold">{product.title}</h3>
        <p className="mb-4 text-base text-gray-700">{product.description}</p>

        <div className="mb-3 flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-900">{formatCurrency(product.price)}</p>
          <div className="flex items-center">
            <button
              onClick={decrement}
              className="mr-2 rounded bg-red-200 px-3 py-1 text-xl font-bold hover:bg-red-300"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              onClick={increment}
              className="ml-2 rounded bg-green-200 px-3 py-1 text-xl font-bold hover:bg-green-300"
            >
              +
            </button>
          </div>
        </div>
        <button
          onClick={() => add({ ...product, quantity })}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-blue-700"
        >
          Add to cart
        </button>
        <p className="text-sm text-gray-600">Last update: {initialDataProduct.lastUpdate}</p>
      </div>
    </div>
  );
}
