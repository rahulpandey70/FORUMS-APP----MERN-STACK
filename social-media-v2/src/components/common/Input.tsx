"use client";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface InputBoxProps {
	name: string;
	type: string;
	id: string;
	value: string;
	placeholder: string;
	icon: React.ReactNode;
	disable: boolean;
}

export const InputBox = ({
	name,
	type,
	id,
	value,
	placeholder,
	icon,
	disable = false,
}: InputBoxProps) => {
	const [passwordVisible, setPasswordVisible] = useState(false);

	return (
		<div className="relative w-[100%] mb-4">
			<input
				type={
					type === "password" ? (passwordVisible ? "text" : "password") : type
				}
				name={name}
				defaultValue={value}
				id={id}
				placeholder={placeholder}
				className="w-[100%] rounded-md p-4 bg-background pl-12 border border:border focus:bg-transparent focus:outline-none placeholder:text-muted-foreground"
				disabled={disable}
			/>
			<i
				className={`text-muted-foreground absolute left-4 top-1/2 -translate-y-1/2`}
			>
				{icon}
			</i>
			{type === "password" ? (
				<i
					className={`text-muted-foreground hover:text-primary absolute top-1/2 -translate-y-1/2 left-[auto] right-4 cursor-pointer`}
					onClick={() => setPasswordVisible((currentVal) => !currentVal)}
				>
					{passwordVisible ? <EyeOff /> : <Eye />}
				</i>
			) : (
				""
			)}
		</div>
	);
};
