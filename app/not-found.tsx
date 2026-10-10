export const dynamic = 'force-dynamic';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <p>Apni je page-ti khujchen taha paowa jayni.</p>
      <Link href="/" className="px-4 py-2 bg-[#05893e] text-white rounded-lg">
        Home Page-e phire jan
      </Link>
    </div>
  );
}