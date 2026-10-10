import { ProductsPromiseTypes } from '@/type';
import React from 'react';
import Food from './Food';
import './Ticker.css'

const getFood = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
        next: { revalidate: 3600 }
    })
    const data = await res.json()
    return data
}

const FoodTicker = async() => {
    const foods = await getFood()

    return (
        <div className='bg-[#fafcfa] border-b border-[#e1e8e1] animate-marquee whitespace-nowrap flex flex-row items-center gap-4'>
            {
                foods.map((food:ProductsPromiseTypes) => 
                    <Food key={food.id} food={food} />
                )
            }

            {/* duplicate rendering for seamless infinite loops */}
            {
                foods.map((food:ProductsPromiseTypes) => 
                    <Food key={food.id} food={food} />
                )
            }
        </div>
    );
};

export default FoodTicker;