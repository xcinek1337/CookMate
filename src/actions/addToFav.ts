'use server';

import { MealProps } from '@/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function addToFav(mealInfo: MealProps) {
	await prisma.favourites.create({
        data:{
            meal:mealInfo,
            // id_user:
        }
    });
}
