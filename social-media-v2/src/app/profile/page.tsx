import { FeedCard } from "@/components/feed/FeedCard";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSideProfile } from "@/components/profile/RIghtSideProfile";

import { ChevronRight, Home } from "lucide-react";
import { Breadcrumb } from "@/components/common/";

export const metadata = {
	title: "User Profile",
	description: "User profile",
};

const Profile = () => {
	return (
		<div className="relative flex h-[calc(100vh-68px)] px-[5vw] gap-4 bg-background">
			<LeftSidebar />
			<div className="md:p-6 flex flex-col">
				<Breadcrumb
					homeElement={<Home size={16} />}
					separator={
						<span>
							<ChevronRight size={18} />
						</span>
					}
					activeClasses="text-primary"
					containerClasses="flex items-center text-muted-foreground gap-2"
					listClasses="hover:text-primary"
					capitalizeLinks
				/>
				<RightSideProfile />
				<div className="w-full md:w-auto h-full overflow-y-auto scrollbar-hidden">
					<FeedCard />
					<FeedCard />
					<FeedCard />
					<FeedCard />
					<FeedCard />
				</div>
			</div>
		</div>
	);
};

export default Profile;
