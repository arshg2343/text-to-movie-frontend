"use client";

export function PromptTips() {
	const tips = [
		"Describe specific genres or themes you're interested in",
		"Mention similar movies you've enjoyed",
		"Include preferred time periods or settings",
		"Specify the type of emotional impact you're looking for 🎬",
	];

	return (
		<div className="mt-12">
			<h2 className="text-sm mb-4 text-zinc-400 uppercase tracking-wider">
				PROMPT WRITING TIPS:
			</h2>
			<ul className="space-y-2 text-zinc-400">
				{tips.map((tip, i) => (
					<li key={i} className="flex items-start">
						<span className="mr-2">•</span>
						<span className="text-sm">{tip}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
