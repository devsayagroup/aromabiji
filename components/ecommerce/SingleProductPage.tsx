// "use client"

// import products from "@/lib/products.json";
// import { Product } from "@/types/product";
// import AddToCartButton from "@/components/ecommerce/AddToCartButton";
// import { notFound } from "next/navigation";
// import { motion } from "framer-motion";

// interface ProductPageProps {
//   product: Product;
// }

// export default async function SingleProductPage({ product }: ProductPageProps) {
//   if (!product) return notFound();

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
//     >
//       <motion.img
//         src={product.image}
//         alt={product.name}
//         className="rounded-2xl shadow-xl w-full max-h-[540px] object-cover"
//         initial={{ scale: 0.97 }}
//         animate={{ scale: 1 }}
//       />

//       <div>
//         <h1 className="text-4xl font-serif font-semibold mb-3">{product.name}</h1>
//         <p className="text-sm text-gray-500 mb-3">
//           {product.origin} — {product.type}
//         </p>
//         <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

//         <div className="flex items-center gap-4">
//           <span className="text-2xl font-medium">
//             Rp {product.price_idr?.toLocaleString("id-ID") || "–"}
//           </span>
//           <AddToCartButton product={product} />
//         </div>
//       </div>
//     </motion.section>
//   );
// }
