"use client";

import { EllipsisIcon } from "lucide-react";

export const PostOptions = ({
	setOptnDropdownOpen,
	size,
}: {
	setOptnDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
	size: number;
}) => {
	return (
		<>
			<div
				className="absolute right-0"
				onClick={() => setOptnDropdownOpen((curr: any) => !curr)}
			>
				<EllipsisIcon
					size={size}
					className="cursor-pointer text-muted-foreground hover:text-primary"
				/>
			</div>
		</>
	);
};
