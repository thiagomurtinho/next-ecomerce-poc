'use client';

import { useCart } from '@/data/stores/cart';
import Link from 'next/link';

export default function LinkToCart() {
  const { state } = useCart();

  return <Link href={{ pathname: '/cart' }}>{`Cart - ${state.items.length}`}</Link>;
}
