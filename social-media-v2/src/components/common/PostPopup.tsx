import { CreateFeed } from "./CreateFeed";

export const PostPopup = () => {
	return (
		<div className="z-10 px-[5vw] flex flex-col gap-2 left-[10px] w-[95%] md:w-[50%] top-0 absolute bg-background p-4 md:right-0 md:left-80 border border:border rounded-md transition duration-300">
			<CreateFeed />
		</div>
	);
};
