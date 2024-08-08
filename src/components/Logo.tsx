import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
	return (
		<Link
			className='flex items-center'
			href={'/'}
		>
			<Image
				className='w-full'
				src={'/main-logo2.png'}
				alt='logo'
				height={50}
				width={50}
			/>
			<span className='pt-2 ml-1 hover:text-yellow-300 transition font-Dancing'>CookeMate</span>
		</Link>
	);
}
