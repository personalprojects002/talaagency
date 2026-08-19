import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6 space-y-4">
      <h1 className="font-heading text-6xl font-bold text-sociallyin-blue">404</h1>
      <h2 className="font-heading text-2xl font-bold text-sociallyin-textDark uppercase">PAGE NOT FOUND</h2>
      <p className="text-sm font-medium text-gray-500 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-yellow text-sm px-6 py-3 rounded-md">
        RETURN TO HOMEPAGE
      </Link>
    </div>
  );
}
