'use client';

import logout from '@/actions/logout';
export default function ButtonLogout() {
	return <button onClick={() => logout()}>Log out</button>;
}
