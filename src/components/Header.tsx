import Link from 'next/link';
import React from 'react';
import { cookies } from 'next/headers';
import ButtonLogout from '@/components/ButtonLogout';

export default function Header() {
	const isAuth = cookies().get('token');

	return (
		<header>
			<nav className='border-b-2 border-gray-400 shadow-md'>
				<div className='flex justify-between max-w-[1200px] mx-auto items-center'>
					{isAuth ? (
						<>
							<div>LOGO</div>
							<ul className='flex gap-2 py-4'>
								<Link href={'/meals'}>All meals</Link>
								<Link href={'/login'}>Favourites</Link>
								<ButtonLogout />
							</ul>
						</>
					) : (
						<>
							<div>LOGO</div>
							<ul className='flex gap-2 py-4'>
								<Link href={'/meals'}>All meals</Link>
								<Link href={'/login'}>Login in</Link>
								<Link href={'/register'}>Get Start</Link>
							</ul>
						</>
					)}
				</div>
			</nav>
		</header>
	);
}
