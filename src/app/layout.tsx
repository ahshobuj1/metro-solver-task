import type {Metadata} from 'next';
import {Poppins, Roboto} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/pages/Shared/Navbar';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Metro Solver Task',
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
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <main className="max-w-[1440px] mx-auto">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
