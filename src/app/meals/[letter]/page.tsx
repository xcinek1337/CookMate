import MealList from '@/components/MealView/MealList';
import Link from 'next/link';
import { letters } from '@/const';

export default async function MealsPage({ params }: { params: { letter: string } }) {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${params.letter}`);
	const { meals } = await response.json();

	return (
		<section>
			<h3 className='my-4 text-center font-semibold text-gray-700 px-4'>Browse by name</h3>
			<div className='bg-gray-600 rounded-md flex items-center overflow-x-scroll max-w-7xl mx-auto min-[960px]:overflow-hidden min-[960px]:justify-center'>
				{letters.map((letter) => {
					return (
						<Link
							className={`ml-2 text-lg p-2 ${params.letter === letter ? 'text-orange-300' : ''} hover:text-orange-200`}
							key={letter}
							href={`/meals/${letter}`}
						>
							{letter}
						</Link>
					);
				})}
			</div>

			<MealList meals={meals} />
		</section>
	);
}
