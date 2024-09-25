import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "@/lib/prisma";

const JWT_ACCESS_SECRET = process.env.JWT_ACCESS_SECRET as string;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

export async function POST(req: NextRequest) {
	try {
		const refreshToken = req.cookies.get("refreshToken")?.value;

		if (!refreshToken) {
			return NextResponse.json(
				{ error: "Refresh token not provided" },
				{ status: 401 }
			);
		}

		// Verify the refresh token
		const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET) as JwtPayload;

		// Check if the refresh token is in the database
		const session = await prisma.session.findFirst({
			where: {
				userId: decoded.userId,
			},
		});

		if (!session) {
			return NextResponse.json(
				{ error: "Invalid refresh token." },
				{ status: 403 }
			);
		}

		// create new refresh token
		const newRefreshToken = jwt.sign(
			{ userId: decoded.userId },
			JWT_REFRESH_SECRET,
			{ expiresIn: "7d" }
		);

		console.log("old rf token:-", refreshToken);
		console.log("new rf token:-", newRefreshToken);

		// update the session in database
		await prisma.session.update({
			where: { id: session?.id },
			data: {
				refreshToken: newRefreshToken,
				expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
			},
		});

		// Create a new access token
		const newAccessToken = jwt.sign(
			{ userId: decoded.userId },
			JWT_ACCESS_SECRET,
			{ expiresIn: "1h" }
		);

		// Set the new refresh token cookie
		const response = NextResponse.json(
			{ accessToken: newAccessToken },
			{ status: 200 }
		);

		response.cookies.set("refreshToken", newRefreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "lax",
			maxAge: 7 * 24 * 60 * 60,
		});

		return response;
	} catch (error) {
		return NextResponse.json(
			{ error: "Invalid refresh token" },
			{ status: 403 }
		);
	}
}
