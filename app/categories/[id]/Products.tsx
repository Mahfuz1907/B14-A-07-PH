'use client'

import { ProductsPromiseTypes } from '@/type';
import React, { useContext } from 'react';
import Card from './Card';
import { ProductsContext } from '@/Context/ProductsContext';
import { FolderX } from 'lucide-react';
import Link from 'next/link';

interface ProductsCard{
    products: ProductsPromiseTypes[]
}

const Products = ({products}:ProductsCard) => {
    const {sortBy} = useContext(ProductsContext)
    const sortedArray = (sortBy === 'lowToHigh' ? products.sort((a, b) => a.today - b.today)
                       : sortBy === 'highToLow' ? products.sort((a, b) => b.today - a.today)
                                                : products)

    return (
        <div className='w-full'>
            {
            products.length === 0 ? (
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
                    {/* Icon Container */}
                    <div className="w-20 h-20 bg-[#e8f0e9] text-[#1d271f] rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <FolderX className="w-10 h-10" />
                    </div>

                    {/* 404 Header */}
                    <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                        ৪০৪ - ক্যাটাগরি পাওয়া যায়নি
                    </span>

                    {/* Main Title */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#1d271f] mb-3">
                        কোনো পণ্য খুঁজে পাওয়া যায়নি
                    </h1>

                    {/* Subtitle Message */}
                    <p className="text-gray-600 max-w-md text-base mb-8 leading-relaxed">
                        আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি বিদ্যমান নেই অথবা বর্তমানে এই ক্যাটাগরিতে কোনো পণ্য নেই।
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/"
                        className="btn bg-[#1d271f] hover:bg-[#2b3a2f] text-white border-none px-6 py-2.5 rounded-lg shadow-md transition-all duration-200"
                    >
                        হোম পেজে ফিরে যান
                    </Link>
                </div>
            ):(
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-start w-full gap-4'>
                {sortedArray.map((product:ProductsPromiseTypes) => <Card key={product.id} product={product} />)}
            </div>
            )}
        </div>
    );
};

export default Products;