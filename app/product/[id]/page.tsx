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
import DetailPage from "@/components/pages/DetailPage";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(p => p.id === id);

  if (!product) return notFound();

  return (
    <DetailPage
      product={product}
      allProducts={products}
    />
  );
}

