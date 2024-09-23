import { Github, Twitter, RefreshCcw, Linkedin } from "lucide-react";
import { User } from "./User";
import Link from "next/link";
import { Avatar } from "./common";

export const RightSidebar = () => {
	return (
		<div className="hidden md:w-1/4 lg:block p-4">
			<div className="mb-4">
				<div className="relative flex items-center p-2">
					<Avatar className="w-10 h-10" />
					<div className="ml-2 flex flex-col">
						<span className="text-primary text-sm font-semibold">Rahul</span>
						<span className="text-muted-foreground text-xs hover:underline hover:text-popover-foreground cursor-pointer hidden xl:block">
							@rahulpandey
						</span>
					</div>
				</div>
			</div>
			<div className="border border-border rounded-md">
				<h1 className="flex items-center justify-between text-base font-bold my-4 mx-4 gap-2">
					Suggestions for you
					<span title="Refresh to see more">
						<RefreshCcw
							size={20}
							className="cursor-pointer text-muted-foreground hover:text-popover-foreground"
						/>
					</span>
				</h1>
				<User />
				<User />
				<User />
				<User />
			</div>
			<footer className="flex flex-col gap-4 border border-border rounded-md mt-4 p-4">
				<h1 className="text-base font-bold">Social Link</h1>
				<div className="flex gap-4">
					<Link
						href={"https://github.com/rahulpandey70"}
						target="_blank"
						className="border hover:border-muted-foreground rounded-full p-2"
					>
						<Github size={26} />
					</Link>
					<Link
						href={"https://twitter.com/rahulpandey5342"}
						target="_blank"
						className="border hover:border-muted-foreground rounded-full p-2"
					>
						<Twitter size={26} />
					</Link>
					<Link
						href={"https://linkedin.com/in/rahul-kr-pandey-a9a91a112"}
						target="_blank"
						className="border hover:border-muted-foreground rounded-full p-2"
					>
						<Linkedin size={26} />
					</Link>
				</div>
				<div>&copy; 2024 All rights reserved.</div>
			</footer>
		</div>
	);
};
