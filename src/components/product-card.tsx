import { Product } from '@/gateway/product/types';
import { formatCurrency } from '@/lib/format-currency';
import Image from 'next/image';
import Link from 'next/link';

type ProductCardProps = Pick<Product, 'id' | 'thumbnail' | 'title' | 'description' | 'price'>;

export default function ProductCard({
  id,
  thumbnail,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} passHref className="group">
      <div className="max-w-sm overflow-hidden rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
        <Image
          className="aspect-video w-full"
          src={thumbnail}
          alt={title}
          width={500}
          height={500}
        />
        <div className="px-6 py-4">
          <div className="mb-2 truncate text-xl font-bold">{title}</div>
          <p className="mb-4 truncate text-base text-gray-700">{description}</p>
          <p className="text-xl font-semibold text-gray-900">{formatCurrency(price)}</p>
        </div>
      </div>
    </Link>
  );
}
