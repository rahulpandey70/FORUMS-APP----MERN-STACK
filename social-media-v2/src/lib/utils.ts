import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const registerValidation = z.object({
	name: z.string(),
	username: z.string(),
	email: z.string().email("Invalid email format"),
	password: z
		.string()
		.min(6, { message: "Password must be at least 6 characters long" }),
});

export const loginValidation = z.object({
	email: z.string().email("Invalid email format"),
	password: z.string(),
});
