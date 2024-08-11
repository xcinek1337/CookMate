import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export async function POST(request: Request) {
	const { name, password } = await request.json();

	try {
		const user = await prisma.user.findFirst({
			where: { name },
		});

		if (!user) {
			return new Response('User not found', { status: 404 });
		}

		const passwordMatches = await bcrypt.compare(password, user.password);

		if (!passwordMatches) {
			return new Response('Invalid credentials', { status: 401 });
		}
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });

		const response = NextResponse.json({ message: 'Login succesful' }, { status: 200 });
		response.cookies.set({
			name: 'token',
			value: token,
			secure: process.env.NODE_ENV! === 'production',
			httpOnly: true,
			path: '/',
		});
		return response;
	} catch (error) {
		console.error(error);
		return new Response('Internal Server Error', { status: 500 });
	}
}
