'use client';

import { Dispatch, SetStateAction } from 'react';

type MealListPaginationProps = {
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	pageNumbers: number[];
	totalPages: number;
};
export default function MealListPagination({
	totalPages,
	pageNumbers,
	currentPage,
	setCurrentPage,
}: MealListPaginationProps) {
	return (
		<div className='text-center mt-4'>
			<button
				className='mr-1'
				disabled={currentPage === 1}
				onClick={() => setCurrentPage((prev) => prev - 1)}
			>
				{'<'}
			</button>
			{pageNumbers.map((page) => {
				return (
					<button
						className={`p-2 rounded-full px-4 ${
							currentPage === page ? 'bg-yellow-300' : ''
						} hover:bg-yellow-200 transition`}
						key={page}
						onClick={() => setCurrentPage(page)}
					>
						{page}
					</button>
				);
			})}
			<button
				className='ml-1'
				disabled={currentPage === totalPages}
				onClick={() => setCurrentPage((prev) => prev + 1)}
			>
				{'>'}
			</button>
		</div>
	);
}
