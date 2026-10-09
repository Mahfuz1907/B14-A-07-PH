'use client'

import { signOut, useSession } from '@/app/lib/auth-client';
import { Button, Spinner } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const AuthButton = () => {
    const { data: session, isPending } = useSession()
    const router = useRouter()

    if(isPending){
        return (
                <div className="flex flex-col items-center gap-2">
                <Spinner color="success" size="lg" />
                <span className="text-xs text-muted">Large</span>
              </div>
            );
    }

    return (
        <div className='flex flex-row justify-end items-center gap-1 sm:gap-4 flex-wrap'>
            {
                session?.user ? <>
                <Button 
                onClick={() => signOut({
                    fetchOptions: {
                        onSuccess: () => {
                        toast.success('সাইন আউট সফল হয়েছে')
                        router.push("/sign-in"); // redirect to login page
                        },
                    },
                })} 
                className={'bg-[#05893e] text-white font-semibold drop-shadow-md drop-shadow-[#05893e] text-base rounded-lg hover:bg-[#036c31]'}>
                সাইন আউট
                </Button>
                </> : 
                <>
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
                </>
            }
        </div>
    );
};

export default AuthButton;