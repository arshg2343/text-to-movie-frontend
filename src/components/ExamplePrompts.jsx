"use client";

export function ExamplePrompts({ onSelect }) {
	const examples = [
		"A psychological thriller similar to Inception",
		"A heartwarming animated movie about friendship",
		"A sci-fi movie with time travel elements",
		"An action-packed superhero movie",
	];

	return (
		<div className="mt-12">
			<h2 className="text-sm mb-4 text-zinc-400 uppercase tracking-wider font-mono">
				EXAMPLE PROMPTS:
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{examples.map((example, i) => (
					<div
						key={i}
						onClick={() => onSelect(example)}
						className="p-4 bg-[#1f2022] border border-zinc-1000 hover:border-zinc-700 cursor-pointer transition-colors text-sm text-zinc-300 font-mono"
					>
						{example}
					</div>
				))}
			</div>
		</div>
	);
}
