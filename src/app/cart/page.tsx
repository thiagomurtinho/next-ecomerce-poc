'use client';

import { useCart } from '@/data/stores/cart';
import Image from 'next/image';

export default function CartPage() {
  const { state, remove, clear, quantityChange, purchase } = useCart();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100 p-24">
      <section className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold">Carrinho</h1>
        {state.items.length > 0 ? (
          <div className="mt-4">
            {state.items.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="size-20 object-cover"
                  />
                  <div>
                    <h5 className="text-xl font-semibold">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => quantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => quantityChange(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.stock}
                  >
                    +
                  </button>
                  <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => remove(item.id)} className="text-red-500">
                    Remover
                  </button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between p-4">
              <button onClick={clear} className="rounded bg-red-500 px-4 py-2 text-white">
                Limpar Carrinho
              </button>
              <button onClick={purchase} className="rounded bg-green-500 px-4 py-2 text-white">
                Comprar
              </button>
            </div>
          </div>
        ) : (
          <p>Seu carrinho está vazio.</p>
        )}
      </section>
    </main>
  );
}
