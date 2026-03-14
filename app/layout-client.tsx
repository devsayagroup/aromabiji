"use client";

import { useEffect, useState } from "react";
import "@/styles/globals.css";
import Loading from "./loading";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/components/ecommerce/CartContext";
import CartDrawer from "@/components/ecommerce/CartDrawer";
import Footer from "@/components/layout/Footer";
// import ScrollToTop from "@/components/ui/ScrollToTop";
// import WhatsappButton from "@/components/ui/WhatsappButton";
import SmoothScroll from "@/components/ui/SmoothScroll";
import RouteTracker from "@/components/analytics/RouteTracker";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading ? (
        <Loading />
      ) : (
        <CartProvider>
          <Header />
          <RouteTracker />
          {/* <ScrollToTop />
          <WhatsappButton /> */}
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />  
          <CartDrawer/>
        </CartProvider>
      )} 
    </>
      
  );
}
