import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NVC | Full-Service Social Media & Growth Agency',
  description: 'Full-service social media marketing, in-house video studio production, and growth strategies for immigration consultants, law firms, educational academies, e-commerce brands, and corporate businesses.',
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
        <link 
          href="https://fonts.googleapis.com/css2?family=League+Gothic&family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="bg-white text-[#0B132B] antialiased selection:bg-[#FFD000] selection:text-black">
        {children}
      </body>
    </html>
  );
}
