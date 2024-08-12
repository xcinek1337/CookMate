'use client';
import MealListPagination from '@/components/MealView/MealListPagination';
import { type MealProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function MealList({ meals }: { meals: MealProps[] }) {
	const [currentPage, setCurrentPage] = useState<number>(1);

	const totalPages = Math.ceil(meals.length / 8);

	const itemsPerPage = 8;
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const paginatedList = meals.slice(indexOfFirstItem, indexOfLastItem);

	if (!meals) {
		return <p className='mt-10 text-xl text-center'>no meals found</p>;
	}
	return (
		<>
			<ul className='mx-auto max-w-md p-12 sm:max-w-2xl sm:py-2 md:max-w-4xl lg:max-w-7xl grid px-3 grid-cols-1 gap-8 pb-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{paginatedList &&
					paginatedList.map((meal: MealProps) => {
						return (
							<li key={meal.idMeal}>
								<Link
									key={meal.idMeal}
									href={`/meal/${meal.idMeal}`}
								>
									<article>
										<div className='aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-emerald-50'>
											<Image
												width={200}
												height={200}
												src={meal.strMealThumb}
												alt={meal.strMeal}
												className=' h-full w-full cursor-pointer object-cover object-center p-4 transition-transform hover:scale-105'
											/>
										</div>
										<div className=' flex-col  justify-between p-2'>
											<div className='mb-1'></div>
											<div>
												<h3 className='cursor-pointer text-xl font-semibold  text-gray-700'>{meal.strMeal}</h3>
											</div>
											<p
												data-testid='product-price'
												className='text-sm font-medium text-gray-900'
											></p>
										</div>
									</article>
								</Link>
							</li>
						);
					})}
			</ul>
			<MealListPagination
				totalPages={totalPages}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</>
	);
}
