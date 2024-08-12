import { cookies } from 'next/headers';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';
import MealList from '@/components/MealView/MealList';
import { MealProps } from '@/types';

export default async function FavouritesPage() {
	const prisma = new PrismaClient();
	const token = cookies().get('token')?.value;

	let userId;
	if (token) {
		try {
			const decoded = jwt.verify(token, process.env.JWT_SECRET!);
			userId = (decoded as jwt.JwtPayload).userId;
		} catch (error) {
			console.error('Invalid token:', error);
		}
	} else {
		return <p className='my-4 text-center font-semibold text-gray-700 px-4'>Log in first</p>;
	}

	const data = await prisma.favourites.findMany({
		where: {
			id_user: userId,
		},
	});
	const meals = data.map((item) => item.meal) as MealProps[];
	return (
		<section>
			<h3 className='my-4 text-center font-semibold text-gray-700 px-4'>Your favourites meals</h3>

			<MealList meals={meals} />
		</section>
	);
}
