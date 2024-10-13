import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import localFont from "next/font/local";
import "./globals.css";
import { links } from "./sitemap";

const geistSans = localFont({
	src: "../../public/fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../../public/fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="flex flex-col min-h-screen">
					<header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
						<div className="flex items-center space-x-4">
							<Image
								src="/images/placeholder.svg?height=40&width=40"
								alt="Logo"
								width={40}
								height={40}
								className="rounded-full"
							/>
							<span className="text-xl font-bold">MyWebsite</span>
						</div>
						<nav className="hidden md:flex space-x-6">
							{links.map((link) => (
								<Link
									key={link.href}
									className="text-sm font-medium hover:text-primary"
									href={link.href}
								>
									{link.label}
								</Link>
							))}
						</nav>
						<div className="flex items-center space-x-4">
							<span className="text-sm font-medium">John Doe</span>
							<Image
								src="/images/placeholder.svg?height=32&width=32"
								alt="User Avatar"
								width={32}
								height={32}
								className="rounded-full"
							/>
						</div>
					</header>
					{children}
					<footer className="py-6 text-center bg-primary text-primary-foreground">
						<p className="text-sm flex items-center justify-center">
							Built with{" "}
							<Heart className="w-4 h-4 mx-1 fill-current text-red-700" /> in
							Miami © {new Date().getFullYear()}
						</p>
					</footer>
				</div>
			</body>
		</html>
	);
}
