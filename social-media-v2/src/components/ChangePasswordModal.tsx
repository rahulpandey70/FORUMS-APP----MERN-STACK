import { Lock, X } from "lucide-react";
import { Button, InputBox } from "./common";

export const ChangePasswordModal = ({
	setShowPasswordModal,
}: {
	setShowPasswordModal: any;
}) => {
	return (
		<>
			{/* Backdrop */}
			<div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm z-10" />

			<div className="z-20 top-0 right-0 md:right-28 p-2 absolute w-full md:w-[70%] flex flex-col gap-4 border border:border rounded-md bg-background transition duration-300">
				<div className="flex items-center justify-between">
					<h1 className="text-lg font-semibold text-muted-foreground">
						Change Password
					</h1>
					<X
						size={24}
						className="border border:border p-1 rounded-full text-muted-foreground hover:text-primary cursor-pointer"
						onClick={() => setShowPasswordModal((curr: any) => !curr)}
					/>
				</div>
				<div className="w-full">
					<InputBox
						type="password"
						placeholder="Current Password"
						name=""
						disable={false}
						id=""
						value=""
						icon=<Lock />
					/>
					<InputBox
						type="password"
						placeholder="New Password"
						name=""
						disable={false}
						id=""
						value=""
						icon=<Lock />
					/>
					<InputBox
						type="password"
						placeholder="Confirm Password"
						name=""
						disable={false}
						id=""
						value=""
						icon=<Lock />
					/>
					<div className="flex items-center justify-center">
						<Button variant={"outline"}>Update Password</Button>
					</div>
				</div>
			</div>
		</>
	);
};
