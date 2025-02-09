"use client";

import { useState, useEffect } from "react";
import { LandingPage } from "./components/LandingPage";
import { Sidebar } from "./components/Sidebar";
import { PromptInput } from "./components/PromptInput";
import { MovieResults } from "./components/MovieResults";
import { savePrompt, getPrompts } from "./utils/storage";

export default function App() {
	const [prompt, setPrompt] = useState("");
	const [movies, setMovies] = useState(null);
	const [loading, setLoading] = useState(false);
	const [showLanding, setShowLanding] = useState(true);
	const [previousPrompts, setPreviousPrompts] = useState([]);

	useEffect(() => {
		setPreviousPrompts(getPrompts());
	}, []);

	const handleSubmit = async (newPrompt) => {
		setPrompt(newPrompt);
		setLoading(true);
		setShowLanding(false);
		savePrompt(newPrompt);
		setPreviousPrompts(getPrompts());

		try {
			const response = await fetch("http://localhost:8080/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ prompt: newPrompt }),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			setMovies(data);
		} catch (error) {
			console.error("Error fetching movies:", error);
			setMovies(null);
		} finally {
			setLoading(false);
		}
	};

	if (showLanding) {
		return <LandingPage onSubmit={handleSubmit} />;
	}

	return (
		<div className="flex min-h-screen bg-black">
			<Sidebar
				prompts={previousPrompts}
				onPromptSelect={handleSubmit}
				onNewPrompt={() => setShowLanding(true)}
			/>

			<main className="flex-1 p-8 overflow-y-auto">
				<div className="max-w-6xl mx-auto">
					<PromptInput
						onSubmit={handleSubmit}
						placeholder="Describe the type of movie you're looking for..."
					/>

					<MovieResults movieData={movies} isLoading={loading} />
				</div>
			</main>
		</div>
	);
}
