import { Feed } from "./feed/Feed";
import { LeftSidebar } from "./LeftSidebar";
import { RightSidebar } from "./RightSidebar";

export const Dashboard = () => {
	return (
		<div className="relative flex h-[calc(100vh-68px)] my-2 md:my-0 px-[5vw] gap-4 bg-background">
			<LeftSidebar />
			<Feed />
			<RightSidebar />
		</div>
	);
};
