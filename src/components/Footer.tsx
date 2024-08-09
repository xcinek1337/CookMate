import { FacebookIcon, LinkedinIcon, TwitterIcon, Youtube } from 'lucide-react';
export default function Footer() {
	return (
		<footer className='absolute bottom-0 w-full bg-gray-800 text-gray-300'>
			<div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-evenly mx-auto max-w-md p-12 sm:max-w-2xl  md:max-w-4xl lg:max-w-7xl px-4'>
				<ul className='flex flex-col gap-0.5 text-sm'>
					<li>
						<h3 className='font-Dancing text-xl mb-1 font-bold'>CookMate</h3>
					</li>
					<li>Ulica słowiańska 21/37</li>
					<li>45-573 Wrocław</li>
					<li>Poland</li>
				</ul>
				<ul className='flex flex-col gap-0.5 text-sm'>
					<li>
						<h3 className='text-xl mb-1 font-medium'>Solutions</h3>
					</li>
					<li className='hover:text-white transition cursor-pointer '>Healthcare meals</li>
					<li className='hover:text-white transition cursor-pointer '>Insurance</li>
					<li className='hover:text-white transition cursor-pointer '>HR sector</li>
					<li className='hover:text-white transition cursor-pointer '>For strong activity persons</li>
				</ul>
				<ul className='flex flex-col gap-4'>
					<li className='pb-1 border-b-2 border-gray-600 md:px-10 w-36 text-sm text-center cursor-pointer hover:text-white transition'>
						Contact us
					</li>
					<li className='pb-1 border-b-2 border-gray-600 md:px-10 w-36 text-sm text-center cursor-pointer hover:text-white transition'>
						Join us
					</li>
				</ul>
				<ul className='flex md:gap-3 justify-evenly cursor-pointer'>
					<li>
						<FacebookIcon className='hover:text-yellow-300 transition' />
					</li>
					<li>
						<LinkedinIcon className='hover:text-yellow-300 transition' />
					</li>
					<li>
						<TwitterIcon className='hover:text-yellow-300 transition' />
					</li>
					<li>
						<Youtube className='hover:text-yellow-300 transition' />
					</li>
				</ul>
			</div>
			<div className='flex gap-12 text-[12px] py-2 justify-center'>
				<span>© 2024 COOKMATE</span> <span>LEGACY POLICY</span>
			</div>
		</footer>
	);
}
