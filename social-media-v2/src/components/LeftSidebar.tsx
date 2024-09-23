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
import { usePathname } from "next/navigation";

const sideBarStyle =
	"text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md w-full text-center cursor-pointer flex gap-6 p-4";

const SidebarLink = ({
	href,
	icon,
	label,
}: {
	href: string;
	icon: JSX.Element;
	label: string;
}) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link
			href={href}
			className={cn(sideBarStyle, {
				"text-primary border border:border": isActive,
			})}
		>
			<span title={label}>{icon}</span>
			<span className="hidden xl:block">{label}</span>
		</Link>
	);
};

export const LeftSidebar = ({ className }: { className?: string }) => {
	const [postPopupOpen, setPostPopupOpen] = useState(false);

	return (
		<div className={cn("hidden md:block p-4 text-xl rounded-md", className)}>
			<ul className="flex flex-col items-center gap-6">
				<SidebarLink href="/" icon={<HomeIcon />} label="Home" />
				<SidebarLink
					href="/notifications"
					icon={<Bell />}
					label="Notifications"
				/>
				<SidebarLink href="/profile" icon={<User />} label="Profile" />
				<SidebarLink href="/settings" icon={<Settings />} label="Settings" />
			</ul>
			<div className="flex flex-col gap-6 my-4">
				<Button
					variant={"outline"}
					size={"sm"}
					className="text-md py-6"
					onClick={() => setPostPopupOpen(true)}
				>
					<span className="block xl:hidden" title="Post">
						<PlusCircle />
					</span>
					<span className="hidden xl:block">Post</span>
				</Button>
				<PostPopup
					isOpen={postPopupOpen}
					onClose={() => setPostPopupOpen(false)}
				/>

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
