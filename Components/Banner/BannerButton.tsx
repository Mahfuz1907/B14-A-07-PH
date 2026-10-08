'use client'

import React from 'react';

const BannerButton = () => {

    const scrollToProducts = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const element = document.getElementById('products');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    return (
        <button 
        onClick={(e) => scrollToProducts(e)}
        className={'bg-[#05893e] text-white px-3.5 py-1.5 cursor-pointer font-semibold text-base rounded-lg hover:bg-[#036c31]'}>
            সব পণ্য দেখুন
        </button>
    );
};

export default BannerButton;