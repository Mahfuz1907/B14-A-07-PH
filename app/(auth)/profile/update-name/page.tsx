'use client'

import { updateUser, useSession } from '@/app/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { Suspense } from 'react';
import { toast } from 'react-toastify';

const UpdateNameContent = () => {
    const {data:session} = useSession()
    const router = useRouter()

    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const userData = Object.fromEntries(formData) as Record<string, string>
    
            const {data, error} = await updateUser({
                name: userData.name
            })

            if(data){
                toast.success('নাম হালনাগাদ সফল হয়েছে')
                router.push('/profile')
                return;
            }else if(error){
                toast.error('নাম হালনাগাদ সফল হয়নি')
                return;
            }
    };

    return (
        <div className='bg-[#fafcfa] border border-[#e1e8e1] mx-5 lg:mx-auto lg:w-176 mt-10 rounded-2xl p-6 flex flex-col justify-center items-start gap-8'>
            <h1 className='text-lg font-semibold'>নাম হালনাগাদ করুন</h1>
            <Form className="flex flex-col gap-8 w-full" onSubmit={onSubmit}>
                <TextField
                    name="name"
                    type="text"
                    defaultValue={session?.user?.name}
                    className={'w-full'}
                    validate={(value) => {
                    if (value.length < 3) {
                        return "আপনার নামে অবশ্যই তিনটি ক্যারেক্টার থাকতে হবে";
                    }
                    return null;
                    }}
                >
                    <Label>নাম</Label>
                    <Input 
                    placeholder='যেমন: রহিম উদ্দিন' 
                    className={'bg-[#fafcfa] w-full border border-[#e1e8e1] rounded-lg'} />
                    <FieldError />
                </TextField>
                <Button 
                type="submit" 
                className='bg-[#05893e] hover:bg-[#03622c] text-[#fafcfa] border text-sm drop-shadow-md drop-shadow-[#05893e] 
                font-semibold border-[#047f39] rounded-lg'>
                    নাম হালনাগাদ করুন
                </Button>
            </Form>
        </div>
    );
};


export default function UpdateName () {
    return (
        <Suspense fallback={<div className="p-10 text-center">লোডিং...</div>}>
            <UpdateNameContent />
        </Suspense>
    )
}