export const dynamic = 'force-dynamic'

import AllProducts from "@/Components/AllProducts/AllProducts";
import Banner from "@/Components/Banner/Banner";
import PriceDown from "@/Components/PriceDownProducts/PriceDown";
import PriceUp from "@/Components/PriceUpProducts/PriceUp";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="bg-[#f0f5f0] min-h-screen">
      <div className="bg-[#f0f5f0] w-full h-8"></div>
      <Banner />
      <Suspense 
      fallback={<div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-xs text-muted">Large</span>
            </div>}>
        <PriceUp />
        <PriceDown />
        <AllProducts />
      </Suspense>
      <div className="bg-[#f0f5f0] w-full h-18"></div>
    </div>
  );
}
