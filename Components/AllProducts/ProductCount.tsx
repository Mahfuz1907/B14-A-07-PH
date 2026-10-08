'use client'

import { useProducts } from '@/Context/ProductsContext';

const digitToBn = (num: number | string): string => {
    const bnDigits: { [key: string]: string } = {
    "0": "০", "1": "১", "2": "২", "3": "৩", "4": "৪",
    "5": "৫", "6": "৬", "7": "৭", "8": "৮", "9": "৯", ".": "."
  };
  return num.toString().replace(/[0-9]/g, (digit) => bnDigits[digit] || digit);
}

const ProductCount = () => {
    const {products} = useProducts()
    return (
            <p className='text-[#1d271fb3] text-sm font-normal'>মোট {digitToBn(products.length)}টি পণ্য দেখানো হচ্ছে</p>
    );
};

export default ProductCount;