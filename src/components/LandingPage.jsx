"use client";

import { MovieIcon3D } from "./MovieIcon3D";
import { PromptInput } from "./PromptInput";
import { ExamplePrompts } from "./ExamplePrompts";
import { PromptTips } from "./PromptTips";

export function LandingPage({ onSubmit }) {
	return (
		<div className="min-h-screen bg-[#1f2020] flex flex-col">
			<main className="flex-1 w-full px-4 py-12">
				<div className="max-w-7xl mx-auto">
					<div className="flex flex-col lg:flex-row items-center justify-between mb-8">
						<h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-8 lg:mb-0">
							Text-to-
							<span className="text-[#29ffa4] hover:text-[#24fccf]">
								MOVIE
							</span>
						</h1>

						<div className="w-[280px] h-[280px] lg:w-[400px] lg:h-[400px]">
							<MovieIcon3D />
						</div>
					</div>

					<div className="w-full max-w-none mb-8">
						<PromptInput
							onSubmit={onSubmit}
							placeholder="a spur gear with 13 teeth"
						/>
					</div>

					<div className="max-w-3xl">
						<p className="text-zinc-400 text-sm font-mono mb-8">
							Get movie recommendations based on a text prompt.
							<br />
							Powered by the{" "}
							<span className="text-emerald-400">
								Nvidia llama-3.1 Nemotro 70B Instruct
							</span>{" "}
							API from OpenRouter.
						</p>

						<ExamplePrompts onSelect={onSubmit} />
						<PromptTips />
					</div>
				</div>
			</main>
			{/* <div className="fixed inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c] pointer-events-none z-0"></div> */}
		</div>
	);
}
