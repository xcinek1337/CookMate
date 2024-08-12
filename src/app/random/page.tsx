import MealItem from '@/components/MealView/MealItem';
import React from 'react';

export default async function RandomMealPage() {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
	const { meals: meal } = await response.json();
	return (
		<section>
			<h3 className='my-4 text-center font-semibold text-gray-700 px-4'>Random meal</h3>

			<MealItem meal={meal} />
		</section>
	);
}
