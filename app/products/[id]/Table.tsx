import { ProductsPromiseTypes } from '@/type';
import React from 'react';

interface TableType{
    product: ProductsPromiseTypes,
}


const digitToBn = (num: number | string): string => {
    const bnDigits: { [key: string]: string } = {
    "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪",
    "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯", ".": "."
  };
  return num.toString().replace(/[0-9]/g, (digit) => bnDigits[digit] || digit);
}


const Table = ({product}:TableType) => {
    return (
        <div className="overflow-x-auto w-full text-[#1d271f] bg-[#fafcfa] border border-[#e1e8e1] rounded-2xl">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr className='text-[#1d271f99] text-sm font-bold'>
                        <th className='border-b border-[#e1e8e1]'>বাজার</th>
                        <th className='border-b border-[#e1e8e1]'>বিভাগ</th>
                        <th className='border-b border-[#e1e8e1]'>সর্বনিম্ন</th>
                        <th className='border-b border-[#e1e8e1]'>সর্বাধিক</th>
                        <th className='border-b border-[#e1e8e1]'>গড়</th>
                    </tr>
                </thead>
                <tbody className='text-[#1d271f] text-sm font-normal'>
                    {
                        product.markets.map((market, index) => 
                        <tr key={market.market} className={`${index % 2 === 0 ? 'bg-[#fafcfa]' : 'bg-[#f0f5f0]'}`}>
                            <td className={`font-medium ${index === product.markets.length - 1 ? '' : 'border-b border-[#1d271f]'}`}>{market.market}</td>
                            <td className={`${index === product.markets.length - 1 ? '' : 'border-b border-[#1d271f]'}`}>{market.division}</td>
                            <td className={`${index === product.markets.length - 1 ? '' : 'border-b border-[#1d271f]'}`}>{digitToBn(market.min)} টাকা</td>
                            <td className={`${index === product.markets.length - 1 ? '' : 'border-b border-[#1d271f]'}`}>{digitToBn(market.max)} টাকা</td>
                            <td className={`font-semibold ${index === product.markets.length - 1 ? '' : 'border-b border-[#1d271f]'}`}>{digitToBn((market.max + market.min)/2)} টাকা</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;