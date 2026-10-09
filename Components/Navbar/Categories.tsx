'use client'

import { CategoriesPromiseTypes } from '@/type';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CategoriesType{
    categories: CategoriesPromiseTypes[],
}

const Categories = ({categories}:CategoriesType) => {
    const pathName = usePathname()

    const designNavs = (path:string) => {
        return path === pathName
    }
    return (
        <div className='flex flex-row flex-wrap justify-start items-center gap-2'>
            {
                categories.map((category:CategoriesPromiseTypes) => 
                <Link href={`/categories/${category.id}`} key={category.id} 
                className={`flex flex-row flex-wrap justify-between 
                ${designNavs(`/categories/${category.id}`) ? 'bg-[#05893e] text-[#fafcfa]' : ''} text-[#1d271f] text-xs font-semibold items-center 
                gap-1 cursor-pointer hover:bg-gray-300 px-3 py-1.5 rounded-lg`}>
                    <h1>{category.icon}</h1>
                    <h1>{category.nameBn}</h1>
                </Link>
                )
            }
        </div>
    );
};

export default Categories;