'use client';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function MealItemBackButton() {
	const router = useRouter();
	return (
		<button
			onClick={() => router.back()}
			className='cursor-pointer w-fit px-1.5 py-0.5  mt-4 rounded-lg'
		>
			<MoveLeft size={36} color={'#6b7280'} />
		</button>
	);
}
