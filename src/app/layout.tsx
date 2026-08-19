import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Vision Creators (NVC) | Full-Service Social Media & Growth Agency',
  description: 'Full-service social media marketing, in-house video studio production, and growth strategies for immigration consultants, law firms, educational institutes, e-commerce brands, and consulting businesses in Pakistan & worldwide.',
  keywords: ['Social Media Agency Pakistan', 'Kamoke Gujranwala Agency', 'Video Production Studio', 'Immigration Marketing', 'Lawyer Social Media', 'YouTube Automation', 'Next Vision Creators'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#08080C] text-gray-100 antialiased selection:bg-blue-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
