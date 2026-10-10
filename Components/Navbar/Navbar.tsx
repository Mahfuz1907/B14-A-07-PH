import Image from 'next/image';
import Categories from './Categories';
import Link from 'next/link';
import AuthButton from './AuthButton';

const today = new Date()
const formatedDate = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}).format(today)

const getCategories = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', {
        next: { revalidate: 3600 }
    })
    const data = await res.json()
    return data
}

const Navbar = async() => {
    const categories = await getCategories()
    
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
                <AuthButton />
            </div>
            {/* nav bottom */}
            <div className='border-t border-[#f0f5f0] py-2 px-5 lg:px-40'>
                <Categories categories={categories} />
            </div>
        </nav>
    );
};

export default Navbar;