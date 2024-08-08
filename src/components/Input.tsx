'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type MealProps = {
	idMeal: string;
	strMeal: string;
};

export default function Input() {
	const [value, setValue] = useState<string>('');
	const [meals, setMeals] = useState<MealProps[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.currentTarget.value);
	};

	useEffect(() => {
		if (!value) {
			setMeals([]);
			return;
		}
		const handler = setTimeout(async () => {
			setIsLoading(true);
			try {
				let response;
				if (value.length >= 2) {
					response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
				} else {
					response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`);
				}

				if (!response.ok) {
					throw new Error('Network response was not ok');
				}

				const data = await response.json();

				if (data && data.meals) {
					setMeals(data.meals.slice(0, 5));
				} else {
					setMeals([]);
				}
			} catch (error) {
				console.error('Fetch error:', error);
				setMeals([]);
			} finally {
				setIsLoading(false);
			}
		}, 1500);

		return () => {
			clearTimeout(handler);
		};
	}, [value]);

	const highlightMatch = (text: string) => {
		const regex = new RegExp(`(${value})`, 'gi');
		const parts = text.split(regex);
		return (
			<>
				{parts.map((part, i) =>
					part.toLowerCase() === value.toLowerCase() ? (
						<mark
							key={i}
							className='bg-transparent font-bold'
						>
							{part}
						</mark>
					) : (
						part
					)
				)}
			</>
		);
	};

	return (
		<div className='relative'>
			<input
				value={value}
				onChange={handleChange}
				className={`px-4  border-2  py-3 w-72 lg:w-[450px] border-gray-500 focus:outline-gray-500 transition`}
				placeholder='Type first letter or full dish'
			/>
			{isLoading && <p className='absolute top-full left-0 mt-1 text-sm text-gray-500'>Loading...</p>}
			{!isLoading && meals.length > 0 && (
				<ul className='absolute top-full left-0 w-72 lg:w-[450px] bg-white border border-gray-200 shadow-md'>
					{meals.map((meal, i) => (
						<li key={i}>
							<Link
								className='block border-b-2 px-3 py-1.5 hover:bg-gray-200 hover:font-semibold transition'
								href={`/meal/${meal.idMeal}`}
							>
								{highlightMatch(meal.strMeal)}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
