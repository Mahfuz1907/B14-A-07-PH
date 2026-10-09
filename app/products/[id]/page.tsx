import Link from 'next/link';
import React from 'react';
import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb';
import { TfiAngleRight } from 'react-icons/tfi';
import Details from './Details';

export const instant = false

interface ProductPageType{
    params: Promise<{id: number}>
}

const getProducts = async(id:number) => {
    const res = await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`, {
        next: {revalidate: 3600}
    })
    const data = await res.json()
    return data
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

const ProductPage = async({params}:ProductPageType) => {
    const {id} = await params
    const product = await getProducts(id)

    let pct:number|string = Math.abs(product.change.pct)
    if(product.change.pct === 0) pct = pct.toFixed(1)

    const priceIncrease = Math.abs(Math.round((product.today * product.change.pct) / 100))

    return (
        <div className='mx-5 lg:mx-40 mt-6 mb-36 flex flex-col items-start justify-center gap-6'>
            {/* navigation */}
            <p className='text-[#1d271f] text-sm font-normal flex flex-row justify-start items-center gap-2'>
                <Link href={'/'} className='hover:underline'>হোম</Link> 
                <TfiAngleRight className='text-[#1d271f] text-sm font-normal' /> 
                <Link href={`/categories/${product.category}`} className='hover:underline'>{product.categoryNameBn}</Link> 
                <TfiAngleRight className='text-[#1d271f] text-sm font-normal' /> 
                {product.nameBn}
            </p>
            {/* product title */}
            <div className='bg-[#fafcfa] rounded-2xl border border-[#e1e8e1] p-5 flex flex-row flex-wrap gap-4 justify-between w-full items-center'>
                {/* product info */}
                <div className='flex flex-row justify-start items-center gap-2'>
                    <h1 className='bg-[#f0f5f0] text-4xl px-4 py-5 rounded-2xl'>{product.image}</h1>
                    <div className='flex flex-col justify-between items-start gap-1'>
                        <div className='flex flex-col justify-between items-start'>
                            <h1 className='text-[#1d271f] text-3xl font-bold'>{product.nameBn}</h1>
                            <p className='text-[#1d271fb3] text-sm font-normal'>প্রতি {unitToBn(product.unit)} · {product.categoryNameBn}</p>
                        </div>
                        <p className='text-[#1d271fb3] text-sm font-normal'>
                            গতকালের তুলনায় আজ দাম 
                            <span className='font-semibold'> {product.change.dir === 'up' ? 'বেড়েছে' : product.change.dir === 'down' ? 'কমেছে' : 'অপরিবর্তিত'} </span>
                            <span> {product.change.dir === 'flat' ? '' : `${digitToBn(priceIncrease)}`}  টাকা</span>
                        </p>
                    </div>
                </div>
                {/* price */}
                <div className='rounded-2xl bg-[#f0f5f0] px-6 py-5 flex flex-col justify-between items-center gap-1'>
                    <p className='text-[#1d271fb3] text-sm font-normal'>আজকের দাম</p>
                    <h1 className='text-[#1d271f] text-3xl font-bold'>{digitToBn(product.today)}</h1>
                    <p className='text-[#1d271fb3] text-sm font-normal'> টাকা / {unitToBn(product.unit)}</p>
                    <p 
                    className={`flex flex-row justify-between items-center text-sm font-semibold gap-1 
                    ${product.change.dir === 'up' ? 'text-[#d03739]' : product.change.dir === 'down' ? 'text-[#1a9951]' : 'text-[#1d271f]'}`}>
                        {product.change.dir === 'up' ? <TbTriangleFilled className='text-[10px]' /> :
                        product.change.dir === 'down' ? <TbTriangleInvertedFilled className='text-[10px]' /> : '—'} 
                        {digitToBn(pct)}% 
                    </p>
                </div>
            </div>
            {/* whole details */}
            <Details product={product} />
        </div>
    );
};

export default ProductPage;