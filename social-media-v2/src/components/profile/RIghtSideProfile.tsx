import { Avatar } from "../common";

export const RightSideProfile = () => {
	return (
		<div className="flex w-full p-4">
			<div className="w-full sticky top-16">
				<div className="flex flex-row gap-2 items-center justify-center p-4 shadow">
					<Avatar className="w-28 h-28 md:w-32 md:h-32" />
					<div className="flex flex-col items-center md:ml-4 gap-2">
						<h1 className="text-primary">Rahul Pandey</h1>
						<h4 className="text-muted-foreground">@rhaulpandey</h4>
						<h4 className="text-muted-foreground">rahul@gmail.com</h4>
					</div>
				</div>

				<div className="flex items-center justify-center gap-4 p-2">
					<div className="flex items-center justify-center">
						<h1 className="text-lg text-muted-foreground font-medium leading-tighter">
							Followings
						</h1>
						<span className="ml-2 text-sm">23</span>
					</div>

					<hr className="flex w-[0.2rem] h-[0.2rem] items-center justify-center text-border bg-border rounded-full" />

					<div className="flex items-center justify-center">
						<h1 className="text-lg text-muted-foreground font-medium leading-tighter">
							Followers
						</h1>
						<span className="ml-2 text-sm">99</span>
					</div>
				</div>
				<hr className="w-full" />
			</div>
		</div>
	);
};
