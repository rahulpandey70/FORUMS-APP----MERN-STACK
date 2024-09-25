"use client";

import { AtSign, Lock, Mail, User2 } from "lucide-react";
import { InputBox } from "./common";
import { Button } from "@/components/common/Button";
import Link from "next/link";
import Logo from "@/app/assets/Logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useLoginMutation, useRegisterMutation } from "@/redux/auth/apiSlice";
import {
	loginSuccess,
	setError,
	registerSuccess,
} from "@/redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";

interface ApiError {
	data: {
		error: string | string[];
	};
}

export const UserAuthForm = ({ type }: { type: string }) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const [login, { isLoading: loginLoading }] = useLoginMutation();
	const [register, { isLoading: registerLoading }] = useRegisterMutation();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		username: type === "register" ? "" : "",
		name: type === "register" ? "" : "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (type === "login") {
			try {
				const user = await login({
					email: formData.email,
					password: formData.password,
				}).unwrap();
				dispatch(loginSuccess(user));

				toast.success("Login successful!");
				router.push("/");
			} catch (error: unknown) {
				const errorMessage = (error as ApiError)?.data.error;
				const message = Array.isArray(errorMessage)
					? errorMessage.join(", ")
					: errorMessage || "Login Failed";
				dispatch(setError(message));
				toast.error(errorMessage);
			}
		} else {
			try {
				const newUser = await register({
					name: formData.name,
					email: formData.email,
					username: formData.username,
					password: formData.password,
				}).unwrap();
				dispatch(registerSuccess(newUser));
				toast.success("Register successful!");
				toast.info("Now you can login");
				router.push("/login");
			} catch (error) {
				const errorMessage = (error as ApiError)?.data.error;
				const message = Array.isArray(errorMessage)
					? errorMessage.join(", ")
					: errorMessage || "Register failed";
				dispatch(setError(message));
				toast.error(message);
			}
		}
	};

	return (
		<div className="container flex w-full flex-col items-center">
			<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
				<div className="flex flex-col mt-[22%] text-center">
					<Image src={Logo} alt="Logo" className="mx-auto h-14 w-14" />
					<h1 className="text-2xl font-semibold tracking-tight">
						{type === "login" ? "Welcome back" : "Create an account"}
					</h1>
					<p className="text-sm text-muted-foreground">
						{type === "login"
							? "Enter your email and password to sign in to your account"
							: "Enter your email, name and password to create your account"}
					</p>
				</div>
				<form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
					{type === "register" && (
						<InputBox
							type="name"
							placeholder="Name"
							name="name"
							disable={false}
							id=""
							onChange={handleChange}
							value={formData.name}
							icon=<User2 />
							required={true}
						/>
					)}
					{type === "register" && (
						<InputBox
							type="username"
							placeholder="Username"
							name="username"
							disable={false}
							id=""
							onChange={handleChange}
							value={formData.username}
							icon=<AtSign />
							required={true}
						/>
					)}
					<InputBox
						type="email"
						placeholder="Email"
						name="email"
						disable={false}
						id=""
						onChange={handleChange}
						value={formData.email}
						icon=<Mail />
						required={true}
					/>
					<InputBox
						type="password"
						placeholder="Password"
						name="password"
						disable={false}
						id=""
						onChange={handleChange}
						value={formData.password}
						icon=<Lock />
						required={true}
					/>
					<Button
						type="submit"
						variant={"default"}
						className="w-full"
						disabled={type === "login" ? loginLoading : registerLoading}
					>
						{type === "login" ? "Login" : "Register"}
					</Button>
				</form>
				<p className="px-8 text-center text-sm text-muted-foreground">
					{type === "login"
						? "Don't have an account? "
						: "Already have an account? "}
					<Link
						href={type === "login" ? "/register" : "/login"}
						className="hover:text-brand underline underline-offset-4"
					>
						{type === "login" ? "Register" : "Login"}
					</Link>
				</p>
			</div>
		</div>
	);
};
