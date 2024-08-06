import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export function POST(req: Request) {
	try {
		cookies().delete('token');
		redirect('/');
	} catch (error) {
		console.log(error);
	}
	// revalidatePath('/');/
}
