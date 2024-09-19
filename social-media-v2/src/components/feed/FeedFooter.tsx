import { MessageCircleMore, ShareIcon, ThumbsUp } from "lucide-react";
import { Button } from "../common";

export const FeedFooter = () => {
	return (
		<div className="flex items-center justify-between my-2">
			<Button
				variant={"outline"}
				size={"sm"}
				className="relative flex items-center justify-center rounded-full"
			>
				<ThumbsUp size={20} />
				<span className="absolute -right-6 pointer-events-none text-muted-foreground">
					4
				</span>
			</Button>

			<Button
				variant={"outline"}
				size={"sm"}
				className="relative flex items-center rounded-full"
			>
				<MessageCircleMore size={20} />
				<span className="absolute -right-6 pointer-events-none text-muted-foreground">
					20
				</span>
			</Button>

			<Button
				variant={"outline"}
				size={"sm"}
				className="relative flex items-center rounded-full"
			>
				<ShareIcon size={20} />
			</Button>
		</div>
	);
};
