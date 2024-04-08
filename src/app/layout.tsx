import type { Metadata } from 'next';
import { Titillium_Web } from 'next/font/google';
import './globals.css';

const titilliumWeb = Titillium_Web({
	subsets: ['latin'],
	weight: ['200', '300', '400', '600'],
});

export const metadata: Metadata = {
	title: 'formerly facebook',
	description: '',
	icons: '/logo.jpg',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/icon.jpg" />
			<body className={titilliumWeb.className}>{children}</body>
		</html>
	);
}
