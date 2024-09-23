"use client";

import { Button } from "./Button";
import { CreateFeed } from "./CreateFeed";
import { useEffect } from "react";

interface PostPopupProps {
	isOpen: boolean;
	onClose: () => void;
}

export const PostPopup: React.FC<PostPopupProps> = ({ isOpen, onClose }) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	// Prevent closing when clicking inside the popup
	const handlePopupClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	return (
		<>
			{/* Backdrop */}
			<div className="fixed inset-0 bg-opacity-100 backdrop-blur-sm z-30" />

			{/* Popup Modal */}
			<div
				className="z-30 flex flex-col gap-2 fixed top-32 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[50%] md:max-w-[80%] bg-background p-4 border border-border rounded-md transition duration-300"
				onClick={handlePopupClick}
			>
				<div>
					<CreateFeed />
					<Button
						variant={"outline"}
						size={"lg"}
						title="Close"
						className="ml-2"
						onClick={onClose}
					>
						Close
					</Button>
				</div>
			</div>
		</>
	);
};
