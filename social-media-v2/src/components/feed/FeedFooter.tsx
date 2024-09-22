"use client";

import { MessageCircleMore, ShareIcon, ThumbsUp } from "lucide-react";
import { Button } from "../common";
import { useState } from "react";
import { CreateComment } from "../comment/CreateComment";
import { Comment } from "../comment/Comment";

export const FeedFooter = () => {
	const [isCommentOpen, setIsCommentOpen] = useState(false);

	return (
		<>
			<div className="flex items-center justify-between my-2">
				<Button
					variant={"ghost"}
					size={"sm"}
					className="flex items-center justify-center rounded-full gap-2"
				>
					<ThumbsUp size={16} />
					<span className="pointer-events-none text-muted-foreground">4</span>
				</Button>

				<Button
					variant={"ghost"}
					size={"sm"}
					className="flex items-center rounded-full gap-2"
					onClick={() => setIsCommentOpen((curr) => !curr)}
				>
					<MessageCircleMore size={16} />
					<span className="pointer-events-none text-muted-foreground">20</span>
				</Button>

				<Button
					variant={"ghost"}
					size={"sm"}
					className="flex items-center rounded-full gap-2"
				>
					<ShareIcon size={16} />
				</Button>
			</div>
			<Comment />
			<div className="mt-2">
				{isCommentOpen ? <CreateComment label="comment" /> : ""}
			</div>
		</>
	);
};
