import Link from "next/link";

const NotFound = () => {
	return (
		<div className="mx-[5vw] flex flex-col items-center justify-center">
			<h1 className="text-lg font-bold">Page not found</h1>
			<Link href={"/"} className="hover:underline">
				Back to homepage
			</Link>
		</div>
	);
};

export default NotFound;
