"use client";

import ProductPage from "@/components/pages/ProductPage";
import Head from "../head";

export default function Product() {

  return (
    <>
      <Head
        title="Aroma Biji Collection | Premium Indonesian Coffee Beans"
        description="Explore Aroma Biji’s premium coffee collection—single-origin Indonesian beans, artisan blends, and freshly roasted specialty coffee for true enthusiasts."
        url="https://aromabiji.co/product"
        keywords="Indonesian coffee beans, premium coffee Indonesia, single origin coffee, artisan coffee blends, specialty coffee Indonesia, Aroma Biji products"
        image="https://aromabiji.co/images/aroma-biji-products.jpg"
      />

      <ProductPage/>
    </>
  );
}

