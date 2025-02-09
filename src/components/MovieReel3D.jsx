"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
	Box,
	Cylinder,
	Sphere,
	Text,
	PerspectiveCamera,
	Environment,
} from "@react-three/drei";

function MovieReel() {
	const reelRef = useRef();
	const filmRef = useRef();
	const textRef = useRef();

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		reelRef.current.rotation.y = time * 0.5;
		reelRef.current.position.y = Math.sin(time * 0.5) * 0.2;
		filmRef.current.rotation.z = time * 0.3;
		textRef.current.position.y = Math.sin(time * 0.7) * 0.1 + 2.2;
	});

	return (
		<group ref={reelRef}>
			<Cylinder args={[1.5, 1.5, 0.5, 32]} position={[0, 0, 0]}>
				<meshStandardMaterial
					color="#1a1a1a"
					metalness={0.9}
					roughness={0.1}
				/>
			</Cylinder>

			<group ref={filmRef}>
				{[...Array(12)].map((_, i) => (
					<Box
						key={i}
						args={[0.2, 2.2, 0.05]}
						position={[
							Math.sin((i / 6) * Math.PI) * 2,
							Math.cos((i / 6) * Math.PI) * 2,
							0,
						]}
					>
						<meshStandardMaterial
							color="#10b981"
							metalness={0.5}
							roughness={0.5}
							emissive="#10b981"
							emissiveIntensity={0.3}
						/>
					</Box>
				))}
			</group>

			<Sphere args={[0.3, 24, 24]} position={[0, 0, 0.3]}>
				<meshStandardMaterial
					color="#10b981"
					metalness={0.7}
					roughness={0.2}
					emissive="#10b981"
					emissiveIntensity={0.5}
				/>
			</Sphere>

			<group ref={textRef}>
				<Text
					font="/fonts/Geist-Bold.ttf"
					fontSize={0.8}
					position={[0, 0, 0]}
					color="#ffffff"
				>
					MOVIES
					<meshStandardMaterial
						color="#ffffff"
						metalness={0.5}
						roughness={0.1}
						emissive="#10b981"
						emissiveIntensity={0.3}
					/>
				</Text>
			</group>
		</group>
	);
}

export function MovieReel3D() {
	return (
		<Canvas>
			<PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
			<ambientLight intensity={0.5} />
			<spotLight
				position={[10, 10, 10]}
				angle={0.3}
				penumbra={1}
				intensity={1}
				color="#ffffff"
			/>
			<spotLight
				position={[-10, -10, -10]}
				angle={0.3}
				penumbra={1}
				intensity={0.5}
				color="#10b981"
			/>
			<MovieReel />
			<Environment preset="studio" />
		</Canvas>
	);
}
