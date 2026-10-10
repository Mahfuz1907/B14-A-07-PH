import { FolderX } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CategoryNotFound = () => {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-12">
                    {/* Icon Container */}
                    <div className="w-20 h-20 bg-[#e8f0e9] text-[#1d271f] rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <FolderX className="w-10 h-10" />
                    </div>

                    {/* 404 Header */}
                    <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
                        ৪০৪ - পণ্য পাওয়া যায়নি
                    </span>

                    {/* Main Title */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#1d271f] mb-3">
                        পণ্য খুঁজে পাওয়া যায়নি
                    </h1>

                    {/* Subtitle Message */}
                    <p className="text-gray-600 max-w-md text-base mb-8 leading-relaxed">
                        আপনি যে পণ্যটি খুঁজছেন সেটি বিদ্যমান নেই।
                    </p>

                    {/* CTA Button */}
                    <Link
                        href="/"
                        className="btn bg-[#05893e] hover:bg-[#036c31] text-white border-none px-6 py-2.5 rounded-lg shadow-md transition-all duration-200"
                    >
                        হোম পেজে ফিরে যান
                    </Link>
                </div>
    );
};

export default CategoryNotFound;