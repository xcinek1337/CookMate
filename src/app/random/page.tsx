import MealItem from '@/components/MealView/MealItem';
import React from 'react';

export default async function RandomMealPage() {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`, {
		cache: 'no-store',
	});
	const { meals: meal } = await response.json();
	return (
		<section className='max-w-md mx-auto px-4 sm:max-w-2xl sm:py-2 md:max-w-4xl lg:max-w-7xl '>
			<h3 className='my-4 text-center font-semibold text-gray-700 px-4'>Random meal</h3>

			<MealItem meal={meal} />
		</section>
	);
}
