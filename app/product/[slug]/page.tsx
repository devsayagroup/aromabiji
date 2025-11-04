// import products from "@/lib/products.json";
// import { Product } from "@/types/product";
// import { notFound } from "next/navigation";
// import SingleProductPage from "@/components/ecommerce/SingleProductPage";

// interface ProductPageProps {
//   params: Promise<{ slug: string }>;
// }

// export default async function SingleProduct({ params }: ProductPageProps) {
//   const { slug } = await params;
//   const product = (products as Product[]).find((p) => p.slug === slug);

//   if (!product) return notFound();

//   return (
//     <>
//       <SingleProductPage product={product}/>
//     </>
//   );
// }

import products from "@/lib/products.json";
import { Product, Variant } from "@/types/product";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import AddToCartButton from "@/components/ecommerce/AddToCartButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = (products as Product[]).find((p) => p.id === slug);
  if (!product) return notFound();

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={product.image}
          alt={product.name}
          className="rounded-3xl shadow-lg w-full h-[480px] object-cover"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        <div>
          <h1 className="text-4xl font-serif text-[#3F2410] mb-2">{product.name}</h1>
          <p className="text-[#8B6F56] text-sm uppercase mb-4">{product.origin}</p>
          <p className="text-[#5C3B1D] leading-relaxed mb-6">{product.description}</p>

          <div className="space-y-4">
            {product.variants.map((v: Variant) => (
              <motion.div
                key={v.id}
                whileHover={{ scale: 1.02 }}
                className="flex justify-between items-center bg-[#F8F3ED] rounded-xl p-4"
              >
                <div>
                  <p className="font-medium text-[#3F2410]">{v.type}</p>
                  <p className="text-sm text-[#8B6F56]">
                    {v.packaging} — {v.weight}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-semibold text-[#3F2410]">
                    Rp {v.price_idr?.toLocaleString("id-ID")}
                  </span>
                  <AddToCartButton product={{ ...product, variants: [v] }} small />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
