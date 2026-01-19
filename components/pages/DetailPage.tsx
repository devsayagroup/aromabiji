"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";
import OtherProducts from "@/components/ui/OtherProducts";

export default function DetailPage({ product, allProducts }: { product: Product,  allProducts: Product[];
}) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const isDark = product.theme === "dark";

  return (
    <section className={`min-h-screen bg-white`}>
        {product.bg && (
        <OriginStory
            name={product.name}
            origin={product.origin}
            dark={isDark}
            description={product.description}
            bg={product.bg}
        />
        )}
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 md:gap-16">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-[5/5] md:aspect-[7/5] rounded-xl overflow-hidden"
            >
            <Image
                src={selectedVariant.image}
                alt={product.name}
                fill
                className="object-contain"
            />
            </motion.div>

            <div className="space-y-2">
            {/* <header>
                <p className="uppercase tracking-widest text-sm opacity-70">
                {product.origin}
                </p>
                <h1 className="font-serif text-4xl lg:text-5xl mt-2">
                {product.name}
                </h1>
            </header>

            <p className="opacity-80 leading-relaxed max-w-xl">
                {product.description}
            </p> */}
            <VariantSelector
                variants={product.variants}
                selected={selectedVariant}
                onSelect={setSelectedVariant}
                dark={isDark}
            />

            {/* <div className="pt-6 border-t border-black/10">
                <p className="text-sm opacity-70">Price</p>
                <p className="text-2xl font-medium">
                IDR {selectedVariant.price_idr.toLocaleString("id-ID")}
                </p>
            </div> */}
        </div>
        {/* <StickyCTA price={selectedVariant.price_idr} /> */}
        </div>
         <OtherProducts
            products={allProducts}
            currentId={product.id}
        />
    </section>
  );
}

    function VariantSelector({
        variants,
        selected,
        onSelect,
        dark,
        }: {
        variants: any[];
        selected: any;
        onSelect: (v: any) => void;
        dark: boolean;
        }) {
    return (
        <div className="space-y-2">
        <p className="text-sm opacity-70">Choose Variant</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {variants.map(v => (
            <button
                key={v.id}
                onClick={() => onSelect(v)}
                className={`p-4 rounded-md border text-left transition  ${
                selected.id === v.id
                    ?  "border-black bg-black/2"
                    : "border-transparent hover:border-black/20"
                }`}
            >
                <p className="font-medium">{v.type}</p>
                <p className="text-sm opacity-70">
                {v.packaging} · {v.weight}
                </p>
            </button>
            ))}
        </div>
        </div>
    );
    }

    function OriginStory({
        name,
        origin,
        description,
        bg,
        dark
        }: {
        name: string;
        origin: string;
        description: string;
        bg: string;
        dark: boolean
        }) {
    return (
        <section className="pt-22">
        <div
            className={`container overflow-hidden bg-cover bg-center ${
                    dark ? "text-white" : "text-black"
                  }`}
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="p-8 md:p-16 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="font-style text-5xl md:text-6xl">{name}</h2>
                    <p className="uppercase tracking-widest text-sm mt-4 opacity-80">
                    {origin}
                    </p>
                </div>
                <p className="max-w-md place-items-end flex items-center leading-relaxed opacity-90">
                    {description}
                </p>
            </div>
        </div>
        </section>
    );
    }

    function StickyCTA({ price }: { price: number }) {
        return (
            <div className="fixed bottom-6 inset-x-0 px-6 z-50">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-4">
                <button className="px-3 py-1 border rounded-full">–</button>
                <span>1</span>
                <button className="px-3 py-1 border rounded-full">+</button>
                </div>

                <button className="bg-[#8B1E1E] text-white px-8 py-3 rounded-full font-medium">
                IDR {price.toLocaleString("id-ID")} – ADD TO CART
                </button>
            </div>
            </div>
        );
    }
