"use client";

import { Dropdown } from "../common";
import { useState } from "react";
import { PostOptions } from "../common";
import { Avatar } from "../common";

const OptionList = ["edit", "copy", "delete"];

export const FeedHeader = () => {
	const [optnDropdownOpen, setOptnDropdownOpen] = useState(false);

	return (
		<div className="relative flex items-center">
			<Avatar className="w-10 h-10" />
			<div className="ml-2 flex items-center gap-2">
				<span className="text-primary text-sm">Rahul</span>
				<span className="text-muted-foreground text-xs hover:underline hover:text-popover-foreground cursor-pointer">
					@rahulpandey
				</span>
			</div>
			<PostOptions size={24} setOptnDropdownOpen={setOptnDropdownOpen} />
			{optnDropdownOpen ? <Dropdown OptionList={OptionList} /> : ""}
		</div>
	);
};
