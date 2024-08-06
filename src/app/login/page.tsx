'use client';

import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import z, { ZodError } from 'zod';

import { useRouter } from 'next/navigation'; // useRouter on client side, redirect on server side !

const User = z.object({
	name: z.string().trim().min(1, 'Name is required'),
	password: z.string().trim().min(1, 'Password is required'),
});

export default function LoginPage() {
	const router = useRouter();

	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const name = formData.get('name') as string;
		const password = formData.get('password') as string;

		try {
			User.parse({
				name,
				password,
			});

			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, password }),
			});

			if (response.ok) {
				toast.success('Logged in successfully');

				// little delay to read and see toast :D
				await new Promise((resolve) => setTimeout(resolve, 800));
				router.push('/');
			} else {
				const message = await response.text();
				toast.error(message || 'Login failed');
			}
		} catch (error) {
			console.error(error);
			if (error instanceof ZodError) {
				toast.error(error.errors[0]?.message);
			} else {
				toast.error('Server problem, try again later');
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<h1>login in</h1>
			<form
				onSubmit={handleSubmit}
				className='max-w-[500px] flex flex-col px-4 py-8 gap-2 mx-auto mt-8 rounded-xl bg-white md:text-lg'
			>
				<label htmlFor='name'>Name:</label>
				<input
					className='border-2 border-black'
					type='text'
					id='name'
					name='name'
				/>
				<label htmlFor='password'>Password:</label>
				<input
					className='border-2 border-black'
					type='text'
					id='password'
					name='password'
				/>
				<button
					type='submit'
					className={`py-2 bg-yellow-500 px-5 rounded text-gray-50 font-bold tracking-widest transition ${
						isSubmitting ? 'cursor-not-allowed' : 'hover:bg-yellow-600'
					}`}
					disabled={isSubmitting}
				>
					{isSubmitting ? 'Logging...' : 'Login'}
				</button>
				<Toaster />
			</form>
		</>
	);
}
