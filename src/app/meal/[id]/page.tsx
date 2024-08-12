import MealItem from '@/components/MealView/MealItem';
import MealItemBackButton from '@/components/MealView/MealItemBackButton';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
	const { meals } = await response.json();

	const meal = meals[0];

	return {
		title: meal.strMeal,
	};
}

export default async function MealInfoPage({ params }: { params: { id: string } }) {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`);
	const { meals: meal } = await response.json();

	return (
		<section className='max-w-md mx-auto px-4 sm:max-w-2xl sm:py-2 md:max-w-4xl lg:max-w-7xl '>
			<MealItemBackButton />
			<MealItem meal={meal} />
		</section>
	);
}
