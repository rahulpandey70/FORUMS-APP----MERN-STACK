import Link from "next/link";

export const Dropdown = ({ OptionList }: { OptionList: string[] }) => {
	return (
		<div className="absolute bg-background border border:border top-0 right-7 p-2 rounded-md transition duration-300 min-w-[130px]">
			<ul className="flex flex-col gap-2 p-2">
				{OptionList.map((option, index) => (
					<Link
						href={option}
						key={index}
						className="capitalize cursor-pointer text-muted-foreground hover:text-primary"
					>
						{option}
					</Link>
				))}
			</ul>
		</div>
	);
};
