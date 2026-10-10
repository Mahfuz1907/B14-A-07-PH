'use client'

import { signOut } from '@/app/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsBoxArrowLeft } from 'react-icons/bs';
import { FaCaretDown, FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';

interface SessionTypes{
    userData: {
        name: string,
        email: string
    } 
}

const AfterLogIn = ({userData}:SessionTypes) => {
    const router = useRouter()
    const profileIcon = userData.name.trim().split("")[0].toUpperCase()
    console.log(userData)
    return (
        <div>
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1 bg-[#fafcfa] hover:bg-gray-200 hover:rounded-lg border-0 shadow-none">
                    <span className='bg-[#05893e] text-[#fafcfa] text-sm font-bold rounded-2xl px-4 py-0.5'>{profileIcon}</span>
                    <span className='text-[#1d271f] text-sm font-medium'>{userData.name}</span> 
                    <FaCaretDown className='text-[#1d271fb3]' /> 
                </div>
                <div tabIndex={-1} 
                className="dropdown-content menu bg-[#fafcfa] rounded-box z-1 w-52 px-4 py-2 flex flex-col gap-3 text-[#1d271f] text-sm font-medium">
                    <Link href={'/profile'} className='flex flex-row justify-start items-center px-3 py-1 rounded-lg gap-2 hover:bg-gray-200'>
                        <FaUser className='text-purple-950' />আমার প্রোফাইল
                    </Link>
                    <button 
                    onClick={() => signOut({
                        fetchOptions: {
                            onSuccess: () => {
                                toast.success('সাইন আউট সফল হয়েছে')
                                router.push('/sign-in')
                            }
                        }
                    })}
                    className='flex flex-row justify-start items-center gap-2 px-3 py-1 rounded-lg text-[#d03739] cursor-pointer hover:bg-gray-200'>
                        <BsBoxArrowLeft />সাইন আউট
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AfterLogIn;