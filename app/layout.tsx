import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import FoodTicker from "@/Components/FoodTicker/FoodTicker";


const hind = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
})

export const metadata: Metadata = {
  title: "বাজার দর | আজকের দাঁড়ির দাম",
  icons:{
    icon: '/logo-icon.png'
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className='h-full'
    >
      <body className={`${hind.className} min-h-full flex flex-col antialiased`}>
        <Navbar />
        <FoodTicker />
        {children}
        <Footer />
      </body>
    </html>
  );
}
