import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navigation/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'CookMate',
	description: 'Your private masterCheif',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.className} relative bg-zinc-100 min-h-screen flex flex-col scroll-smooth  pb-[536px] md:pb-[250px]`}
			>
				<Navbar />
				{children}
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
