// import { notFound } from "next/navigation";
// import { products } from "@/lib/products";
// import DetailPage from "@/components/pages/DetailPage";

// export default async function CoffeeDetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;

//   const product = products.find(p => p.id === id);

//   if (!product) return notFound();

//   return (
//     <>
//      <DetailPage product={product} />
//     </>
//   );
// }

import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailPage from "@/components/pages/ProductDetailPage";

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

