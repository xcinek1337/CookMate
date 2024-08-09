'use client';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function MealItemBackButton() {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			className='border-2 cursor-pointer border-gray-500 w-fit px-1.5 py-0.5 md:ml-12 mt-4 rounded-lg'
		>
			<MoveLeft color={'#6b7280'} />
		</div>
	);
}
