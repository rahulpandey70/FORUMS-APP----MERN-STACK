import { Avatar, Button } from "./common";

export const User = () => {
	return (
		<div className="relative flex items-center p-2">
			<Avatar className="w-10 h-10" />
			<div className="ml-2 flex flex-col">
				<span className="text-primary text-sm font-semibold">Rahul</span>
				<span className="text-muted-foreground text-xs hover:underline hover:text-popover-foreground cursor-pointer hidden xl:block">
					@rahulpandey
				</span>
			</div>
			<div className="flex-none absolute right-0 mr-2 p-2">
				<Button variant={"outline"} size={"sm"}>
					Follow
				</Button>
			</div>
		</div>
	);
};
