"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Sphere, PerspectiveCamera, Environment } from "@react-three/drei";

function FilmStrip({ position, rotation }) {
	return (
		<group position={position} rotation={rotation}>
			{[...Array(5)].map((_, i) => (
				<Box
					key={i}
					args={[0.8, 0.1, 0.05]}
					position={[0, i * 0.15 - 0.3, 0]}
				>
					<meshStandardMaterial
						color="#10b981"
						metalness={0.5}
						roughness={0.5}
					/>
				</Box>
			))}
		</group>
	);
}

function MovieIconMesh() {
	const groupRef = useRef();
	const filmStrips = useMemo(() => {
		return [...Array(8)].map((_, i) => ({
			position: [
				Math.sin((i / 4) * Math.PI * 2) * 1.2,
				0,
				Math.cos((i / 4) * Math.PI * 2) * 1.2,
			],
			rotation: [0, (-i / 4) * Math.PI * 2, 0],
		}));
	}, []);

	useFrame((state) => {
		const t = state.clock.getElapsedTime();
		groupRef.current.rotation.y = t * 0.5;
		groupRef.current.position.y = Math.sin(t * 2) * 0.1;
	});

	return (
		<group ref={groupRef}>
			<Sphere args={[0.8, 32, 32]}>
				<meshStandardMaterial
					color="#1a1a1a"
					metalness={0.9}
					roughness={0.1}
				/>
			</Sphere>
			{filmStrips.map((props, i) => (
				<FilmStrip key={i} {...props} />
			))}
		</group>
	);
}

export function MovieIcon3D() {
	return (
		<Canvas>
			<PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
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
			<MovieIconMesh />
			<Environment preset="studio" />
		</Canvas>
	);
}
