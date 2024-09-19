import { SettingsComponent } from "@/components/Settings";
import { LeftSidebar } from "@/components/LeftSidebar";

const Settings = () => {
	return (
		<div className="mx-[5vw] flex">
			<div className="hidden md:flex sticky top-16 h-[calc(100vh-64px)] w-1/4">
				<LeftSidebar />
			</div>
			<div className="w-full p-4 flex flex-col gap-2">
				<SettingsComponent />
			</div>
		</div>
	);
};

export default Settings;
