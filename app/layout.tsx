import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import FoodTicker from "@/Components/FoodTicker/FoodTicker";
import ProductsProvider from "@/Context/ProductsContext";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";


const hind = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
})

export const metadata: Metadata = {
  title: "বাজার দর — আজকের দাঁড়ির দাম",
  icons:{
    icon: '/logo-icon.png'
  }
};

const getProducts = async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
    next: {revalidate: 3600}
  })
  const data = await res.json()
  return data
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const products = await getProducts()
  return (
    <html
      data-theme='light'
      lang="bn"
      className='h-full bg-[#f0f5f0]'
      style={{ backgroundColor: '#f0f5f0' }}
    >
      <body className={`${hind.className} min-h-screen flex flex-col antialiased bg-[#f0f5f0]`}>
        <ProductsProvider initialProducts={products}>
          <Suspense fallback={null}>
          <Navbar />
          {/* <FoodTicker /> */}
          <main className="grow">
            {children}
          </main>
          </Suspense>
          <Footer />

          <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          />
        </ProductsProvider>
      </body>
    </html>
  );
}
