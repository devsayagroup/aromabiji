import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailPage from "@/components/pages/ProductDetailPage";
import type { Product } from "@/types/product";
import { buildMeta } from "@/lib/seo/meta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const productsData = products as Product[];
  const product = productsData.find((p) => p.id === id);

  if (!product) {
    return buildMeta({
      title: "Product Not Found",
      description: "Aroma Biji premium Indonesian coffee collection.",
      path: `/product/${params}`,
    });
  }

  return buildMeta({
    title: `${product.name} | ${product.origin} | Aroma Biji Indonesia`,
    description: product.description,
    path: `/product/${product.id}`,
    image: product.image
  });
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(p => p.id === id);

  if (!product) return notFound();

  return (
    <ProductDetailPage
      product={product}
      allProducts={products}
    />
  );
}

