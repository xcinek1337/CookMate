import { Dispatch, SetStateAction } from 'react';

type MealListPaginationProps = {
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
	totalPages: number;
};
export default function MealListPagination({
	totalPages,
	currentPage,
	setCurrentPage,
}: MealListPaginationProps) {
	const delta = 3;
	const range: number[] = [];
	for (let i = 1; i <= totalPages; i++) {
		if (i === 1 || i === totalPages || (i > currentPage - delta && i < currentPage + delta)) {
			range.push(i);
		}
	}

	const paginationItems = range.reduce<(number | string)[]>((acc, number, index) => {
		if (index > 0) {
			const prevNumber = range[index - 1];
			if (number - prevNumber > 1) {
				acc.push('...');
			}
		}
		acc.push(number);
		return acc;
	}, []);

	return (
		<div className='text-center my-4'>
			<button
				className='mr-1'
				disabled={currentPage === 1}
				onClick={() => setCurrentPage((prev) => prev - 1)}
			>
				{'<'}
			</button>
			{paginationItems.map((page) => {
				return (
					<button
						className={`p-2 rounded-full px-4 ${
							currentPage === page ? 'bg-yellow-300' : ''
						} hover:bg-yellow-200 transition ${typeof page === 'string' ? 'hover:bg-white' : ''}`}
						key={page}
						disabled={typeof page === 'string'}
						onClick={() => setCurrentPage(Number(page))}
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
