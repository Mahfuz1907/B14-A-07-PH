import Banner from "@/Components/Banner/Banner";
import PriceDown from "@/Components/PriceDownProducts/PriceDown";
import PriceUp from "@/Components/PriceUpProducts/PriceUp";


export default async function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Banner />
      <PriceUp />
      <PriceDown />
    </div>
  );
}
