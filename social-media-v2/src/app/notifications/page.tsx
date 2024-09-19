import { Notification } from "@/components/notification/Notification";
import { LeftSidebar } from "@/components/LeftSidebar";

const Notifications = () => {
	return (
		<div className="md:mx-[5vw] flex">
			<div className="hidden md:flex sticky top-16 h-[calc(100vh-64px)] w-1/4">
				<LeftSidebar />
			</div>
			<div className="w-full p-4 flex flex-col gap-2">
				<div className="w-full sticky top-16 z-10 bg-background">
					<h1 className="text-2xl font-bold text-muted-foreground">
						Notifications
					</h1>
				</div>
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
	);
};

export default Notifications;
