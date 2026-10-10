'use client'

import { useSession } from '@/app/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React from 'react';

const UpdateName = () => {
    const {data:session} = useSession()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const userData = Object.fromEntries(formData) as Record<string, string>
    
            console.log(userData)
    };

    return (
        <div className='bg-[#fafcfa] border border-[#e1e8e1] rounded-2xl p-6 w-full flex flex-col justify-center items-start gap-2'>
            <h1 className='text-lg font-semibold'>নাম হালনাগাদ করুন</h1>
            <Form className="flex flex-col gap-4 w-full" onSubmit={onSubmit}>
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

export default UpdateName;