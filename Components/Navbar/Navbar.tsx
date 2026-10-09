import { Button } from '@heroui/react';
import Image from 'next/image';
import Categories from './Categories';
import Link from 'next/link';

const today = new Date()
const formatedDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}).format(today)

const Navbar = () => {
    return (
        <nav className='bg-[#fafcfa] border-b border-[#e1e8e1] sticky top-0 z-50'>
            {/* nav head */}
            <div className='py-3 px-5 lg:px-40 flex flex-row justify-between items-center'>
                {/* logo */}
                <Link href={'/'} className='flex group flex-row justify-start items-center gap-2'>
                    {/* image */}
                    <div className='px-2 py-1.5 bg-[#05893e] rounded-xl'>
                    <div className='relative overflow-hidden w-6 h-7.5'>
                        <Image 
                        src={'/logo-icon.png'} 
                        alt='logo' 
                        fill 
                        className='object-contain brightness-2000 contrast-500 group-hover:scale-105'
                        />
                    </div>
                    </div>
                    {/* name & date */}
                    <div className='flex flex-col justify-between items-start'>
                        <h1 className='text-[#1d271f] text-xl font-bold'>বাজার দর</h1>
                        <p className='text-[#1d271f] text-xs font-normal'>{formatedDate}</p>
                    </div>
                </Link>
                {/* auth button */}
                <div className='flex flex-row justify-end items-center gap-1 sm:gap-4 flex-wrap'>
                    <Link href={'/sign-in'}> 
                    <Button 
                    variant='secondary' 
                    className={'text-[#1d271f] font-semibold text-base rounded-lg bg-[#fafcfa] hover:bg-gray-300'}>
                        সাইন ইন
                    </Button>
                    </Link>

                    <Link href={'/sign-up'}>
                    <Button 
                    className={'bg-[#05893e] text-white font-semibold drop-shadow-md drop-shadow-[#05893e] text-base rounded-lg hover:bg-[#036c31]'}>
                        সাইন আপ
                    </Button> 
                    </Link>
                </div>
            </div>
            {/* nav bottom */}
            <div className='border-t border-[#f0f5f0] py-2 px-5 lg:px-40'>
                <Categories />
            </div>
        </nav>
    );
};

export default Navbar;