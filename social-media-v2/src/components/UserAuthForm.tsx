import { Lock, Mail, User, User2 } from "lucide-react";
import { InputBox } from "./common";
import { Button, buttonVariants } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Logo from "@/app/assets/Logo.svg";
import Image from "next/image";

export const UserAuthForm = ({ type }: { type: string }) => {
	return (
		<div className="container flex w-full flex-col items-center">
			<Link
				href={type === "login" ? "/" : "/login"}
				className={cn(
					buttonVariants({ variant: "ghost" }),
					"absolute left-[5vw] top-4"
				)}
			>
				<>
					{type === "login" && <ChevronLeft className="mr-2 h-4 w-4" />}
					{type === "login" ? "Back" : "Login"}
				</>
			</Link>
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
				<div>
					{type === "register" && (
						<InputBox
							type="name"
							placeholder="Name"
							name="name"
							disable={false}
							id=""
							value=""
							icon=<User2 />
						/>
					)}
					<InputBox
						type="email"
						placeholder="Email"
						name="Email"
						disable={false}
						id=""
						value=""
						icon=<Mail />
					/>
					<InputBox
						type="password"
						placeholder="Password"
						name="password"
						disable={false}
						id=""
						value=""
						icon=<Lock />
					/>
					<Button variant={"default"} className="w-full">
						{type === "login" ? "Login" : "Register"}
					</Button>
				</div>
				<p className="px-8 text-center text-sm text-muted-foreground">
					{type === "login"
						? "Don't have an account? "
						: "Already have an account? "}
					<Link
						href={type === "login" ? "/register" : "/login"}
						className="hover:text-brand underline underline-offset-4"
					>
						{type === "login" ? "Sign Up" : "Register"}
					</Link>
				</p>
			</div>
		</div>
	);
};
