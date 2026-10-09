'use client'

import { ProductsContext } from '@/Context/ProductsContext';
import React, { useContext } from 'react';

const SortButton = () => {
    const {sortBy, setSortBy} = useContext(ProductsContext)

    const handleSort = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value)
    }
    return (
        <div className="flex flex-row justify-end items-center gap-2.5">
            <p className="text-[#1d271fb3] text-sm font-normal">সাজান</p>
            <select 
            value={sortBy}
            onChange={(e) => handleSort(e)}
            className="select bg-[#fafcfa] flex flex-row justify-start gap-4 text-[#1d271f] text-sm font-normal">
                <option value={'default'} disabled={true}>ডিফল্ট</option>
                <option value={'lowToHigh'}>দাম: কম থেকে বেশি</option>
                <option value={'highToLow'}>দাম: বেশি থেকে কম</option>
            </select>
        </div>
    );
};

export default SortButton;