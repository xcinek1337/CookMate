import Logo from '@/components/Navigation/Logo';
import Navigation from '@/components/Navigation/Navigation';
import { cookies } from 'next/headers';

export default function Navbar() {
	const isAuth = cookies().get('token');
	return (
		<header>
			<nav className='bg-gray-800 text-white'>
				<div className='relative px-4 flex justify-between max-w-[1200px] h-16 md:text-xl  mx-auto items-center'>
					<Logo />

					<Navigation isAuth={isAuth} />
				</div>
			</nav>
		</header>
	);
}
