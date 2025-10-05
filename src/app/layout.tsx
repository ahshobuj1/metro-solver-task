import type {Metadata} from 'next';
import {Outfit} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/pages/Shared/Navbar';
import Footer from '@/components/pages/Shared/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Metro Solver',
  description: 'Metro solver is a tech company',
  icons: {
    icon: '/globe.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${outfit.variable} antialiased`}>
        <main className="max-w-[1600px] mx-auto bg-[#020004]">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
