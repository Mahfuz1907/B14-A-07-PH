'use client'

import { ProductsPromiseTypes } from '@/type';
import React, { useContext } from 'react';
import Card from './Card';
import { ProductsContext } from '@/Context/ProductsContext';

interface ProductsCard{
    products: ProductsPromiseTypes[]
}

const Products = ({products}:ProductsCard) => {
    const {sortBy} = useContext(ProductsContext)
    const sortedArray = (sortBy === 'lowToHigh' ? products.sort((a, b) => a.today - b.today)
                       : sortBy === 'highToLow' ? products.sort((a, b) => b.today - a.today)
                                                : products)

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-start w-full gap-4'>
            {sortedArray.map((product:ProductsPromiseTypes) => <Card key={product.id} product={product} />)}
        </div>
    );
};

export default Products;