import { Search } from "lucide-react";

export const Searchbar = () => {
	return (
		<>
			<input
				type="search"
				placeholder="Type to Search..."
				className="relative w-full text-white md:w-auto border border-input bg-transparent p-2 pl-12 pr-[12%] md:pr-6 ring-offset-background rounded-lg focus:outline-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
			/>
			<Search
				className="text-muted-foreground absolute right-[8%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl"
				width={20}
			/>
		</>
	);
};
