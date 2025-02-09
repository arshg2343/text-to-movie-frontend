"use client";

export function PromptInput({ onSubmit, placeholder }) {
	return (
		<div className="relative w-full">
			<input
				type="text"
				placeholder={placeholder}
				className="w-full p-6 bg-[#1f2020] border border-zinc-1500 rounded-none text-white text-xl focus:outline-none focus:border-emerald-400 placeholder-zinc-600 font-mono"
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						onSubmit(e.target.value);
					}
				}}
			/>
			<button
				className="absolute right-0 top-0 h-full px-6 bg-[#29ffa4] text-[#1f2020] font-mono text-lg hover:bg-[#24fccf] transition-colors"
				onClick={() => onSubmit(document.querySelector("input").value)}
			>
				SUBMIT →
			</button>
		</div>
	);
}
