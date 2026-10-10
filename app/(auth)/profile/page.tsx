'use client'

export const dynamic = 'force-dynamic';

import { signOut, useSession } from '@/app/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import {Button} from "@heroui/react";
import Link from 'next/link';

const ProfilePage = () => {
    const {data:session} = useSession()
    const router = useRouter()
    const profileIcon = session?.user?.name.trim().split("")[0].toUpperCase()

    return (
        <div className='mt-10 text-[#1d271f] mx-5 lg:mx-auto lg:w-176 flex flex-col justify-center items-start gap-6 bg-[#f0f5f0]'>
            {/* profile title */}
            <div className='flex flex-col justify-between items-start gap-1'>
                <h1 className='text-2xl font-bold'>আমার প্রোফাইল</h1>
                <p className='text-[#1d271fb3] text-sm font-normal'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>
            {/* profile details */}
            <div className='bg-[#fafcfa] border border-[#e1e8e1] rounded-2xl py-6 gap-14 px-6 w-full flex flex-col justify-center items-center'>
                <div className='flex flex-row justify-between items-start w-full lg:gap-50'>
                    <div className='flex flex-row flex-wrap justify-start items-center gap-4'>
                    <button className='text-2xl font-bold text-[#fafcfa] bg-[#05893e] px-8 py-1 rounded-2xl'>
                        {profileIcon}
                    </button>
                    <div>
                        <h1 className='text-xl font-normal'>{session?.user?.name}</h1>
                        <p className='text-[#1d271fb3] text-base font-normal'>{session?.user?.email}</p>
                    </div>
                    </div>
                    <Button 
                onClick={() => signOut({
                    fetchOptions: {
                        onSuccess: () => {
                            toast.success('সাইন আউট সফল হয়েছে')
                            router.push('/sign-in')
                        }
                    }
                })}
                variant='secondary' 
                className='rounded-lg border text-sm font-semibold border-[#d03739] hover:text-[#fafcfa] hover:bg-[#d03739]
                px-4 py-px bg-[#fafcfa] text-[#d03739]'
                >
                    ↩ সাইন আউট
                    </Button>
                </div>
                {/* update page link */}
                <Link href={'/profile/update-name'} 
                type="submit" 
                className='bg-[#05893e] hover:bg-[#03622c] text-[#fafcfa] border text-sm drop-shadow-md drop-shadow-[#05893e] 
                font-semibold border-[#047f39] rounded-lg px-4 py-2'>
                    নাম হালনাগাদ করুন
                </Link>
            </div>
        </div>
    );
};

export default ProfilePage;