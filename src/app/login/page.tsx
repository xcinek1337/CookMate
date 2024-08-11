'use client';

import { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import z, { ZodError } from 'zod';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Form from '@/components/Form';

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
				window.location.href = '/';
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
		<main className='text-center'>
			<Image
				className='mx-auto mt-10'
				src={'/famale-logo2.png'}
				alt='logo'
				width={250}
				height={150}
			/>
			<h1 className='font-bold text-2xl mt-10'>Welcome to CookMate!</h1>
			<p className='font-semibold text-gray-500 mt-2'>keep your data safe</p>

			<div className='group relative m-12 flex justify-center'>
				<button className='rounded bg-amber-500 px-4 py-2 text-sm text-white shadow-sm'>test user!</button>
				<span className='absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100'>
					name: test | password: test
				</span>
			</div>
		
			<Form
				onSubmit={handleSubmit}
				isSubmitting={isSubmitting}
				label={'LOGIN'}
			/>
		</main>
	);
}
