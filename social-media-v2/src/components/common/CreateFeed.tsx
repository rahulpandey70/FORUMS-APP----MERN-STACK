import { Button } from "./Button";

export const CreateFeed = () => {
	return (
		<>
			<textarea
				placeholder="Share your thoughts..."
				rows={4}
				className="w-full focus:outline-none bg-background border border:border-muted p-2 rounded-lg resize-none"
			/>
			<Button variant={"outline"} size={"lg"} className="text-base">
				Post
			</Button>
		</>
	);
};
