import Link from "next/link";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
			<div className="text-center">
				<FileQuestion
					className="mx-auto h-24 w-24 text-gray-400 mb-4"
					aria-hidden="true"
				/>
				<h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
				<h2 className="text-2xl font-semibold text-gray-700 mb-4">
					Page Not Found
				</h2>
				<p className="text-gray-500 mb-8 max-w-md mx-auto">
					Oops! The page you're looking for doesn't exist. It might have been
					moved or deleted.
				</p>
				<Link
					href="/"
					className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
				>
					Go back home
				</Link>
			</div>
		</div>
	);
}
