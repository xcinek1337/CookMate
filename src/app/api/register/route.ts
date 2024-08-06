import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
	const { name, password } = await request.json();

	try {
		const hashedPassword = await bcrypt.hash(password, 10);
		await prisma.user.create({
			data: {
				name: name,
				password: hashedPassword,
			},
		});
		const response = NextResponse.json({ message: 'Succesfully registered' }, { status: 200 });
		return response;
	} catch (error) {
		console.log(error);
		return new Response('Internal Server Error', { status: 500 });
	}
}
