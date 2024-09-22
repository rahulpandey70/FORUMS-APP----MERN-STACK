import { FeedBody } from "./FeedBody";
import { FeedFooter } from "./FeedFooter";
import { FeedHeader } from "./FeedHeader";

export const FeedCard = () => {
	return (
		<div className="relative mt-4 p-2 rounded-md border border-border">
			<FeedHeader />
			<FeedBody />
			<FeedFooter />
		</div>
	);
};
