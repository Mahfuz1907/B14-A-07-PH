import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const today = new Date()
const formatedDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}).format(today)

const Banner = () => {
    return (
        <div className='bg-[#fafcfa] mx-5 lg:mx-40 my-8 border border-[#e1e8e1] rounded-3xl p-4 flex flex-col md:flex-row justify-between items-start'>
            {/* banner content */}
            <div className='flex flex-col justify-start items-start gap-4 max-w-xl'>
                <div className='flex flex-col justify-start items-start gap-2'>
                    <Button 
                    variant='secondary' 
                    className={'rounded-[14px] bg-[#05893e1a] px-3 py-1 text-[#05893e] text-sm font-medium cursor-text'}>
                        {formatedDate}
                    </Button>
                    <h1 className='text-4xl font-bold text-[#1d271f]'>আজকের বাজারের দাম এক নজরে</h1>
                </div>
                <p className='text-[#1d271fb3] text-base font-normal'>
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                </p>
                <Link href={'#products'}>
                    <Button className={'bg-[#05893e] text-white font-semibold text-base rounded-lg hover:bg-[#036c31]'}>
                        সব পণ্য দেখুন
                    </Button>
                </Link>
            </div>
            {/* banner image */}
            <div className='relative overflow-hidden w-78.75 h-65.75'>
                <Image 
                src={'/bazar-hero.png'} 
                alt='banner-img'
                fill
                />
            </div>
        </div>
    );
};

export default Banner;