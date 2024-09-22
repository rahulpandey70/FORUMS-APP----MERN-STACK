"use client";

import { EllipsisIcon, Reply, ThumbsUp } from "lucide-react";
import { Button } from "../common";
import { useState } from "react";
import { CreateComment } from "./CreateComment";

export const Comment = () => {
	const [isReplyOpen, setIsReplyOpen] = useState(false);

	return (
		<div className="relative border rounded-md p-2">
			<div className="relative mb-2">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-2">
						<div className="w-8 h-8 rounded-full border-2"></div>
						<span className="text-primary text-sm hidden md:flex">Rohit</span>
						<span className="text-muted-foreground text-xs">@rohit</span>
						<EllipsisIcon
							size={14}
							className="absolute right-0 cursor-pointer text-muted-foreground hover:text-primary"
						/>
					</div>
					<p className="mx-6 text-sm">Love your thoughts.</p>
				</div>
				<div className="flex items-center justify-between my-2 mx-6">
					<Button
						variant={"ghost"}
						size={"sm"}
						className="flex items-center justify-center gap-2 rounded-full"
					>
						<ThumbsUp size={14} />
						<span className="pointer-events-none text-muted-foreground">4</span>
					</Button>

					<Button
						variant={"ghost"}
						size={"sm"}
						className="flex items-center justify-center rounded-full gap-2"
						onClick={() => setIsReplyOpen((curr) => !curr)}
					>
						<Reply size={14} />
						<span className="text-sm pointer-events-none text-muted-foreground">
							Reply
						</span>
					</Button>
				</div>
				{isReplyOpen ? <CreateComment label="reply" /> : ""}
			</div>
		</div>
	);
};
