import { ThumbsUp, ThumbsDown, Star, Info } from "lucide-react";

const Card = ({ children, className }) => (
	<div
		className={`bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden shadow-lg ${className}`}
	>
		{children}
	</div>
);

const CardHeader = ({ children }) => <div className="p-4">{children}</div>;
const CardTitle = ({ children }) => (
	<h3 className="text-xl font-bold text-green-400">{children}</h3>
);
const CardDescription = ({ children }) => (
	<p className="text-sm text-zinc-400">{children}</p>
);
const CardContent = ({ children }) => <div className="p-4">{children}</div>;
const CardFooter = ({ children, className }) => (
	<div className={`p-4 border-t border-zinc-700 ${className}`}>
		{children}
	</div>
);
const Button = ({ children, className }) => (
	<button
		className={`px-3 py-2 rounded-full text-sm font-medium ${className}`}
	>
		{children}
	</button>
);
const Badge = ({ children, className }) => (
	<span className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}>
		{children}
	</span>
);

export function MovieResults({ movieData, isLoading }) {
	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-64">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
				<div className="h-64">
					<p className="mt-4 text-sm text-white">
						Please wait while we fetch your movie recommendations...
					</p>
				</div>
			</div>
		);
	}

	if (
		!movieData ||
		!movieData.recommendations ||
		!movieData.recommendations.recommendations
	) {
		return (
			<div className="text-center mt-8 text-green-500">
				No movie recommendations available.
			</div>
		);
	}

	const movies = movieData.recommendations.recommendations;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
			{movies.map((movie, i) => (
				<Card key={i}>
					<div className="relative">
						<img
							src={
								movie.poster_url ||
								"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zoHwiwUCuZIGqBAF7wxtZPqGfYS1EK.png"
							}
							alt={movie.title}
							className="w-full h-64 object-cover"
						/>
						<Badge
							className={`absolute top-2 right-2 ${
								movie.is_relevant
									? "bg-green-500 text-black"
									: "bg-yellow-500 text-black"
							}`}
						>
							{movie.is_relevant ? "Relevant" : "Less Relevant"}
						</Badge>
					</div>
					<CardHeader>
						<CardTitle>{movie.title}</CardTitle>
						<CardDescription>
							{new Date(movie.release_date).getFullYear()} |
							Directed by {movie.directors.join(", ")}
						</CardDescription>
					</CardHeader>
					<CardContent>
						<p className="text-zinc-300 mb-4">{movie.overview}</p>
						<p className="text-green-400 font-medium mb-2">Cast:</p>
						<div className="flex flex-wrap gap-2">
							{movie.cast.slice(0, 3).map((actor, index) => (
								<Badge
									key={index}
									className="bg-zinc-700 text-green-400"
								>
									{actor}
								</Badge>
							))}
						</div>
					</CardContent>
					<CardFooter className="flex flex-col items-start">
						<div className="flex items-center mb-2">
							<Star className="w-5 h-5 text-yellow-400 mr-1" />
							<span className="text-green-400">
								{movie.relevance_score.toFixed(1)}
							</span>
						</div>
						<div className="flex items-center text-zinc-400 mb-2">
							<Info className="w-4 h-4 mr-2" />
							<span className="text-sm">
								{movie.relevance_explanation}
							</span>
						</div>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
