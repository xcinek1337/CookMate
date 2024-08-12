export const metadata = {
	title: 'CookMate | Login',
	description:
		'Log in to CookMate to access your personalized meal recommendations and manage your favorite recipes. Ensure secure access and enjoy a personalized culinary experience.',
};

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
