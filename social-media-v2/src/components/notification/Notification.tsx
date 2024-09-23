"use client";

import Link from "next/link";
import { PostOptions } from "../common";
import { useState } from "react";
import { Dropdown } from "../common";
import { Avatar } from "../common";

const OptionList = ["clear"];

export const Notification = () => {
	const [optnDropdownOpen, setOptnDropdownOpen] = useState(false);

	return (
		<>
			<div className="border border-border rounded-md p-2">
				<div className="relative flex items-center gap-2">
					<Avatar className="w-10 h-10" />
					<div className="flex md:items-center flex-col md:gap-2 md:flex-row">
						<h3 className="text-sm font-bold text-primary">Rahul</h3>
						<Link
							href={"/userid"}
							className="text-xs hover:underline text-muted-foreground hover:hover:text-popover-foreground"
						>
							@rahulpandey
						</Link>
					</div>
					<PostOptions size={24} setOptnDropdownOpen={setOptnDropdownOpen} />
					{optnDropdownOpen ? <Dropdown OptionList={OptionList} /> : ""}
				</div>
				<p className="my-4">@rohit like your post</p>
			</div>
		</>
	);
};
