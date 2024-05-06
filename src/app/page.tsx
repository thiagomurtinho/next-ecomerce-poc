import ProductCard from '@/components/product-card';
import { fetcherProducts } from '@/gateway/product/fetchers';

export default async function Home() {
  const { products } = await fetcherProducts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-100 p-24">
      <section className="flex flex-wrap justify-center gap-4">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </main>
  );
}
