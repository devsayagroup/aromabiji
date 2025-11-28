"use client";
import Head from "../head";
import { motion } from "framer-motion";
import products from "@/lib/products.json";
import { Product, Variant } from "@/types/product";
import AddToCartButton from "@/components/ecommerce/AddToCartButton";

export default function ProductPage() {
  return (
    <>
    <Head 
      title="Aroma Biji Collection | Premium Indonesian Coffee Beans"
      description="Explore Aroma Biji’s premium coffee collection—single-origin Indonesian beans, artisan blends, and freshly roasted specialty coffee for true enthusiasts."
      url="https://aromabiji.co/product"
      keywords="Indonesian coffee beans, premium coffee Indonesia, single origin coffee, artisan coffee blends, specialty coffee Indonesia, Aroma Biji products"
      image="https://aromabiji.co/images/aroma-biji-products.jpg"
    />
    <section className="mx-auto px-6 md:px-20 pt-36 md:pt-44 pb-16 space-y-10 md:space-y-20">
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-style text-brown font-semibold uppercase">
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
                      {/* <p className="text-md text-[#3F2410] font-semibold">
                        Rp {variant.price_idr?.toLocaleString("id-ID")}
                      </p>

                      <AddToCartButton
                        product={{ ...coffee, variants: [variant] }}
                        small
                      /> */}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );
      })}
    </section>
    </>
  );
}

