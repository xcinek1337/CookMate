import { cookies } from 'next/headers';
export default function Home() {
	const isAuth = cookies().get('token');

	return (
		<main>
			<p>hejka</p>
			{isAuth ? <p>jestes zalogowany</p> : <p>nie jestes zalogowny</p>}
		</main>
	);
}
