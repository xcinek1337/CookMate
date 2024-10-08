'use client';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Input from '@/components/Input';

const navRoutes = [
	{ href: '/meals/B', name: 'All meals' },
	{ href: '/regional/Polish', name: 'Regional meals' },
	{ href: '/random', name: 'Random meal' },
];

export default function Navigation({ isAuth }: { isAuth: RequestCookie | undefined }) {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const handleLinkClick = () => {
		setIsOpen(false);
	};
	const handleLogout = async () => {
		const res = await fetch('/api/logout', {
			method: 'POST',
		});
		if (res.ok) {
			window.location.reload();
		} else {
			console.error('Failed to log out');
		}
	};
	return (
		<>
			{isAuth ? (
				<ul
					className={`${
						isOpen ? 'menu-open' : 'hidden'
					} md:flex gap-2 py-4 md:items-center text-base lg:text-xl bg-gray-800 md:bg-transparent font-serif`}
				>
					<div className=' md:hidden'>
						<Input handleLinkClick={handleLinkClick} />
					</div>
					{navRoutes.map((link) => {
						return (
							<Link
								key={link.name}
								onClick={handleLinkClick}
								className={`${
									pathname.startsWith(link.href) ? 'text-orange-300' : ''
								} mx-2 hover:text-yellow-300 transition`}
								href={link.href}
							>
								{link.name}
							</Link>
						);
					})}
					<Link
						className={`${
							pathname.startsWith('/favourites') ? 'text-orange-300' : ''
						} mx-2 hover:text-yellow-300 transition`}
						href={'/favourites'}
						onClick={handleLinkClick}
					>
						Favourites
					</Link>

					<button
						className='mx-2 text-gray-800 font-bold  py-3 md:py-1.5 px-4 text-center  bg-yellow-300 rounded-full hover:bg-yellow-500 hover:text-gray-600 transition'
						onClick={handleLogout}
					>
						Log Out
					</button>
				</ul>
			) : (
				<ul
					className={`${
						isOpen ? 'menu-open' : 'hidden'
					} md:flex gap-2 py-4 md:items-center text-base lg:text-xl bg-gray-800 md:bg-transparent font-serif`}
				>
					<div className='md:hidden'>
						<Input handleLinkClick={handleLinkClick} />
					</div>
					{navRoutes.map((link) => {
						return (
							<Link
								key={link.name}
								onClick={handleLinkClick}
								className={`${
									pathname.startsWith(link.href) ? 'text-orange-300' : ''
								} mx-2 hover:text-yellow-300 transition`}
								href={link.href}
							>
								{link.name}
							</Link>
						);
					})}
					<Link
						className='mx-2 font-bold  py-3 md:py-1.5 px-4 text-center border-2 border-yellow-300 text-yellow-300 rounded-full hover:bg-yellow-500 hover:text-gray-600 transition'
						href={'/login'}
						onClick={handleLinkClick}
					>
						Get Started
					</Link>
				</ul>
			)}
			<div className='md:hidden flex items-center'>
				<button
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/200/svg'
					>
						{isOpen ? (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							></path>
						) : (
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16m-7 6h7'
							></path>
						)}
					</svg>
				</button>
			</div>
		</>
	);
}
