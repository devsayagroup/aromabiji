"use client";

import { useEffect, useState } from "react";
import { Questrial } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Loading from "./loading";
import Header from "@/components/layout/Header";
import { CartProvider } from "@/components/ecommerce/CartContext";
// import Footer from "@/components/layout/Footer";
// import ScrollToTop from "@/components/ui/ScrollToTop";
// import WhatsappButton from "@/components/ui/WhatsappButton";

const textFont = Questrial({
  variable: "--font-text",
  subsets: ["latin"],
  weight: ["400"],
});

const styleFont = localFont({
  src: "../styles/TheSeasons.otf",
  variable: "--font-style",
});

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
    <body className={`${textFont.variable} ${styleFont.variable}`}>
      {loading ? (
        <Loading />
      ) : (
        <CartProvider>
          <Header />
          {/* <ScrollToTop />
          <WhatsappButton /> */}
          <main>{children}</main>
          {/* <Footer /> */}  
        </CartProvider>
      )}
    </body>
  );
}
