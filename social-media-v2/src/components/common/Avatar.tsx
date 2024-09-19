import { cn } from "@/lib/utils";

interface AvatarProps {
	className?: string;
}

export const Avatar = ({ className }: AvatarProps) => {
	return (
		<div
			className={cn("w-12 h-12 border-2 rounded-full text-center", className)}
		></div>
	);
};
