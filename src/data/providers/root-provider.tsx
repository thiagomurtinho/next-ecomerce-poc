'use client';

import { CartProvider } from '@/data/stores/cart';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function RootProviders({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
}
