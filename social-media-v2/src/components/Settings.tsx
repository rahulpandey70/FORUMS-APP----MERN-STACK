"use client";

import { Calendar } from "lucide-react";
import { Button } from "./common";
import { EditProfileModal } from "@/components/profile/EditProfileModal";
import { useState } from "react";
import { ChangePasswordModal } from "./ChangePasswordModal";

export const SettingsComponent = () => {
	const [showEditModal, setShowEditModal] = useState(false);
	const [showPasswordModal, setShowPasswordModal] = useState(false);

	return (
		<>
			<div className="flex flex-col gap-2 items-center justify-center">
				<div className="flex flex-col md:flex-row gap-2 items-center justify-center">
					<div className="w-36 h-36 border border:border rounded-full"></div>
					<div className="flex flex-col md:ml-6 gap-2 mt-6 md:mt-0">
						<Button
							variant={"outline"}
							onClick={() => setShowEditModal((curr) => !curr)}
						>
							Edit profile
						</Button>
						{showEditModal ? (
							<EditProfileModal setShowEditModal={setShowEditModal} />
						) : (
							""
						)}
						<Button
							variant={"outline"}
							onClick={() => setShowPasswordModal((curr) => !curr)}
						>
							Change password
						</Button>
						{showPasswordModal ? (
							<ChangePasswordModal
								setShowPasswordModal={setShowPasswordModal}
							/>
						) : (
							""
						)}
					</div>
				</div>

				<div className="flex flex-col gap-1 mt-8">
					<p className="text-destructive text-lg font-bold">Danger Zone*</p>
					<div className="border border:border-red-600 rounded-md p-4">
						<p className="text-center text-xs text-destructive">
							*Once You will delete your account, You won't see any of yours
							posts, followers and followings
						</p>
						<div className="flex flex-col p-2 mt-4 border border:destructive rounded-lg">
							<Button variant={"destructive"} className="md:text-lg p-2">
								Delete Account Parmanently
							</Button>
						</div>
					</div>
				</div>
				<div className="flex gap-2 my-6">
					<h3 className="text-muted-foreground font-semibold">Joined Date:</h3>
					<div className="flex items-center gap-2">
						<Calendar className="text-muted-foreground" size={16} />
						<span className="text-muted-foreground">12 Aug 2024</span>
					</div>
				</div>
			</div>
		</>
	);
};
