import { LeftSidebar } from "@/components/LeftSidebar";
import { UserInfo } from "@/components/UserInfo";

const Profile = () => {
	return (
		<div className="md:px-[5vw] flex">
			<div className="hidden md:flex sticky top-16 h-[calc(100vh-64px)] w-1/4">
				<LeftSidebar />
			</div>
			<div className="w-full p-4 flex flex-col gap-2">
				<UserInfo />
			</div>
		</div>
	);
};

export default Profile;
