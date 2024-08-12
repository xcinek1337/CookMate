import Flag from 'react-world-flags';
import Link from 'next/link';
import { regionsArray } from '@/const';
import MealList from '@/components/MealView/MealList';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { region: string } }): Promise<Metadata> {
	return {
		title: `Explore ${params.region} Cuisine | CookMate`,
		description: `Discover a selection of meals and recipes from ${params.region}. Dive into regional specialties and enjoy flavors unique to this area. Explore and find your new favorite dishes from ${params.region}.`,
	};
}

export default async function MealsPage({ params }: { params: { region: string } }) {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.region}`);
	const { meals } = await response.json();

	return (
		<section>
			<h3 className='my-4 text-center font-semibold text-gray-700 px-4'>Browse by regional cuisine</h3>
			<div className='flex items-center just gap-7 px-4 bg-gray-600 rounded-md overflow-x-scroll max-w-7xl mx-auto'>
				{regionsArray.map((region) => {
					return (
						<Link
							className={`py-1.5 px-2 border-2 ${
								params.region === region.strArea ? 'border-2 border-yellow-300' : 'border-transparent'
							}  hover:border-yellow-300 transition`}
							key={region.code}
							href={`/regional/${region.strArea}`}
						>
							<div className='w-10 mx-auto py-1'>
								<Flag code={region.code} />
							</div>
						</Link>
					);
				})}
			</div>

			<MealList meals={meals} />
		</section>
	);
}
