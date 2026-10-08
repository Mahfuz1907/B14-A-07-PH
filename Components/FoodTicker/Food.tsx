import { ProductsPromiseTypes } from '@/type';
import Link from 'next/link';
import React from 'react';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';

interface foodTickerType{
    food: ProductsPromiseTypes
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

const Food = ({food}:foodTickerType) => {
    let priceChange = food.change.pct
    if(food.change.pct < 0) priceChange = -food.change.pct

    const foodChange = digitToBn(priceChange)

    return (
        <Link href={`/products/${food.id}`} 
        className='flex flex-row tracking-wide flex-nowrap justify-between items-center gap-1 
        border-r border-[#f0f5f0] py-2 px-4 text-[#1d271f] hover:text-green-600 text-sm font-semibold'>
            <h4>{food.image}</h4>
            <h4>{food.nameBn}</h4>
            <h4 className='font-semibold tracking-wide'>{digitToBn(food.today)} টাকা/{unitToBn(food.unit)}</h4>
            <h4>
                {food.change.dir === 'up' ? <TbTriangleFilled className='text-red-600 text-[10px]' /> 
                : food.change.dir === 'down' ? <TbTriangleInvertedFilled className='text-green-600 text-[10px]' /> 
                : '' }</h4>
            <h4 className='font-semibold tracking-wide'>{food.change.pct > 0 ? `${foodChange}` : `${foodChange}` }%</h4>
        </Link>
    );
};

export default Food;