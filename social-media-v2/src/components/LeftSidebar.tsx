"use client";

import {
	Bell,
	HomeIcon,
	LogOut,
	PlusCircle,
	Settings,
	User,
} from "lucide-react";
import { Button } from "./common";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { PostPopup } from "./common/PostPopup";

const sideBarStyle =
	"hover:bg-accent hover:text-accent-foreground rounded-md w-full text-center cursor-pointer flex gap-6 p-4";

export const LeftSidebar = ({ className }: { className?: string }) => {
	const [postPopupOpen, setPostPopupOpen] = useState(false);

	return (
		<div className={cn("hidden md:block p-4 text-xl rounded-md", className)}>
			<ul className="flex flex-col items-center gap-6">
				<Link href={"/"} className={sideBarStyle}>
					<span title="Home">
						<HomeIcon />
					</span>
					<span className="hidden xl:block">Home</span>
				</Link>
				<Link href={"/notifications"} className={sideBarStyle}>
					<span title="Notifications">
						<Bell />
					</span>
					<span className="hidden xl:block">Notifications</span>
				</Link>
				<Link href={"/profile"} className={sideBarStyle}>
					<span title="Profile">
						<User />
					</span>
					<span className="hidden xl:block">Profile</span>
				</Link>
				<Link href={"/settings"} className={sideBarStyle}>
					<span title="Settings">
						<Settings />
					</span>
					<span className="hidden xl:block">Settings</span>
				</Link>
			</ul>
			<div className="flex flex-col gap-6 my-4">
				<Button
					variant={"outline"}
					size={"sm"}
					className="text-md py-6"
					onClick={() => setPostPopupOpen((curr) => !curr)}
				>
					<span className="block xl:hidden" title="Post">
						<PlusCircle />
					</span>
					<span className="hidden xl:block">Post</span>
					{postPopupOpen ? <PostPopup /> : ""}
				</Button>

				<Button
					variant={"destructive"}
					size={"sm"}
					className="flex items-center justify-between py-6 px-4 rounded-md gap-2 text-md"
				>
					<span className="hidden xl:block">Logout</span>
					<span title="Logout">
						<LogOut size={20} />
					</span>
				</Button>
			</div>
		</div>
	);
};
