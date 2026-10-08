'use client'

import Card from './Card';
import { useProducts } from '@/Context/ProductsContext';

const UpProducts = () => {
    const {products} = useProducts()
    const priceUpProducts = 
    products.filter((product) => product.change.dir === 'up')
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0,6)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-start gap-4 w-full'>
            {
                priceUpProducts.map((product) => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default UpProducts;