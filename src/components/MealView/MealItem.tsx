import Image from 'next/image';
import Link from 'next/link';
import Flag from 'react-world-flags';
import { Heart, Youtube } from 'lucide-react';
import { type MealProps } from '@/types';
import { regions } from '@/const';


export default function MealItem({ meals }: { meals: MealProps[] }) {
	const formattedText = meals[0].strInstructions.split('\r\n').map((line: string, index: number) => (
		<p
			key={index}
			className='mb-2'
		>
			{line}
		</p>
	));
	return (
		<article className='flex w-full flex-col gap-12 py-4 md:flex-row md:gap-24'>
			<div className='flex flex-1 flex-col justify-between pb-8 sm:pb-0'>
				<div className='flex  flex-col'>
					<div className='md:hidden float-left mx-auto md:float-right md:ml-4 mb-4'>
						<Image
							className='object-cover mix-blend-multiply md:w-[400px] md:h-[200px] rounded-xl xl'
							src={meals[0]?.strMealThumb || ''}
							alt={meals[0]?.strMeal}
							width={400}
							height={200}
						/>
					</div>
					<div className='flex items-center gap-4 md:gap-24'>
						<h1 className='mt-2 text-4xl font-bold'>{meals[0]?.strMeal}</h1>
					</div>

					<div className='w-fit flex gap-2 border-2 my-1 items-center py-1 px-3 bg-gray-200 border-gray-400 rounded-lg'>
						<div className='w-7'>
							<Flag code={regions[meals[0]?.strArea]} />
						</div>
						<span>Cuisine</span>
					</div>

					<div className='text-md mt-4'>
						<p className='italic text-gray-500'>Instructions</p>
						<div className='hidden md:flex float-left md:float-right md:ml-4 mb-4'>
							<Image
								className='object-cover mix-blend-multiply md:w-[400px] md:h-[400px] rounded-xl'
								src={meals[0]?.strMealThumb || ''}
								alt={meals[0]?.strMeal}
								width={400}
								height={200}
							/>
						</div>
						{formattedText}
					</div>
				</div>

				<button className='flex gap-3 border-2 bg-red-200 py-2 px-4 w-fit rounded-lg'>
					<Heart color={`gray`} /> Add to Favourite
				</button>

				<button className='flex gap-3 border-2 bg-red-200 py-2 px-4 w-fit rounded-lg'>
					<Heart color={`red`} /> Add to Favourite
				</button>

				<div className='flex items-center gap-1 mt-4'>
					<p className='font-semibold'>Need video instructions?</p>
					<Link
						className='text-blue-800 gap-1 flex underline underline-offset-1'
						href={meals[0]?.strYoutube}
					>
						Click here
						<Youtube />
					</Link>
				</div>
			</div>
		</article>
	);
}
