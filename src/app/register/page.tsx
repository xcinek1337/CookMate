'use client';

import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import z, { ZodError } from 'zod';

import Image from 'next/image';
import Form from '@/components/Form';

const User = z.object({
	name: z.string().trim().min(1, 'Name is required'),
	password: z.string().trim().min(1, 'Password is required'),
});

export default function RegisterPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const password = formData.get('password') as string;
		const name = formData.get('name') as string;

		try {
			User.parse({
				name,
				password,
			});

			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, password }),
			});

			const data = await response.json()
			if (response.ok) {
				toast.success(data.message);
			} else {
				toast.error(data.message);
			}
			form.reset();
		} catch (error) {
			console.log(error);
			if (error instanceof ZodError) {
				toast.error(error.errors[0]?.message);
			} else {
				console.log(error);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<main className='text-center'>
			<Image
				className='mx-auto mt-10'
				src={'/register-logo.png'}
				alt='logo'
				width={280}
				height={150}
			/>
			<h1 className='font-bold text-2xl mt-10'>Join the CookMate !</h1>
			<p className='font-semibold text-gray-500 mt-2'>keep your data safe</p>
			<Form
				onSubmit={handleSubmit}
				isSubmitting={isSubmitting}
				label={'REGISTER'}
			/>
		</main>
	);
}
