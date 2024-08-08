import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function POST(req: Request) {
	if (req.method === 'POST') {
		cookies().delete('token');
		const response = NextResponse.json({ message: 'logged out' }, { status: 200 });
		return response;
	} else {
		return new Response('Internal Server Error', { status: 500 });
	}
}