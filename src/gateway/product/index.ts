'use client';

import { useFetcherQuery } from '@/infra/http/fetcher-query';
import { fetcherProduct, fetcherProducts } from './fetchers';
import { Options, Product, Products } from './types';

export function useProduct(id: string | string[] | undefined, options: Options) {
  return useFetcherQuery<Product, Error>(['product', id], () => fetcherProduct(`${id}`), {
    ...options,
  });
}

export function useProducts(id: string | string[] | undefined) {
  return useFetcherQuery<Products, Error>(['product', id], fetcherProducts);
}
