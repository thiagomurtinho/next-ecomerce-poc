import { fetcher } from '@/infra/http/fetcher';
import { Product, Products } from './types';

export function fetcherProducts(): Promise<Products> {
  return fetcher<Products>('https://dummyjson.com/products?limit=100');
}

export function fetcherProduct(id: string | string[] | undefined): Promise<Product> {
  return fetcher<Product>(`https://dummyjson.com/products/${id}`);
}
