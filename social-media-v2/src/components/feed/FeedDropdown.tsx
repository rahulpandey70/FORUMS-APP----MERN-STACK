import { Copy, Edit, Trash } from "lucide-react";

export const FeedDropdown = () => {
	return (
		<div className="absolute bg-background border border:border top-0 right-7 p-2 rounded-md transition duration-300 min-w-[130px]">
			<ul className="flex flex-col gap-2 p-2">
				<li className="cursor-pointer text-muted-foreground hover:text-primary">
					Edit
				</li>
				<li className="cursor-pointer text-muted-foreground hover:text-primary">
					Copy
				</li>
				<hr />
				<li className="cursor-pointer text-muted-foreground hover:text-primary">
					Delete
				</li>
			</ul>
		</div>
	);
};
