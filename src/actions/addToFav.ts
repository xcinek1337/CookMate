'use server';

import { MealProps } from '@/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function addToFav(mealInfo: MealProps, userId: any) {
	const existingMeal = await prisma.favourites.findFirst({
		where: {
			meal: {
				path: ['idMeal'],
				equals: mealInfo.idMeal,
			},
			id_user: userId,
		},
	});

	if (existingMeal) {
		await prisma.favourites.delete({
			where: {
				id: existingMeal.id,
			},
		});
		return 'deleted from favourites';
	} else {
		await prisma.favourites.create({
			data: {
				meal: mealInfo,
				id_user: userId,
			},
		});
		return 'added to favourites';
	}
}
