'use client'

import { signIn } from "@/app/lib/auth-client";
import {Button, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const SignInPage = () => {
    const router = useRouter()
    const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData) as Record<string, string>
        
        const { data, error } = await signIn.email({
            email: userData.email, 
            password: userData.password, 
            rememberMe: true, 
        });

        if(data){
            toast.success('সাইন ইন সফল হয়েছে')
            console.log(data)
            router.push('/')
            return;
        }else if(error){
            toast.error('সাইন ইন সফল হয়নি')
            console.log(error)
            return;
        }
    };
    return (
        <div className="mx-auto mt-10 mb-20 text-[#1d271f] flex flex-col justify-between items-center gap-6">
            <div className="flex flex-col justify-center items-center gap-1">
                <h1 className="text-center text-2xl font-bold">সাইন ইন</h1>
                <p className="text-[#1d271fb3] text-sm font-normal">বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            </div>
            <Form className="flex w-96 flex-col gap-4 text-sm font-medium bg-[#fafcfa] border border-[#e1e8e1] rounded-2xl p-6" onSubmit={onSubmit}>
                <TextField
                    name="email"
                    type="email"
                    validate={(value) => {
                    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                        return "দয়া করে সঠিক ইমেইল অ্যাড্রেস লিখুন";
                    }
                    return null;
                    }}
                >
                    <Label>ইমেইল</Label>
                    <Input placeholder="you@example.com" className={'w-full rounded-lg bg-[#fafcfa] border border-[#e1e8e1] placeholder:font-normal'} />
                    <FieldError />
                </TextField>
                <TextField
                    name="password"
                    type="password"
                    validate={(value) => {
                    if (value.length < 8) {
                        return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                    }
                    return null;
                    }}
                >
                    <Label>পাসওয়ার্ড</Label>
                    <Input placeholder="কমপক্ষে ৮ অক্ষর" className={'w-full rounded-lg bg-[#fafcfa] border border-[#e1e8e1] placeholder:font-normal'} />
                    <FieldError />
                </TextField>
                <Button type="submit" className={'w-full drop-shadow-md drop-shadow-[#05893e] rounded-lg bg-[#05893e] hover:bg-[#04652e] border border-[#047539]'}>
                    সাইন ইন
                </Button>
                <div className="divider divider-neutral before:bg-[#1d271f1a] after:bg-[#1d271f1a]">অথবা</div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-between items-center w-full">
                    <button className="btn bg-[#fafcfa] rounded-lg px-4 py-6 hover:bg-gray-200 text-[#1d271f] border-[#e1e8e1]">
                        <svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Google দিয়ে চালিয়ে যান
                    </button>
                    <button className="btn bg-[#fafcfa] rounded-lg px-4 py-6 hover:bg-gray-200 text-[#1d271f] border-[#e1e8e1]">
                        <svg aria-label="GitHub logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current"><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>
                        GitHub দিয়ে চালিয়ে যান
                    </button>
                </div>
                <p className="text-sm font-normal w-full text-center">অ্যাকাউন্ট নেই? <Link href={'/sign-up'} className="text-[#05893e] hover:underline">সাইন আপ করুন</Link></p>
            </Form>
            <Link href={'/'} className="text-[#1d271f99] text-sm font-normal hover:underline">← হোম পেজে ফিরে যান</Link>
        </div>
    );
};

export default SignInPage;