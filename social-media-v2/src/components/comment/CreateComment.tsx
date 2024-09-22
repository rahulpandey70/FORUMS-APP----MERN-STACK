import { Button } from "../common";

export const CreateComment = ({ label }: { label: string }) => {
	return (
		<>
			<textarea
				placeholder={`Write your ${
					label === "comment" ? "comment" : "reply"
				}...`}
				rows={2}
				className="w-full focus:outline-none bg-background border border:border-muted p-2 rounded-lg resize-none transition duration-300"
			/>
			<Button variant={"outline"} size={"lg"} className="text-base">
				{label === "comment" ? "Comment" : "Reply"}
			</Button>
		</>
	);
};
