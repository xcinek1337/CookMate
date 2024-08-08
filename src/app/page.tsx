import Input from '@/components/Input';
import Link from 'next/link';

export default async function Home() {
	return (
		<main>
			<div className='relative flex justify-center items-center bg-center bg-no-repeat bg-cover bg-hero h-[39vh] sm:h-[50vh] md:h-[60vh] lg:h-[75vh] 2xl:h-[92vh]'>
				<div className='px-5 mr-40 mb-36 lg:mr-72 hidden md:flex flex-col'>
					<h1 className='mb-10 text-5xl 2xl:text-7xl font-Roboto font-bold text-white'>
						What we are cooking up today?
					</h1>
					<Input />
				</div>

				<div className='md:hidden flex flex-col '>
					<h1 className='mb-10 text-2xl font-Roboto font-bold text-white max-[350px]:text-xl'>
						What we are cooking up today?
					</h1>
					<Link href={'/meals/A'}>
						<button className='text-2xl font-semibold py-2 px-4 bg-yellow-300/60 rounded-xl'>Check recipes</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
