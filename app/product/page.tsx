// "use client";

// import rawProducts from "@/lib/products.json";
// import { Product } from "@/types/product";
// import ProductCard from "@/components/ecommerce/ProductCard";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useMemo } from "react";

// const products = rawProducts as Product[];

// export default function ProductPage() {
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   // 🧠 Collect unique origins for category filter
//   const categories = useMemo(() => {
//     const unique = Array.from(new Set(products.map((p) => p.origin)));
//     return ["All", ...unique];
//   }, []);

//   // 🎯 Filter logic
//   const filtered = products.filter((p) => {
//     const matchesName = p.name.toLowerCase().includes(search.toLowerCase());
//     const matchesCategory =
//       category === "All" ? true : p.origin === category;
//     return matchesName && matchesCategory;
//   });

//   return (
//     <section className="min-h-screen py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-emerald-50">
//       <div className="max-w-7xl mx-auto">
//         {/* 🏷 Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-14 text-center"
//         >
//           <h1 className="text-5xl md:text-6xl font-style font-semibold tracking-tight text-gray-900">
//             Aroma Biji Collection
//           </h1>
//           <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
//             Experience Indonesia’s finest coffee selections, crafted with
//             precision, passion, and purity.
//           </p>
//           <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
//             <input
//               type="text"
//               placeholder="Search by name..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="border border-gray-300 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
//             />
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="border border-gray-300 bg-white/70 backdrop-blur-sm px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
//             >
//               {categories.map((c) => (
//                 <option key={c}>{c}</option>
//               ))}
//             </select>
//           </div>
//         </motion.div>

//         {/* ☕ Product grid */}
//         <AnimatePresence>
//           <motion.div
//             layout
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ staggerChildren: 0.05 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//           >
//             {filtered.map((p) => (
//               <motion.div
//                 key={p.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ProductCard product={p} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>

//         {/* 🕯 Empty state */}
//         {filtered.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center text-gray-500 py-20"
//           >
//             No products found. Try another keyword or category.
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import productsData from "@/lib/products.json";
// import { Product } from "@/types/product";
// import ProductCard from "@/components/ecommerce/ProductCard";

// export default function ProductPage() {
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const categories = ["All", ...Array.from(new Set(productsData.map((p: Product) => p.origin)))];

//   const filtered = productsData.filter((p: Product) => {
//     const matchCategory = filter === "All" || p.origin === filter;
//     const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       <div className="mb-10 text-center space-y-3">
//         <h1 className="text-4xl md:text-5xl font-serif text-[#3F2410] font-semibold">Our Coffee Collection</h1>
//         <p className="text-[#8B6F56] max-w-2xl mx-auto">
//           Explore the essence of Indonesia’s finest regions — handpicked, roasted, and refined.
//         </p>
//       </div>

//       {/* Filters */}
//       <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
//         {/* <input
//           type="text"
//           placeholder="Search coffee..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full md:w-1/3 px-4 py-2 border border-[#C7B299] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B6F56] transition-all"
//         /> */}

//         <div className="flex flex-wrap gap-3 justify-center md:justify-end">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setFilter(cat)}
//               className={`px-4 py-2 rounded-full text-sm transition-all ${
//                 filter === cat
//                   ? "bg-[#3F2410] text-white shadow-md"
//                   : "bg-[#F5EFE7] text-[#3F2410] hover:bg-[#E8DED2]"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Product Grid */}
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.06 } }
//         }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
//       >
//         {filtered.map((p: Product) => (
//           <motion.div key={p.id} whileHover={{ y: -5 }}>
//             <ProductCard product={p} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import products from "@/lib/products.json";
// import { Product, Variant } from "@/types/product";
// import AddToCartButton from "@/components/ecommerce/AddToCartButton";

// export default function ProductPage() {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">
//       {/* Header */}
//       <div className="text-center mb-14">
//         <h1 className="text-4xl md:text-5xl font-serif text-[#3F2410] font-semibold">
//           The Aroma Biji Collection
//         </h1>
//         <p className="text-[#8B6F56] mt-3 max-w-2xl mx-auto">
//           Discover Indonesia’s finest specialty coffees — curated by origin, crafted with heritage.
//         </p>
//       </div>

