'use client';

import addToFav from '@/actions/addToFav';
import { MealProps } from '@/types';
import { Heart } from 'lucide-react';
import toast from 'react-hot-toast';

export function AddToFavButton({
	mealInfo,
	token,
	userId,
}: {
	mealInfo: MealProps;
	token: string | undefined;
	userId: any;
}) {
	async function handleAddToFav() {
		if (!token) {
			toast.error('Log in first');
			return;
		}
		try {
			const res = await addToFav(mealInfo, userId);
			toast.success(res);
		} catch (error) {
			toast.error('server overloaded, try again');
		}
	}

	return (
		<button
			onClick={handleAddToFav}
			type='submit'
			className='flex gap-3 border-2 bg-red-200 py-2 px-4 w-fit rounded-lg hover:bg-red-300 transition'
		>
			<Heart color={`red`} /> Add to Favourite
		</button>
	);
}
