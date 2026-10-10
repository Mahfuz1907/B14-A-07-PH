import { ProductsPromiseTypes } from '@/type';
import React from 'react';
import Table from './Table';

interface DetailsType{
    product: ProductsPromiseTypes,
}

const digitToBn = (num: number | string): string => {
    const bnDigits: { [key: string]: string } = {
    "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪",
    "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯", ".": "."
  };
  return num.toString().replace(/[0-9]/g, (digit) => bnDigits[digit] || digit);
}


const unitToBn = (unit: string): string => {
  const unitMap: { [key: string]: string } = {
    kg: "কেজি",
    litre: "লিটার",
    liter: "লিটার",
    dozen: "ডজন",
    pcs: "পিস",
    piece: "পিস"
  };
  return unitMap[unit?.toLowerCase()] || unit;
};

const Details = ({product}:DetailsType) => {
    const minPrices = product?.markets?.map((market) => market.min) || []
    const min = Math.min(...minPrices)
    const maxPrices = product?.markets?.map((market) => market.max) || []
    const max = Math.max(...maxPrices)
    const averageArray = product?.markets?.map((market) => (market.max + market.min)/2) || []
    const summation = averageArray.reduce((current, total) => total + current, 0)
    const avg = Math.round(summation/(averageArray.length))

    return (
        <div className='rounded-2xl border border-[#e1e8e1] bg-[#fafcfa] p-5 w-full text-[#1d271f] flex flex-col justify-between items-start gap-6'>
            <h1 className='text-[#1d271f] text-lg font-semibold'>দামের সারসংক্ষেপ</h1>
            {/* three cards div */}
            <div className='grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-3 w-full'>
                {/* lowest */}
                <div className='bg-[#fafcfa] border border-[#e1e8e1] rounded-2xl px-6 py-4 flex flex-col justify-between items-start gap-1 w-full'>
                    <p className='text-xs font-normal'>সর্বনিম্ন দাম</p>
                    <h2 className='text-[#1a9951] text-2xl font-bold'>{digitToBn(min)} <span className='text-sm font-medium'> টাকা</span></h2>
                    <p className='text-xs font-normal'>সবচেয়ে কম দামের বাজার</p>
                </div>
                {/* highest */}
                <div className='bg-[#fafcfa] border border-[#e1e8e1] rounded-2xl px-6 py-4 flex flex-col justify-between items-start gap-1 w-full'>
                    <p className='text-xs font-normal'>সর্বাধিক দাম</p>
                    <h2 className='text-[#d03739] text-2xl font-bold'>{digitToBn(max)} <span className='text-sm font-medium'> টাকা</span></h2>
                    <p className='text-xs font-normal'>সবচেয়ে বেশি দামের বাজার</p>
                </div>
                {/* average */}
                <div className='bg-[#fafcfa] border border-[#e1e8e1] rounded-2xl px-6 py-4 flex flex-col justify-between items-start gap-1 w-full'>
                    <p className='text-xs font-normal'>গড় দাম</p>
                    <h2 className='text-[#05893e] text-2xl font-bold'>{digitToBn(avg)} <span className='text-sm font-medium'> টাকা</span></h2>
                    <p className='text-xs font-normal'>প্রতি {unitToBn(product.unit)}-এর হিসাবে</p>
                </div>
            </div>
            <h1 className='text-lg font-semibold'>বাজারভিত্তিক আজকের দাম</h1>
            <Table product={product} />
        </div>
    );
};

export default Details;