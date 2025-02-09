"use client";

export function Sidebar({ prompts, onPromptSelect, onNewPrompt }) {
	return (
		<div className="w-64 bg-zinc-900 border-r border-zinc-800 p-4 flex flex-col h-screen">
			<button
				onClick={onNewPrompt}
				className="px-4 py-2 bg-emerald-500 text-white rounded-none mb-4 hover:bg-emerald-600 mono text-sm"
			>
				New Prompt
			</button>

			<div className="mb-4">
				<h3 className="text-sm font-mono text-zinc-400 mb-2">Today</h3>
				{prompts.map((p) => (
					<div
						key={p.id}
						className="text-white p-2 hover:bg-zinc-800 cursor-pointer truncate mono"
						onClick={() => onPromptSelect(p.text)}
					>
						{p.text}
					</div>
				))}
			</div>
		</div>
	);
}
