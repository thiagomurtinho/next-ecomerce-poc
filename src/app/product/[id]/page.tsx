import ProductCardClient from '@/components/product-card-client';
import { fetcherProduct, fetcherProducts } from '@/gateway/product/fetchers';
import { formattedDateAndTime } from '@/lib/format-date';

export async function generateStaticParams() {
  const { products } = await fetcherProducts();

  return products.map(product => ({
    id: String(product.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const products = await fetcherProduct(params.id);

  const { date, time } = formattedDateAndTime();

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="mb-2 text-2xl font-bold">Detalhes do Produto</h1>
      <p className="mb-4 text-sm text-gray-500">
        Última atualização em: {date} às {time}
      </p>
      <ProductCardClient {...products} lastUpdate={`${date} - ${time}`} />
    </div>
  );
}