//       <div className="space-y-20">
//         {(products as Product[]).map((coffee) => (
//           <motion.div
//             key={coffee.id}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="space-y-8"
//           >
//             {/* Coffee Category */}
//             <div className="text-center space-y-2">
//               <h2 className="text-3xl font-serif font-semibold text-[#3F2410]">
//                 {coffee.name}
//               </h2>
//               <p className="text-sm text-[#8B6F56] uppercase tracking-wide">
//                 {coffee.origin}
//               </p>
//               <p className="text-[#5C3B1D]/80 max-w-2xl mx-auto text-sm leading-relaxed">
//                 {coffee.description}
//               </p>
//             </div>

//             {/* Variants Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//               {coffee.variants.map((v: Variant) => (
//                 <motion.div
//                   key={v.id}
//                   whileHover={{ y: -5 }}
//                   transition={{ type: "spring", stiffness: 150, damping: 15 }}
//                   className="bg-[#FDFBF8] rounded-3xl overflow-hidden shadow-[0_10px_25px_rgba(63,36,16,0.08)] hover:shadow-[0_15px_40px_rgba(63,36,16,0.15)] transition-all duration-500"
//                 >
//                   <motion.img
//                     src={v.image}
//                     alt={v.type}
//                     className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
//                   />

//                   <div className="p-6 space-y-3">
//                     <h3 className="text-lg font-serif font-semibold text-[#3F2410]">
//                       {v.type}
//                     </h3>
//                     <p className="text-sm text-[#8B6F56]">
//                       {v.packaging} — {v.weight}
//                     </p>

//                     <div className="flex justify-between items-center mt-4">
//                       <span className="text-lg font-semibold text-[#3F2410]">
//                         Rp {v.price_idr?.toLocaleString("id-ID")}
//                       </span>
//                       <AddToCartButton product={{ ...coffee, variants: [v] }} small />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import products from "@/lib/products.json";
// import { Product, Variant } from "@/types/product";
// import AddToCartButton from "@/components/ecommerce/AddToCartButton";

// export default function ProductPage() {
//   return (
//     <section className="max-w-8xl mx-auto px-6 py-20 space-y-20">
//       {(products as Product[]).map((coffee) => (
//         <motion.div
//           key={coffee.id}
//           className="rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(63,36,16,0.12)]"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {/* Background gradient container */}
//           <div
//             className="p-10 md:p-16 flex flex-col md:flex-row justify-between items-center gap-12"
//             style={{
//               background:
//                 "linear-gradient(135deg, #4A2E1C 0%, #9C7750 60%, #C9A27A 100%)",
//             }}
//           >
//             {/* LEFT CONTENT */}
//             <div className="flex-1 text-white space-y-4 md:max-w-md">
//               <h2 className="text-4xl md:text-5xl font-style tracking-tight">
//                 {coffee.name}
//               </h2>
//               <p className="text-sm uppercase opacity-90 tracking-wider">
//                 {coffee.origin}
//               </p>
//               <p className="opacity-90 leading-relaxed text-sm">
//                 {coffee.description}
//               </p>
//             </div>

//             {/* RIGHT - VARIANT CARDS */}
//             <div className="flex flex-wrap md:flex-nowrap gap-6 w-full md:w-auto justify-center md:justify-start md:items-start">
//               {coffee.variants.map((variant: Variant) => (
//                 <motion.div
//                   key={variant.id}
//                   whileHover={{ y: -5 }}
//                   className="bg-[#F9F6F3]/95 backdrop-blur-sm rounded-2xl p-4 w-[200px] flex flex-col items-center text-center shadow-[0_4px_12px_rgba(63,36,16,0.12)] hover:shadow-[0_6px_20px_rgba(63,36,16,0.18)] transition-all"
//                 >
//                   <img
//                     src={variant.image}
//                     alt={variant.type}
//                     className="w-full h-40 object-cover rounded-xl mb-4"
//                   />
//                   <p className="text-xs text-[#3F2410] font-medium">
//                     {variant.type.toUpperCase()}
//                   </p>
//                   <p className="text-xs text-[#8B6F56] mt-1">
//                     {variant.packaging.toUpperCase()} – {variant.weight}
//                   </p>
//                   <div className="flex flex-row justify-between items-center gap-8">
//                     <p className="text-sm text-[#3F2410] font-semibold mt-3">
//                       Rp {variant.price_idr?.toLocaleString("id-ID")}
//                     </p>

