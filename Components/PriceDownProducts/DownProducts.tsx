'use client'

import { useProducts } from '@/Context/ProductsContext';
import Card from './Card';

const DownProducts = () => {
    const {products} = useProducts()
    const priceUpProducts = 
    products.filter((product) => product.change.dir === 'down')
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0,6)
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between items-start gap-4 w-full'>
            {
                priceUpProducts.map((product) => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default DownProducts;