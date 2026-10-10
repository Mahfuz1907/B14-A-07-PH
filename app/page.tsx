export const dynamic = 'force-dynamic'

import AllProducts from "@/Components/AllProducts/AllProducts";
import Banner from "@/Components/Banner/Banner";
import PriceDown from "@/Components/PriceDownProducts/PriceDown";
import PriceUp from "@/Components/PriceUpProducts/PriceUp";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="bg-[#f0f5f0] min-h-screen">
      <div className="bg-[#f0f5f0] w-full h-8"></div>
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <PriceUp />
        <PriceDown />
        <AllProducts />
      </Suspense>
      <div className="bg-[#f0f5f0] w-full h-18"></div>
    </div>
  );
}
