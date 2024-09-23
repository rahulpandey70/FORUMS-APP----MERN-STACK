"use client";

import { PlusCircle } from "lucide-react";
import { Button } from "./common";
import { useState } from "react";
import { PostPopup } from "./common/PostPopup";

export const FloatingButton = () => {
	const [showPopupModal, setShowPopupModal] = useState(false);

	return (
		<>
			<Button
				variant={"outline"}
				size={"default"}
				className="md:hidden fixed bottom-4 p-6 right-[5vw] border-2 border:border rounded-full bg-background"
				title="Post"
				onClick={() => setShowPopupModal(true)}
			>
				<PlusCircle size={24} />
			</Button>
			<PostPopup
				isOpen={showPopupModal}
				onClose={() => setShowPopupModal(false)}
			/>
		</>
	);
};
