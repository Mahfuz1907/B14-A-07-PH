import React from 'react';
import SortButton from './SortButton';
import Products from './Products';
import { notFound } from 'next/navigation';

interface CategoryPageTypes{
    params: Promise<{id:string}>
}

const getCategories = async (id:string) => {
    if(!id) return null
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/categories/${id}`,{
        next: {revalidate: 3600}
    })
    const data = await res.json()
    return data
}

const getCatProducts = async (id:string) => {
    if(!id) return null
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${id}`,{
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


export async function generateMetadata({params}:CategoryPageTypes){
    const {id} = await params
    const category = await getCategories(id)

    if(!category || !category.nameBn){
        return {
            title: 'ক্যাটাগরি নেই — বাজার দর',
            icons: {
                icon: '/logo-icon.png'
            }
        }
    }

    return {
        title: `${category.nameBn} — বাজার দর`,
        icons:{
            icon: `/logo-icon.png`
        }
    }
}


const CategoryPage = async({params}:CategoryPageTypes) => {
    const {id} = await params
    const category = await getCategories(id)
    const products = await getCatProducts(id)

    if(!category || !category.nameBn){
        notFound()
    }

    return (
        <div className='mx-5 lg:mx-40 mt-6 mb-29 flex flex-col justify-center items-start gap-6'>
            {/* category information */}
            <div className='bg-[#fafcfa] w-full border border-[#e1e8e1] rounded-2xl p-5 flex flex-row justify-start items-center gap-3'>
                {/* image */}
                <h1 className='text-4xl'>{category.icon}</h1>
                {/* information */}
                <div>
                    <h1 className='text-[#1d271f] text-2xl font-bold'>{category.nameBn}</h1>
                    <p className='text-[#1d271fb3] text-sm font-normal'>{digitToBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                </div>
            </div>
            {/* products */}
            <div className='flex flex-col justify-center items-start gap-4 w-full'>
                {/* title and sort button */}
                <div className='w-full flex flex-row justify-between items-center'>
                    <p className='text-[#1d271fb3] text-sm font-normal'>মোট {digitToBn(products.length)}টি পণ্য দেখানো হচ্ছে</p>
                    <SortButton />
                </div>
                {/* products list */}
                <Products products={products} />
            </div>
        </div>
    );
};

export default CategoryPage;