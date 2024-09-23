import { X } from "lucide-react";
import { User } from "../User";

export const FollowListPopup = ({
	label,
	setCloseModal,
}: {
	label: string;
	setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const handleClose = () => {
		return setCloseModal(false);
	};

	return (
		<>
			{/* Backdrop */}

			<div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-30" />

			<div className="p-2 absolute w-[90%] md:w-1/5 h-[70%] top-[10%] md:left-1/3 border border:border rounded-md bg-background z-30 overflow-hidden">
				<div className="flex items-center justify-between">
					{label === "followers" ? (
						<h1 className="text-sm md:text-lg">Followers</h1>
					) : (
						<h1 className="text-sm md:text-lg">Following</h1>
					)}
					<X
						size={24}
						className="border border:border rounded-full cursor-pointer p-1 text-muted-foreground hover:text-primary"
						onClick={handleClose}
					/>
				</div>
				<hr className="w-full my-2" />
				<div className="bg-background w-full h-full overflow-y-auto scrollbar-hidden mb-auto pb-8">
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
					<User />
				</div>
			</div>
		</>
	);
};
