import { CreateFeed } from "@/components/common";
import { FeedCard } from "@/components/feed/FeedCard";
import { Button } from "@/components/common";

export const Feed = () => {
	return (
		<div className="relative flex-1 overflow-y-auto md:p-4 md:w-full scrollbar-hidden">
			<div className="min-h-screen">
				<CreateFeed />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
				<FeedCard />
			</div>
			<Button variant={"outline"} size={"lg"} className="mt-4">
				Load More
			</Button>
		</div>
	);
};
