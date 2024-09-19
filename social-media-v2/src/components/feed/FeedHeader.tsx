"use client";

import { EllipsisIcon } from "lucide-react";
import { FeedDropdown } from "./FeedDropdown";
import { useState } from "react";

export const FeedHeader = () => {
	const [optnDropdownOpen, setOptnDropdownOpen] = useState(false);

	return (
		<div className="relative flex items-center">
			<div className="border-2 rounded-full w-10 h-10"></div>
			<div className="ml-2 flex items-center gap-2">
				<span className="text-primary text-sm">Rahul</span>
				<span className="text-muted-foreground text-xs hover:underline hover:text-popover-foreground cursor-pointer">
					@rahulpandey
				</span>
			</div>
			<div
				className="absolute right-0"
				onClick={() => setOptnDropdownOpen((curr) => !curr)}
			>
				<EllipsisIcon
					size={24}
					className="cursor-pointer text-muted-foreground hover:text-primary"
				/>
			</div>
			{optnDropdownOpen ? <FeedDropdown /> : " "}
		</div>
	);
};
