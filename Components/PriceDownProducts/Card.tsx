'use client'
import { ProductsPromiseTypes } from '@/type';
import Link from 'next/link';
import { TbTriangleInvertedFilled } from 'react-icons/tb';

interface CardType{
    product: ProductsPromiseTypes
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
  return unitMap[unit.toLowerCase()] || unit;
};


const Card = ({product}:CardType) => {
    const pct = -product.change.pct
    return (
        <Link href={`/products/${product.id}`} 
        className='bg-[#fafcfa] border border-[#e1e8e1] hover:border hover:border-green-600 rounded-2xl p-4 flex flex-col justify-between items-start gap-3'>
            {/* title */}
            <div className='flex flex-row justify-start items-start gap-3'>
                {/* image */}
                <button 
                className={'rounded-xl bg-[#f0f5f0] text-2xl text-center p-2'}>
                    {product.image}
                </button>
                {/* title */}
                <div>
                    <h2 className='text-[#1d271f] text-base font-semibold'>{product.nameBn}</h2>
                    <p className='text-[#1d271f] text-sm font-light'>প্রতি {unitToBn(product.unit)}</p>
                </div>
            </div>
            {/* details */}
            <div className='flex flex-row justify-between items-end w-full'>
                <div className='flex flex-col justify-between items-start gap-1'>
                    <p className='text-[#1d271f] text-sm font-light'>আজকের দাম</p>
                    <p className='text-[#1d271f] text-base font-normal'><span className='text-2xl font-bold'>{digitToBn(product.today)}</span> টাকা</p>
                </div>
                <button 
                className='flex flex-row justify-between items-center text-sm gap-1 rounded-xl px-2.5 py-1 bg-[#f0f5f0] text-green-600'>
                    <TbTriangleInvertedFilled className='text-[10px]' /> 
                    {digitToBn(pct)}% 
                </button>
            </div>
        </Link>
    );
};

export default Card;