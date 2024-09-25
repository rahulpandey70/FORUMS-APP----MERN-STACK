import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const JWT_ACCESS_SECRET = new TextEncoder().encode(
	process.env.JWT_ACCESS_SECRET as string
);

export async function middleware(req: NextRequest) {
	const accessToken = req.cookies.get("accessToken")?.value;

	try {
		if (!accessToken) {
			return NextResponse.redirect(new URL("/login", req.url));
		}

		await jwtVerify(accessToken, JWT_ACCESS_SECRET);
		return NextResponse.next();
	} catch (error) {
		return NextResponse.redirect(new URL("/login", req.url));
	}
}

export const config = {
	matcher: ["/:path*"], // Match all paths
};
