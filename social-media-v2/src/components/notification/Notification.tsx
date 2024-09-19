import Link from "next/link";

export const Notification = () => {
	return (
		<>
			<div className="border border-border rounded-md p-4">
				<div className="flex gap-2">
					<div className="border-2 rounded-full w-10 h-10"></div>
					<div className="flex md:items-center flex-col md:gap-2 md:flex-row">
						<h3 className="text-sm font-bold text-primary">Rahul</h3>
						<Link
							href={"/userid"}
							className="text-xs hover:underline text-muted-foreground hover:hover:text-popover-foreground"
						>
							@rahulpandey
						</Link>
					</div>
				</div>
				<p className="my-4">@rohit like your post</p>
			</div>
		</>
	);
};
