'use client';

import addToFav from '@/actions/addToFav';
import { MealProps } from '@/types';
import { Heart } from 'lucide-react';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import toast from 'react-hot-toast';

export function AddToFavButton({ mealInfo, isAuth }: { mealInfo: MealProps; isAuth: RequestCookie | undefined }) {
	async function handleAddToFav() {
		if (!isAuth) {
			toast.error('Log in first');
		}

		try {
			await addToFav(mealInfo);
		} catch (error) {}
	}

	return (
		<button
			onClick={handleAddToFav}
			type='submit'
			className='flex gap-3 border-2 bg-red-200 py-2 px-4 w-fit rounded-lg'
		>
			<Heart color={`red`} /> Add to Favourite
		</button>
	);
}
