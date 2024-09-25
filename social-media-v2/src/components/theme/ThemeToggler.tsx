"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SelectTheme() {
	const { setTheme, theme } = useTheme();

	return (
		<div
			className={`flex items-center rounded-full  text-center transition duration-300`}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<Sun
				className={`size-5 transition-all ${
					theme === "dark" ? "rotate-0 scale-0" : "rotate-0 scale-100"
				}`}
			/>
			<Moon
				className={`absolute size-5 transition-all ${
					theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
				}`}
			/>
		</div>
	);
}
