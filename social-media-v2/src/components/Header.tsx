"use client";

import { ArrowLeft, Bell, Search } from "lucide-react";
import { Searchbar } from "./Searchbar";
import { useState } from "react";
import Link from "next/link";
import { Button } from "./common";
import { useDispatch, useSelector } from "react-redux";
import { setIsDarkMode } from "@/redux/theme/themeSlice";
import { RootState } from "@/redux/store";
import { SelectTheme } from "./theme/ThemeToggler";
import Image from "next/image";
import Logo from "@/app/assets/Logo.svg";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/common/Button";
// import { UserDropdown } from "./UserDropdown";

export const Header = () => {
	const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);
	// const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

	const theme = useSelector((state: RootState) => state.theme.isDarkMode);
	const dispatch = useDispatch();

	const darkModeToggle = () => {
		dispatch(setIsDarkMode(theme));
	};

	return (
		<nav
			className={`z-10 sticky top-0 flex items-center gap-12 w-full py-2 h-16 px-[5vw]`}
		>
			<Link href={"/"} className="flex items-center justify-center gap-2">
				<Image src={Logo} alt="Logo" className="w-12 h-12 mt-2" />
				<span className="hidden md:block w-full text-sm font-bold">
					Social Hub
				</span>
			</Link>

			<div className="flex items-center gap-3 md:gap-6 ml-auto">
				<div
					className={`absolute w-full left-0 py-3 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:opacity-100 pointer-events-auto ${
						searchBoxVisibility
							? "block z-10 backdrop-blur-md pointer-events-auto"
							: "hidden pointer-events-none duration-100"
					}`}
				>
					<Searchbar />
					<Button
						variant={"outline"}
						className="absolute md:hidden p-[4%] left-5 top-1/2 -translate-y-1/2 text-xl rounded-full border-none hover:bg-transparent"
						onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
					>
						<ArrowLeft
							width={18}
							className="text-xl text-muted-foreground hover:text-primary"
						/>
					</Button>
				</div>

				<Button
					variant={"outline"}
					size={"sm"}
					className="md:hidden bg-transparent rounded-full flex items-center justify-center p-2"
					onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
				>
					<Search className="text-xl" width={20} />
				</Button>

				<div className="flex items-center gap-3 md:gap-6">
					<Link
						href={"/notifications"}
						className="py-[6px] px-2 border border-input hover:bg-accent hover:text-accent-foreground rounded-full"
					>
						<Bell width={20} />
					</Link>

					<Button
						variant={"outline"}
						size={"sm"}
						className="p-2 rounded-full"
						onClick={darkModeToggle}
					>
						<SelectTheme />
					</Button>
				</div>
				<hr className="gap-3 md:gap-6 min-h-[2em] w-[0.1rem] bg-border" />

				{/* <Link
					href={""}
					className={cn(
						buttonVariants({ variant: "outline" }),
						"px-4 py-1 text-base"
					)}
					onClick={() => setIsUserDropdownOpen((curr) => !curr)}
				>
					<Avatar className="w-8 h-8" />
				</Link> */}

				<Link
					href={"/login"}
					className={cn(
						buttonVariants({ variant: "outline" }),
						"px-4 py-1 text-base"
					)}
				>
					SignIn
				</Link>

				<Link
					href={"/register"}
					className={cn(
						buttonVariants({ variant: "default" }),
						"px-4 text-base hidden lg:block"
					)}
				>
					SignUp
				</Link>
				{/* {isUserDropdownOpen ? <UserDropdown /> : ""} */}
			</div>
		</nav>
	);
};
