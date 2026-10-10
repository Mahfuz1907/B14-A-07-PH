export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h2 className="text-2xl font-bold">৪০৪ - পেজ পাওয়া যায়নি</h2>
      <p>আপনি যে পেজটি খুজছেন তা পাওয়া যায় নি</p>
      <Link href="/" className="px-4 py-2 bg-[#05893e] hover:bg-[#02672e] text-white rounded-lg">
        হোম এ ফিরে যান
      </Link>
    </div>
  );
}