//                     <div className="mt-3">
//                       <AddToCartButton product={{ ...coffee, variants: [variant] }} small />
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </section>
//   );
// } 
"use client";

import { motion } from "framer-motion";
import products from "@/lib/products.json";
import { Product, Variant } from "@/types/product";
import AddToCartButton from "@/components/ecommerce/AddToCartButton";

export default function ProductPage() {
  return (
    <section className="mx-auto px-6 md:px-20 py-16 space-y-10 md:space-y-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-style text-brown font-semibold">
          Aroma Biji Collection
        </h1>
        <p className="text-[#8B6F56] mt-3 max-w-xl mx-auto md:text-xl font-text">
          Discover Indonesia’s finest specialty coffees. Curated by origin, crafted with heritage.
        </p>
      </div>
      
      {(products as Product[]).map((coffee) => {
        const hasManyVariants = coffee.variants.length > 1;
        const isDark = coffee.theme === "dark"; 

        return (
          <motion.div
            key={coffee.id}
            className="rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(63,36,16,0.12)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Gradient + Image Background */}
            <div
              className={`p-8 md:p-16 flex flex-col md:flex-row justify-between items-center gap-8 bg-cover bg-center bg-no-repeat relative`}
              style={{backgroundImage: `url(${coffee.bg})`}}
            >
              {/* LEFT CONTENT */}
              <div
                className={`space-y-4 w-full md:max-w-md flex-shrink-0 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                <h2
                  className={`text-4xl md:text-5xl font-style tracking-tight ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  {coffee.name}
                </h2>
                <p
                  className={`text-sm uppercase tracking-wider ${
                    isDark ? "text-white/80" : "text-black"
                  }`}
                >
                  {coffee.origin}
                </p>
                <p
                  className={`leading-relaxed text-sm md:text-base max-w-sm ${
                    isDark ? "text-white/85" : "text-black"
                  }`}
                >
                  {coffee.description}
                </p>
              </div>

              {/* RIGHT SIDE - VARIANTS */}
              <div
                className={`flex ${
                  hasManyVariants
                    ? "overflow-x-auto scroll-smooth"
                    : "flex-wrap"
                } md:flex-nowrap gap-6 justify-start w-full md:w-auto pb-2`}
                style={{
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>

                {coffee.variants.map((variant: Variant) => (
                  <motion.div
                    key={variant.id}
                    // whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="bg-white/55 backdrop-blur-sm rounded-2xl p-4 w-[220px] flex-shrink-0 flex flex-col items-start text-left shadow-[0_4px_12px_rgba(63,36,16,0.12)] hover:shadow-[0_6px_20px_rgba(63,36,16,0.18)] transition-all"
                  >
                    <img
                      src={variant.image}
                      alt={variant.type}
                      className="w-full h-40 object-cover rounded-xl mb-4"
                    />
                    <p className="text-xs text-[#3F2410] font-medium">
                      {variant.type.toUpperCase()}
                    </p>
                    <p className="text-xs text-brown mt-1">
                      {variant.packaging.toUpperCase()} – {variant.weight}
                    </p>

                    <div className="flex flex-row justify-between items-center gap-6 mt-3 w-full">
                      <p className="text-md text-[#3F2410] font-semibold">
                        Rp {variant.price_idr?.toLocaleString("id-ID")}
                      </p>

                      <AddToCartButton
                        product={{ ...coffee, variants: [variant] }}
                        small
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}

