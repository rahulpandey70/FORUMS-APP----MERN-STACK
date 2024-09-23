import { SettingsComponent } from "@/components/Settings";
import { LeftSidebar } from "@/components/LeftSidebar";
import { Breadcrumb } from "@/components/common";
import { ChevronRight, Home } from "lucide-react";

export const metadata = {
	title: "Settings",
	description: "Settings",
};

const Settings = () => {
	return (
		<div className="relative mx-[5vw] flex h-[calc(100vh-64px)] gap-4 bg-background">
			<LeftSidebar />
			<div className="md:p-6 w-full flex flex-col gap-2">
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
				<SettingsComponent />
			</div>
		</div>
	);
};

export default Settings;
