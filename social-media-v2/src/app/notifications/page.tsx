import { Notification } from "@/components/notification/Notification";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Breadcrumb } from "@/components/common";
import { ChevronRight, Home } from "lucide-react";

const Notifications = () => {
	return (
		<div className="relative flex h-[calc(100vh-68px)] px-[5vw] gap-4 bg-background">
			<LeftSidebar />
			<div className="md:p-6 flex flex-col gap-4 w-full h-full">
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
				<div className="overflow-y-auto scrollbar-hidden flex flex-col gap-4">
					<Notification />
					<Notification />
					<Notification />
					<Notification />
					<Notification />
					<Notification />
					<Notification />
					<Notification />
					<Notification />
				</div>
			</div>
		</div>
	);
};

export default Notifications;
