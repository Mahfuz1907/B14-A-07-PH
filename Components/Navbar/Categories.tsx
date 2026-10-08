import { CategoriesPromiseTypes } from '@/type';
import Link from 'next/link';
import React from 'react';


const getCategories = async() => {
    const res = await fetch('https://api.api-store.workers.dev/api/bazardor/categories', {
        next: { revalidate: 3600 }
    })
    const data = await res.json()
    return data
}

const Categories = async() => {
    const categories = await getCategories()

    return (
        <div className='flex flex-row flex-wrap justify-start items-center gap-2'>
            {
                categories.map((category:CategoriesPromiseTypes) => 
                <Link href={`/categories/${category.id}`} key={category.id} 
                className='flex flex-row flex-wrap justify-between text-[#1d271f] text-xs font-semibold items-center gap-1 cursor-pointer hover:bg-gray-300 px-3 py-1.5 rounded-lg'>
                    <h1>{category.icon}</h1>
                    <h1>{category.nameBn}</h1>
                </Link>
                )
            }
        </div>
    );
};

export default Categories;