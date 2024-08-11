import React, { FormEventHandler } from 'react';
import Link from 'next/link';

type FormProps = {
	onSubmit: FormEventHandler<HTMLFormElement>;
	isSubmitting: boolean;
	label: string;
};

export default function Form({ onSubmit, label, isSubmitting }: FormProps) {
	return (
		<form
			onSubmit={onSubmit}
			className='max-w-[500px] flex flex-col px-8 sm:px-0 py-8 gap-6 mx-auto mt-2 rounded-xl md:text-lg'
		>
			<div className='relative w-full'>
				<input
					className='w-full pl-6 shadow-lg rounded-full pt-7 pb-4 text-sm bg-gray-100 leading-tight focus:outline-yellow-700'
					type='text'
					id='name'
					name='name'
				></input>
				<label
					className='absolute text-sm top-2 left-6 text-gray-400'
					htmlFor='name'
				>
					Name
				</label>
			</div>
			<div className='relative w-full'>
				<input
					className='w-full pl-6 shadow-lg rounded-full pt-7 pb-4 text-sm bg-gray-100 leading-tight focus:outline-yellow-700'
					type='password'
					id='password'
					name='password'
				/>
				<label
					className='absolute text-sm top-2 left-6 text-gray-400'
					htmlFor='password'
				>
					Password
				</label>
			</div>
			<button
				type='submit'
				className={`py-4 bg-yellow-400 shadow-md text-black px-5 mt-2  font-bold tracking-widest transition rounded-full  ${
					isSubmitting ? 'cursor-not-allowed' : 'hover:bg-yellow-600'
				}`}
				disabled={isSubmitting}
			>
				{isSubmitting ? `${label}ING...` : `${label}`}
			</button>
			{label === 'REGISTER' ? (
				<p>
					Have a account?
					<Link
						className='underline underline-offset-2 ml-0.5'
						href={'/login'}
					>
						Login here
					</Link>
				</p>
			) : (
				<p>
					Dont have account?
					<Link
						className='underline underline-offset-2 ml-0.5'
						href={'/register'}
					>
						Start here
					</Link>
				</p>
			)}
		</form>
	);
}
