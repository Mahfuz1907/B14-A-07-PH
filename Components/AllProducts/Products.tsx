'use client'

import { ProductsContext, useProducts } from '@/Context/ProductsContext';
import Card from './Card';
import { useContext } from 'react';

const Products = () => {
    const {products} = useProducts()
    const {sortBy} = useContext(ProductsContext)
    const sortedArray = (sortBy === 'lowToHigh' ? products.sort((a, b) => a.today - b.today)
                       : sortBy === 'highToLow' ? products.sort((a, b) => b.today - a.today)
                                                : products)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-start gap-4 w-full'>
            {
                sortedArray.map((product) => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default Products;