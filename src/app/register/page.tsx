'use client';
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import z, { ZodError } from 'zod';

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

			toast.success('Succesfully registered');
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
		<>
			<h1>register in</h1>
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
					{isSubmitting ? 'Registering...' : 'Register'}
				</button>
				<Toaster />
			</form>
		</>
	);
}
